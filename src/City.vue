<template>
  <div id="app">
    <div class="city">
      <input type="text" class="city-input" :value="input_value" @focus="selectCity">
      <div class="select-wrap">
        <city-select :show="show" @selectedItem="selectedItem"/>
      </div>
    </div>
  </div>
</template>
<script>
  import CitySelect from './components/CitySelect.vue';
  export default {
    name: 'app',
    data () {
      return {
        input_value: '',
        show: false
      }
    },
    methods: {
      selectCity() {
        this.show = true;
      },
      selectedItem(item) {
        if (!item) return;
        this.input_value = item.name;
        this.show = false;
      },
    },
    components: {CitySelect}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 400px;
    margin: 60px auto;
  }

  .city {
    position: relative;
  }

  .city-input {
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    padding: 12px 15px;
    font-size: 20px;
  }

  .select-wrap {
    position: absolute;
    left: 0;
    top: 50px;
  }
</style>
