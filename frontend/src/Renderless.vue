<script>
// DEPRECATED
export default {
  data() {
    return {
      universe: 'universeValue',
      state: {
        chatHistory: [],
      }
    }
  },
  methods: {
      chatMount() {
        connectionHandler((msg) => {
          this.setState(prevState => ({
              chatHistory: [...prevState.chatHistory, msg]
            }))
        });
    }
  },
  computed: {
    send(event) {
      if (event.keyCode === 13) {
        sendMsg(event.target.value);
        event.target.value = "";
      }
    }
  },
  render(){
    return this.$scopedSlots.default({
      // chatHistory: this.state.chatHistory,
      // send: this.send,
      // chatMount: this.chatMount
      exampleProp: 'universe',
    });
  }
}
</script>

<template>
  <h1>
  	<slot :exampleProp="this.universe"></slot>
	</h1>
</template>