<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :hot="hotCities" :city="cities"></city-list>
      <city-alp :alps="alphabet"></city-alp>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlp from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlp
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  mounted () {
    this.getCityInfo()
  },
  computed: {
    alphabet () {
      var array = []
      for (var i in this.cities) {
        array.push(i)
      }
      return array
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCitySucc)
    },
    getCitySucc (res) {
     var data = res.data.data
     console.log(data)
     this.hotCities = data.hotCities
     this.cities = data.cities
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
