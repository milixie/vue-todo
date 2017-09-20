<template>
  <div id="app">
    <div class="wrap">
      <scroll-list :isLoading="loading" @loadMore="loadMore" scrollType="down" :isOver="load_over" >
        <ul slot="list" class="list-wrap">
          <li v-for="item in list" class="flex ali">
            <img :src="item.img" alt="">
            <p class="title">{{item.name}}</p>
          </li>
        </ul>
      </scroll-list>
    </div>
  </div>
</template>
<script>
  import ScrollList from './common/scroll_list.vue';
  export default {
    name: 'app',
    data () {
      return {
        total: 20,
        loading: false,
        load_over: false,
        list: [{
          name: '北京',
          code: '100001',
          img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
        }, {
          name: '北京',
          code: '100001',
          img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
        }, {
          name: '北京',
          code: '100001',
          img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
        }, {
          name: '北京',
          code: '100001',
          img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
        }, {
          name: '北京',
          code: '100001',
          img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
        }]
      }
    },
    methods: {
      loadMore() {
        if (this.list.length < this.total) {
          this.loading = true;
          const _self = this;
          setTimeout(function () {
            const new_list = [{
              name: '上海',
              code: '100002',
              img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
            }, {
              name: '上海',
              code: '100002',
              img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
            }, {
              name: '上海',
              code: '100002',
              img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
            }, {
              name: '上海',
              code: '100002',
              img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
            }, {
              name: '上海',
              code: '100002',
              img: 'http://7xj5et.com1.z0.glb.clouddn.com/gallery/img/2.jpg'
            }];
            _self.list = _self.list.concat(new_list);
            _self.loading = false;
          },1000);
        } else {
          this.load_over = true;
        }
      }
    },
    components: {ScrollList}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 20px auto;
  }

  .wrap {
    position: relative;
    width: 300px;
    height: 600px;
    background: #f6f6f6;
    margin: 0 auto;
  }

  .list-wrap {
    margin: 0;
    padding: 10px;
    height: 100%;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .ali {
    padding: 10px;
    background: #fff;
    margin-bottom: 20px;
  }

  .ali img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    overflow: hidden;
  }

  .title {
    padding-left: 30px;
  }

</style>
