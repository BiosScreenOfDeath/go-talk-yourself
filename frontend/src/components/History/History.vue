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
                "style-1",
                "style-2",
                "style-3",
                "style-4",
                "style-5",
                "style-6",
                "style-7",
                "style-8",
                "style-9",
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
            this.getHistoryInConsole();
        })
    },
    methods: {
        getHistoryInConsole(){
            console.log(this.messages);
        },
        addToHistory(message){
            // console.log(message.body); // latest text
            // console.log(message.user_ID); // latest text
            this.userID = message.user_ID ? message.user_ID : "";
            this.lastMessage = message.body;
            let messageRawData = [];
            for(let iterate=0;iterate<message.body.length;iterate++){
                messageRawData.push(message.body[iterate]);
            }
            console.log(message)
            if(this.user_ID != "" && message.type == 1){
                this.users.push({
                    user_ID: this.userID,
                    user_class: this.setMyStyle()
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
        userClass(){
            return this.myStyle
        },
        getUser(user_ID){
            for(const user of this.users) {
                if(user.user_ID === user_ID){
                    console.log("user "+user.user_ID + " exists")
                    return user;
                }
            };
            return {}
        },
        getRandomInt (min, max) {
            const minCeiled = Math.ceil(min)
            const maxFloored = Math.floor(max)
            return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
        },
        setMyStyle() {
            return this.userStyles[this.getRandomInt(0, this.userStyles.length)]
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