<template>
  <div class="scroll-warp scroll-y" ref='scroll'>
    <div class="list-box">
      <div class="con">
        <template v-if="scrollType=='up'">
          <load-bar :show="isLoading"></load-bar>
          <div class="al-c gray fz-s pd-tb" :class="isOver?'show':'hide'">没有更多了</div>
        </template>
        <slot name="list">
          <div class="al-c pdt3 gray">暂无数据！</div>
        </slot>
        <template v-if="scrollType=='down'">
          <load-bar :show="isLoading"></load-bar>
          <div class="al-c gray fz-s pd-tb" :class="isOver?'show':'hide'">没有更多了</div>
        </template>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>


<style scoped >
  .scroll-warp {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  .list-box {
    position: relative;
  }

  .gray {
    color: #cacaca;
  }

  .al-c {
    text-align: center;
  }

  .pdt3 {
    padding-top: 3rem;
  }

  .fz-s {
    font-size: .28rem;
  }

  .pd-tb {
    padding: .2rem 0rem;
  }

  .show {
    display: block !important;
  }

  .hide {
    display: none !important;
  }

</style>

<script>
  import loadBar from './load_bar.vue';
  export default {
//   props: ['scrollAction', 'currentPage', 'pageSize', 'totalSize', 'scrollName'],
    props: {
      isLoading: { // 加载状态
        type: Boolean,
        default: false
      },
      isOver: { // 是否禁止加载
        type: Boolean,
        default: false
      },
      scrollType: { // 滚动方向
        type: String,
        default: 'up'
      },

    },
    data() {
      return {
        is_locked: false,
        old_height: -1,
        none: false,
      };
    },
    mounted() {
      const dom_scroll = this.$refs.scroll;
      dom_scroll.onscroll = this.debounce(() => {
        if (!this.isOver) { // 是否还有新纪录
          let flag;
          if (this.scrollType == 'up') {
            flag = dom_scroll.scrollTop == 0;
            this.old_height = dom_scroll.scrollHeight;
          } else {
            flag = dom_scroll.scrollTop + dom_scroll.offsetHeight + 5 >= dom_scroll.scrollHeight;
          }
          if (flag) {
            if (!this.isLoading) { // 翻页过程中锁定翻页事件
              this.$emit('loadMore');
              this.is_locked = true;
            }
          }
        }
      }, 250);
    },
    updated() {
      if (!this.loading && this.old_height > 0 && this.scrollType == 'up' && !this.isOver) {
        const dom_scroll = this.$refs.scroll;
        dom_scroll.scrollTop = dom_scroll.scrollHeight - this.old_height;
      }
    },
    methods: {
      debounce(func, wait, immediate) {
        let timeout;
        return function () {
          const context = this;
          const args = arguments;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const call_now = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (call_now) func.apply(context, args);
        };
      }
    },
    components: {
      loadBar
    },
  };
</script>