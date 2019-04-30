<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function() {}
    },
    handleTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    //即使是没有数据也需要书写 return 否则vue会规则报错
    return {};
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    });
    this.scroll = scroll;
    scroll.on("scroll", pos => {
      this.handleToScroll(pos);
    });
    scroll.on("touchEnd", pos => {
      this.handleTouchEnd(pos);
    });
  },
  methods: {
    ToScrollTop(y) {
      this.scroll.scrollTo(0,-y);
    }
  }
};
</script>

<style scope>
.wrapper {
  height: 100%;
}
</style>
