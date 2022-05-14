<template>
  <!-- <q-page class="flex flex-center"> -->
      <div class="pageinfo">
    
        <h4>Water level time series plot</h4>
        
        <vue-plotly id="graph" :data="data" :layout="layout" :options="options" />
      </div>  
        
  <!-- </q-page> -->
</template>

<style>
.pageinfo {
  margin:0 auto; padding: 30px;
  width: 100vw;
  overflow-y: none;
}
</style>

<script>
import VuePlotly from '@statnett/vue-plotly/dist/vue-plotly.js'

const options = {
  port: 32664,
  username: 'zsezdcnq',
  password: 'u_HDE8ZAVPNY'
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
        
        var n = val.toString()
        console.log('New value: ', n)

        var new_data = { x: this.i , y: -1*parseInt(n)}

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
