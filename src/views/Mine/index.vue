<template>
      <div id="main">
        <Header title="我的喵喵"></Header>
          <div id="content">
           <router-view></router-view>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
name:"Mine",
components:{
    Header,
    TabBar
}
}
</script>

<style>

</style>
