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
  port: 32664,
  username: 'zsezdcnq',
  password: 'u_HDE8ZAVPNY'
}

export default {
  name: 'Level',
  data () {
      return {
          latest: 300
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

        this.data.latest = parseInt(n)

    }
  },

}
</script>
