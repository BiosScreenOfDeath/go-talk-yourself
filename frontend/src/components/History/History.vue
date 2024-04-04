<script>
import MessageVue from '../Message/Message.vue';

export default {
    props: ['ws','messages'],
    components:{
        MessageVue
    },
    data() {
        return {
            userStyles: [
                "flame-pea",
                "web-orange",
                "electric-lime",
                "bright-green",
                "spring-green",
                "cyan-aqua",
                "blue-ribbon",
                "electric-violet",
                "magenta-fuchsia",
                "torch-red"
            ], 
            lastMessage: "",
            userID: "",
            users: []
        }
    },
    computed: {
        lastMessage(){
            return this.lastMessage
        }
    },
    mounted: function(){
        this.ws.onMessage(msg => {
            let messageJSON = JSON.parse(msg.data);
            this.addToHistory(messageJSON);
            // this.getHistoryInConsole();
        })
    },
    methods: {
        getHistoryInConsole(){
            console.log(this.messages);
        },
        addToHistory(message){
            // console.log(message.body); // latest text
            // console.log(message.user_ID); // latest user ID
            this.userID = message.user_ID ? message.user_ID : "";
            this.lastMessage = message.body;
            let messageRawData = [];
            for(let iterate=0;iterate<message.body.length;iterate++){
                messageRawData.push(message.body[iterate]);
            }
            if(this.user_ID != ""
            && message.type == 1
            && typeof message.user_class_id === 'number'){
                this.users.push({
                    user_ID: this.userID,
                    user_class: this.setMyStyle(message.user_class_id)
                })

                this.messages.push({
                    body: messageRawData.join(''),
                    user_ID: this.userID,
                    user_class: this.getUser(message.user_ID).user_class
                });
            } else {
                this.messages.push({
                    body: messageRawData.join(''),
                    user_ID: this.userID,
                    user_class: ""
                });
            }
        },
        getUser(user_ID){
            for(const user of this.users) {
                if(user.user_ID === user_ID){
                    return user;
                }
            };
            return {}
        },
        setMyStyle(class_id) {
            return this.userStyles[class_id]
        }
    }
}
</script>
<template>
    <div id="chat-history">
        <ul>
            <MessageVue
            v-if="this.messages"
            v-for="messageEntry in this.messages"
            :message="messageEntry.body"
            :user_ID="messageEntry.user_ID"
            :user_class="messageEntry.user_class" />
        </ul>
    </div>
</template>