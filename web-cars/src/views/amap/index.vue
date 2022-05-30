<template>
<!-- 地图组件 -->
<div class="amap-wrap">
      <el-amap vid="amapContainer" :zoom="zoom" :events="events" class="amap-demo"> </el-amap>
</div>
 
</template>

<script>
import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap';

    export default{
        name:'index',
        data(){
            return{
                map:null,
                zoom:18,//缩放比例
                events:{}
            }
        },
        mounted(){
       lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: [103.603407, 30.894188],
    zoom:this.zoom,//初始化地图层级
  });
});
        }
    }
</script>

<style style lang="scss">
.amap-wrap{
height: 100vh;
}
</style>