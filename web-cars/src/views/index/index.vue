<template>
<div> 
      <!-- 会员 -->
<div id="children-view" :class="{open: show}"><router-view/></div>

     <!-- cars-data渲染 -->
   <Cars/>

    <!-- 地图组件 -->
     <Map/>

     <!-- 导航组件 -->
    <Navbar/>

    <login/>
</div>
 
</template>

<script>
import Map from "../amap/index";
import Cars from "../cars/index"
import Navbar from "@c/navbar"
import Login from "./login";

    export default{
        name:'index',
        components:{
            Map,
            Cars,
            Navbar,
            Login
        },
        data(){
          return{
            // show:false
          }
        },
        computed:{
            //监听路由变化
            show(){
               const router =this.$route;
               return router.name==='index' ? false : true;
            }
        },
        mounted(){
           document.addEventListener('mouseup',(e)=>{
               const userCon=document.getElementById('children-view');
               if(userCon){
                   if(!userCon.contains(e.target)){
                       this.$router.push({
                           name:'index'
                       }).catch((err)=>{
                       })
                   }
               }
           })
        },
        watch:{
        }
    }
</script>

<style style lang="scss">
#children-view{
    position: fixed;
    top: 0;
    bottom: 0;
    right: -600px;
    width: 410px;
    z-index: 100;
    background-color: #34393f;
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -ms-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    &.open{
        right: 0;
    }
}
</style>