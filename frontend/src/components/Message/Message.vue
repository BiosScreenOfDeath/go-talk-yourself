<script>
import { onMounted } from 'vue'

export default {
    setup(props){
        // FIND A WAY TO SET UP THE COLOR CLASS PER USER DYNAMICALLY
        // CONSIDER: SET ALL DATA IN SETUP ALONG WITH THE DYNAMICALLY-SET CLASSNAME OF EACH USER
    },
    props: [
        'message',
        'user_ID'
    ],
    data() {
        return {
            userStyles: [
                "style-1",
                "style-2",
                "style-3"
            ],
        }
    },
    methods: {
        setMyStyle: () => {
            myStyle = userStyles[getRandomInt(0, userStyles.length)]
        },
        getRandomInt: (min, max) => {
            const minCeiled = Math.ceil(min)
            const maxFloored = Math.floor(max)
            return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
        }
    },
    computed: {
        chatClass() {
            if(this.user_ID != ""){
                return "user-"+this.user_ID.replace(" ", "_")
            } else if(this.message.includes("New user")) {
                return "new-user"
            } else if(this.message.includes("disconnected")) {
                return "user-disconnect"
            }
            return ""
        },
        userClass(){
            return ""
        },
        messageEntry(){
            if(this.user_ID != ""){
                return this.user_ID + ":" + this.message
            }
            return this.message
        }
    }
}
</script>
<template>
    <li
        :class="[chatClass, userClass]"
        style="list-style:none;">
        {{ messageEntry }}
    </li>
</template>