import { createApp } from 'vue'
import './style.css'
import createWebsocketAPI from "../src/api/index";
import TitleVue from './components/Title/Title.vue'
import ChatVue from './components/Chat/Chat.vue';
import HistoryVue from './components/History/History.vue'
// Use App.vue and inject it with the 3 components above, or try so.
// If it works, skip the template string from below.

const app = createApp({
    template: `
        <TitleVue />
        <HistoryVue :ws="ws" :messages="messages" />
        <ChatVue :ws="ws" />
        `,
    data: function() {
        return {
            ws: createWebsocketAPI("ws://localhost:9009/ws"),
            messages: []
        }
    },
    components: {
        TitleVue,
        HistoryVue,
        ChatVue
    },
    mounted: function() {

        this.ws.onConnect(() => {
            console.log('connected')
        })

        // this.ws.onMessage(msg => {
        //     let messageJSON = JSON.parse(msg.data);
        //     this.addToHistory(messageJSON.body);
        //     // console.log(messageJSON.body); // latest text
        //     // console.log(this.messages); // chat history
        // })

        this.ws.connect()

    },
    methods: {
        // addToHistory(message){
        //     console.log(message); // latest text
        //     let messageRawData = [];
        //     for(let iterate=0;iterate<message.length;iterate++){
        //         messageRawData.push(message[iterate]);
        //     }
        //     this.messages.push(messageRawData.join(''));
        // },
        getHistoryInConsole(){
            console.log(this.messages);
        }
     }
});
app.mount('#app');
// LETSFUCKINGOOOOOOOOOOOOOOOOOOOOOOOO