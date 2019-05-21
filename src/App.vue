<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMqtt from 'vue-mqtt'

const options = {
  port: 32664,
  username: 'zsezdcnq',
  password: 'u_HDE8ZAVPNY'
}

Vue.use(VueMqtt, 'wss://m24.cloudmqtt.com', options)


export default {
  name: 'App'
}
</script>

<style>
</style>
