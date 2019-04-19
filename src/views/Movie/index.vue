<template>
    <div id="main">
        <Header></Header>
          <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" to="/movie/city" class="city_name">
                        <span></span><i class="iconfont icon-lower-triangle"></i>
                    </router-link>
                    <div class="hot_swtich">
                        <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                        <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
                    </div>
                    <router-link tag="div" to="/movie/search" class="search_entry">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                    
                </div>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
name:'Movie',
components:{
    Header,
    TabBar
}
}
</script>

<style>

</style>
