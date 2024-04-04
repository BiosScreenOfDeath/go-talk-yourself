<script>
import TitleVue from './components/Title/Title.vue'
import ChatVue from './components/Chat/Chat.vue';
import HistoryVue from './components/History/History.vue'
</script>

<template>
  <TitleVue />
  <HistoryVue chatHistory={{chatHistory}} />
  <ChatVue send={{send}} />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
