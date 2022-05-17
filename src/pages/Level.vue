<template>
  <q-page class="flex flex-center">
     
        <div>
          <h3>Current measured depth:  </h3>
          
          <h4> In cm: {{ this.latest}} cm </h4> 
          <h4> In feet: {{ this.latest * 0.0328084 }} ft </h4>
        </div> 
       

  </q-page>
</template>

<style>
</style>

<script>

const options = {
  port: 35587, //32664,
  username: 'uzyenhei', //'zsezdcnq',
  password: 'otG6lNz-TTnx' //'u_HDE8ZAVPNY'
}

export default {
  name: 'Level',
  data () {
      return {
          latest: 300
      }
  },

  created: function () {
    console.log('Connecting to MQTT server')
    this.$mqtt.subscribe('waterLevelValue', options)
    console.log('connected')
  },
  mqtt: {
    'waterLevelValue': function (val) {
        
        var n = JSON.parse(val) //.toString()
        console.log('New value: ', n)
        var level = n['levelcm']
        this.latest = parseFloat(level) * 4.3

    }
  },

}
</script>
