<script>
  export default {
    props: ['ws'],
    data() {
      return {}
    },
    methods: {
      // ALRIGHT, WHAT WE NEED IS.
      // 2. SHOW IT TO HISTORY
      // 3. make SURE the clients communicate with each other
      funni(event){
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
      <input v-on:keyup.enter="funni" placeholder="Type here... "/>
  </div>
</template>