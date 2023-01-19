<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import TitleVue from './components/Title/Title.vue'
import ChatVue from './components/Chat/Chat.vue';
import HistoryVue from './components/History/History.vue'
// import Renderless from './Renderless.vue';
</script>

<template>
  <!-- <renderless v-slot="exProp">
    {{exProp.exampleProp}}
  </renderless>
  <TitleVue /> -->
  <!-- <renderless slot-scope="{ chatHistory, send, chatMount }">
    <TitleVue />
    <HistoryVue chatHistory={{chatHistory}} />
    <ChatVue send={{send}} />
  </renderless> -->
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
