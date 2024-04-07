<script>
  export default {
    props: ['ws'],
    data() {
      return {}
    },
    methods: {
      sendViaWebsocket(event){
        this.ws.sendMessage(event.target.value)
        event.target.value = ""
      }
    }
  }
</script>

<style>
.ChatVue{
    width:95;
    margin:auto;
}
</style>

<template>
  <div className='ChatVue'>
      <input v-on:keyup.enter="sendViaWebsocket" placeholder="Type here... "/>
  </div>
  <footer class="p-5 bg-dark text-white text-center position-relative">
        <div class="container">
          <p class="lead"> &copy; {{ (new Date()).getFullYear() }} Go GoTalkYourself. </p>
        </div>
    </footer>
</template>