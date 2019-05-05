<template>
  <div id="main">
    <Header :title="title"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <CiList/>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/Cilist";
export default {
  name: "Cinema",
  data() {  
    //父子组件通信 若通信内容为固定切写死的情况   <Header title="喵喵影院"></Header>
    //   否则  data(){return{title:'喵喵影院'}}  定义过   <Header :title="title"></Header>
   //  加冒号的，说明后面的是一个变量或者表达式，没加冒号的后面就是对应的字符串字面量
   return {
      title:'喵喵影院'
    }
  },
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
