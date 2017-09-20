<template>
  <div id="app">
    <header-title :lists="lists"/>
    <div class="search">
      <input type="text" v-model="input_value" @keyup.13="addToLists" placeholder="请输入你需要做的任务">
    </div>
    <ul class="lists">
      <li v-for="(list, index) in lists" class="lis" :id="index">
        <div class="flex1">
          <input type="checkbox" v-model="list.is_finished">
          <span>{{index + 1}}.</span>
          <span :class="{line: list.is_finished}">{{ list.label }}</span>
          <span v-show="list.is_finished" class="finish">finished</span>
        </div>
        <div @click="deleteList(list, index)">
          <button class="btn">delete</button>
        </div>
      </li>
    </ul>
    <alert msg="您的任务还没完成，确定要删除？" v-if="mask.show" @status="operation => getOperation(operation, mask.index)"/>
  </div>
</template>
<script>
import Hello from './components/Hello'
import Anim from './components/Anim'
import HeaderTitle from './components/Header_title.vue'
import Alert from './components/Alert.vue'

export default {
  name: 'app',
  data () {
    return {
      input_value: '',
      mask: {
        show: false,
        index: 0
      },
      lists: JSON.parse(window.localStorage.getItem('todos-vuejs') || '[]')
    }
  },
  watch: {
    lists: {
      handler: function () {
        window.localStorage.setItem('todos-vuejs', JSON.stringify(this.lists))
      },
      deep: true
    }
  },
  methods: {
    addToLists () {
      if (!this.input_value) return;
      this.lists.push({
        label: this.input_value,
        is_finished: false
      });
      this.input_value = ''
    },
    deleteList (list, index) {
      if (list.is_finished) {
        this.lists.splice(index, 1)
      } else {
        this.mask = {
          show: true,
          index
        }
      }
    },
    getOperation (operation, index) {
      if (operation) {
        this.lists.splice(index, 1)
      }
      this.mask = {
        show: false,
        index: 0
      }
    }
  },
  components: {
    Hello,
    Anim,
    HeaderTitle,
    Alert
  }
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
.lis {
  display: flex;
  justify-content: space-between;
}
  .search input{
    height: 40px;
    width: 200px;
    border-radius: 6px;
    outline: none;
    border: 1px solid #ddd;
    padding: 0 20px;
  }
  .lists {
    width: 300px;
    text-align: left;
    padding: 0;
  }
  .lists li {
    list-style: none;
    line-height: 2rem;
  }
  .line {
    text-decoration: line-through;
  }
  .finish {
    background: slategrey;
    color: #fff;
    border-radius: 6px;
    padding: 3px 6px;
    font-size: 12px;
  }
  .btn {
    background: indianred;
    color: #fff;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 6px;
  }
</style>
