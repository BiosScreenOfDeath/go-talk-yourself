<script>
import MessageVue from '../Message/Message.vue';

export default {
    props: ['ws','messages'],
    components:{
        MessageVue
    },
    data() {
        return { lastMessage: ""}
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
            this.messages.push({
                body: messageRawData.join(''),
                user_ID: this.userID,
            });
        },
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
            :user_ID="messageEntry.user_ID"  />
        </ul>
    </div>
</template>