<template>
<div class="cars-wrap">
    <div class="cars-swiper-wrap">
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
        <cars-item height="820px"></cars-item>
    </swiper-slide>  
     <swiper-slide>
        <cars-item></cars-item>
    </swiper-slide>
    <swiper-slide>
        <cars-item></cars-item>
    </swiper-slide>
     <swiper-slide>
        <cars-item></cars-item>
    </swiper-slide>
     <swiper-slide>
        <cars-item></cars-item>
    </swiper-slide>
     </swiper> 
     <div class="swiper-button-prev" slot="button-prev"></div>
     <div class="swiper-button-next" slot="button-next"></div>

    </div> 
<span @click="user">汽车列表</span>
</div>
 
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import CarsItem from '@c/carslist'
    export default{
        name:'Cars',  
        components:{
             Swiper,SwiperSlide,CarsItem
        },    
        data(){
          return{
                swiperOption:{
                  slidesPerview:3,
                  spacebetween:50,
                  navigator:{
                      prevE1:'swiper-button-prev',
                      nextE1:'swiper-button-next'
                  }
                  
              }
          }
        },
        methods:{
            user(){
                this.$router.push({
                    name:'User'
                })
            }
        } 
    }
</script>

<style style lang="scss">
.cars-wrap{
    display: none;
    position: fixed;
    left: 0;
    bottom: 94px;
    right: 0;
    z-index: 11;
}
.cars-swiper-wrap{ 
    position: relative;
    padding: 0 155px;
    .swiper-container{overflow: initial}
    .swiper-button-prev,
    .swiper-button-next{
        width: 60px;
        height: 100px;
        border-radius: 100px;
        background-color: #fff;
        @include webkit(box-shadow, 0 0 18px 0 rgba(0,0,0,.2));
        @include webkit(transition,all .3 ease 0s);
        &.swiper-button-disabled{
            opacity: 1;
        }
        &:hover{ 
            background-color: $color-main;
        }
    }
    .swiper-button-prev{ 
        left: 53px;
        &:after{ 
             content:"";
            width: 14px;
            height: 14px;
            border-left: 3px solid #000;
            border-top: 3px solid #000;
          margin-left: 5px;
          @include webkit(transform,rotate(-45deg));
        }
        &:hover{ 
            &:after{   
            border-left: 3px solid $color-bulr;
            border-top: 3px solid $color-bulr;
            }
        }
        }
    .swiper-button-next{ 
        right: 53px;
        &:after{
             content:"";
            width: 14px;
            height: 14px;
            border-right: 3px solid #000;
            border-top: 3px solid #000;
            margin-right: 5px;
            @include webkit(transform,rotate(45deg));
        }

        }
}
</style>