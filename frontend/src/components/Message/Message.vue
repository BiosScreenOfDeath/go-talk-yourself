<script>

export default {
    setup(props){
        // return { userStyles, myStyle, getRandomInt, getRandomInt, setMyStyle}
    },
    props: [
        'message',
        'user_ID',
        'user_class'
    ],
    data() {
        return { }
    },
    methods: {},
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
        messageEntry(){
            console.log("user class (message.vue)",this.user_class);
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
        :class="[chatClass, user_class]"
        style="list-style:none;">
        {{ messageEntry }}
    </li>
</template>