<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMqtt from 'vue-mqtt'

const options = {
  port: 35587, //32664,
  username: 'uzyenhei', //'zsezdcnq',
  password: 'otG6lNz-TTnx' //'u_HDE8ZAVPNY'
}

Vue.use(VueMqtt, 'wss://m10.cloudmqtt.com', options)


export default {
  name: 'App'
}
</script>

<style>
</style>
