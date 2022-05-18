<template>
  <!-- <q-page class="flex flex-center"> -->
      <div class="pageinfo">
    
        <h4>Water level time series plot</h4>
        
        <vue-plotly id="graph" :data="data" :layout="layout" :options="options" />
        

        <h4>GPS Data</h4>
        <p>Latitude: {{this.lat}}</p>
        <p>Longitude: {{this.long}}</p>
        <p>Current time: {{ new Date(new Date().toISOString()).toString() }}</p>

        <h4>Depth</h4>
        <p>Level in cm (in air, calculated using speed of sound in air): {{this.latest}} cm</p>
         <p>Level in cm (in water, calculated using speed of sound in water): {{this.latest * 4.314}} cm</p>
      </div>  
        
  <!-- </q-page> -->
</template>

<style>
.pageinfo {
  margin:0 auto; padding-top: 30px;
  padding-left: 10px;
  width: 100vw;
  overflow-y: none;
}
</style>

<script>
import VuePlotly from '@statnett/vue-plotly/dist/vue-plotly.js'

// import geocoder from 'offline-geocoder';
// const g = geocoder({database: 'data/geodata.db'})
// const geocoder = require('offline-geocoder')({ database: 'data/geodata.db' })

const options = {
  port: 35587, //32664,
  username: 'uzyenhei', //'zsezdcnq',
  password: 'otG6lNz-TTnx' //'u_HDE8ZAVPNY'
}

export default {
  name: 'PageIndex',
  components: {
      VuePlotly
  },
  data () {
      return {
          i: 2,
          data: [{ x: [0], y: [0] }],
          long: 0.0,
          lat: 0.0,
          layout: {},
          options: {},
          latest: 2,
      }
  },


  created: function () {
    this.$mqtt.subscribe('waterLevelValue', options)
    console.log('connected')
  },
  mqtt: {
    'waterLevelValue': function (val) {    
        var recv = JSON.parse(val) //.toString()
        var n = recv['levelcm']
       
        var long = recv['long']
        var lat = recv['lat']

        this.lat = lat
        this.long = long
        this.latest = n
        
        console.log('New value: ', recv)

        var new_data = { x: this.i , y: -1 * parseFloat(n) }

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

        this.data.latest = new_data['x']

    }
  }
}
</script>
