<script>
import MessageVue from '../Message/Message.vue';

// FIND A WAY TO DISPLAY <MESSAGEVUE/>
// IF YOU TRY TO DISPLAY THE this.messages, the data will show!!!

export default {
    props: ['ws','messages'],
    components:{
        MessageVue
    },
    // template: `
    //     <div id="chat-history">
    //         <MessageVue />
    //     </div>
    // `,
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
            this.addToHistory(messageJSON.body);
            this.getHistoryInConsole();
        })
    },
    methods: {
        getHistoryInConsole(){
            console.log(this.messages);
        },
        addToHistory(message){
            console.log(message); // latest text
            this.lastMessage = message;
            let messageRawData = [];
            for(let iterate=0;iterate<message.length;iterate++){
                messageRawData.push(message[iterate]);
            }
            this.messages.push(messageRawData.join(''));
        },
    }
}
</script>
<template>
    <div id="chat-history">
        <ul>
            <MessageVue v-for="messageEntry in this.messages" :message="messageEntry" />
        </ul>
    </div>
</template>