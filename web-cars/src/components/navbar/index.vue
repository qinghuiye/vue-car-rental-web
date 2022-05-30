<template>
    <div class="navbar">
        <ul>
            <li><i class="icon icon-help"></i></li>
            <li><i class="icon icon-serch"></i></li>
             <li>
                 <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
             </li>
            <li><i class="icon icon-dinwei"></i></li>
            <li><i class="icon icon-user" @click="touser"></i></li>
           
        </ul>
    </div>
</template>

<script>

export default ({
   name:'Navbar',
   methods:{
       touser(){
           this.$router.push({name:'User'})
       }
   }
})
</script>

<style lang="scss" scoped>
.navbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 86px;
    z-index: 10;
    text-align: center;
    li{
        display: inline-block;
    }
    .icon{
        vertical-align: middle;
        margin: 0 17px;
        cursor: pointer;
    }
}
.select-car-btn{
    display: block;
    width: 240px;
    height: 84px;
    margin: 0 17px;
    border-radius: 100px;
    line-height: 84px;
    text-align: center;
    color: #fff;
    font-size: 26px;
    background-color: $color-main;
}

</style>