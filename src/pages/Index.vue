<template>
  <q-page class="flex flex-center">
       <vue-plotly id="graph" :data="data" :layout="layout" :options="options" />
  </q-page>
</template>

<style>
</style>

<script>
import Vue from 'vue'
import VueMqtt from 'vue-mqtt'
import VuePlotly from '@statnett/vue-plotly/dist/vue-plotly.js'

const options = {
  port: 32664,
  username: 'zsezdcnq',
  password: 'u_HDE8ZAVPNY'
}

Vue.use(VueMqtt, 'wss://m24.cloudmqtt.com', options)


export default {
  name: 'PageIndex',
  components: {
      VuePlotly
  },
  data () {
      return {
          i: 2,
          data: [{ x: [0], y: [0] }],
          layout: {},
          options: {}
      }
  },


  created: function () {
    this.$mqtt.subscribe('waterLevelValue', options)
    console.log('connected')
  },
  mqtt: {
    'waterLevelValue': function (val) {
        
        var n = val.toString()
        console.log('New value: ', n)
        var new_data_y = this.data[0]['y']
        var new_data_x = this.data[0]['x']

        new_data_y.push(parseInt(n))
        new_data_x.push(this.i)

        var new_data = { x: this.i , y: parseInt(n)}

        this.updateValues(new_data)
    }
  },

 
  methods: {
    getCurrentTime () {
        let today = new Date();
        return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    },

    updateValues (new_data) {
        this.data[0]['x'].push( new_data['x'] )
        this.data[0]['y'].push( new_data['y'] )
        console.log(this.data)
        this.i += 2
    }
  }
}
</script>
