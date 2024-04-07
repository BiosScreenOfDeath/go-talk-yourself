import { createApp } from 'vue'
import './style.css'
import createWebsocketAPI from "../src/api/index";
import TitleVue from './components/Title/Title.vue'
import ChatVue from './components/Chat/Chat.vue';
import HistoryVue from './components/History/History.vue'

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

        this.ws.connect()

    },
    methods: {
        getHistoryInConsole(){
            console.log(this.messages);
        }
     }
});
app.mount('#app');