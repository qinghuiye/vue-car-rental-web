<template>
  <div>
<section class="cars-item">
      <header>
          <h4 class="cars-logo">
              <img src="../../assets/images/cars-logo.png" alt="Mustang 2019 款">
              <span class="name">Mustang 2019 款</span>
              </h4>
          <p class="attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
          <div class="info">
              <div>
                <h4 class="cars-number">fa64654</h4>
                <div class="text">
                    <ul class="cars-electra active-li-3">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p class="distance">
                    <sub>约</sub>
                    <strong>600</strong>
                    <sub>KM</sub>
                </p>
                </div>
              </div>
              
          </div>
          <img src="../../assets/images/pic001.jpg" alt="">
      </div>
      <footer>
          <a href="" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-detailed" :style="'height:'+height">
    <div class="scroll">
    <h4 class="column">某某停车场
        <i class="close"></i>
    </h4>
     <header>
          <h4 class="cars-logo">
              <img src="../../assets/images/cars-logo.png" alt="Mustang 2019 款">
              <span class="name">Mustang 2019 款</span>
              </h4>
          <p class="attr">新能源汽车 5座</p>
      </header>
      <img src="../../assets/images/pic001.jpg" alt="" width="100%">
      <div class="clearfix">
          <div class="cars-number fs-24">京A35256</div>
       <p class="distance pull-right">
       <sub>约</sub>
        <strong>600</strong>
         <sub>KM</sub>           
                </p>
      </div>
      <div class="cars-ele-box">
        <div class="p-r">
            <span class="e-high" style="width:80%"></span>
            <span class="e-bg"></span>
        </div>
      </div>
     <p class="infor color-main text-center">ergegegegegergerrggrg</p>
     <ul class="cars-type-list"> 
         <li class="current">
             <h4 class="carsname">日租车</h4>
             <span class="price">￥300/天</span>
         </li>
         <li>
             <h4 class="carsname">日租车</h4>
             <span class="price">￥300/天</span>
         </li>
         <li>
             <h4 class="carsname">日租车</h4>
             <span class="price">￥300/天</span>
         </li>
         <li>
             <h4 class="carsname">日租车</h4>
             <span class="price">￥300/天</span>
         </li>
     </ul>
     <div class="clouse-dec"><span>服务协议</span><i class="current"></i></div>
     </div>
      <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
    </section>
  </div>

</template>

<script>
export default {
name:'Carslist',
props:{
    height:{
        type:String,
        default:'800'
    }
}
}
</script>

<style lang="scss" scoped>
.cars-item{
    width: 505px;
    height: 257px;
    margin: auto;
    padding: 30px 30px 0;
    background-color: #fff;
    border-radius: 24px;
    @include webkit(box-shadow, 0 0 18px 0 rgba(0,0,0,.2) );
    @include webkit(box-sizing, border-box);
    header{
      display: flex;
      h4, p{
          flex: 1;
      }
    }
    
}
.cars-logo{
    img{
        display: inline-block;
        height: 34px;
        margin-right: 10px;
        vertical-align: middle;
    }
    .name{
        font-size: 16px;
    } 
}
.attr{
        text-align: right;
        line-height: 34px;
        opacity: .5;
    }
.cars-content{
    position: relative;
        margin: 11px 0 7px;
        @extend %clearfix;
        img{
            float: right;
            height: 120px;
        }
        .info{
            display: flex;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            align-items: center;

        }
        .cars-number{
           font-size: 18px;
        }
        .text{
            display: flex;
            justify-content: space-between;
        }
        .cars-electra{
            padding-top: 10px;
            li{
                display: inline-block;
                width:7px;
                height: 24px;
                margin-right: 3px;
                background-color: #e1e1e1;
                border-radius: 100px;
            }
            @for $i from 1 through 10 {
            &.active-li-#{$i}{
                li:nth-child(-n+#{$i}) { @include webkitA(background, linear-gradient(#17a8fa, #108dd9)); }
            }
        }
        }
       
}
 .distance{
            margin-top: 10px;
            margin-left: 5px;
            display: inline-block;
            strong{
                margin: 0 5px;
                font-size: 22px;
            }
            sub{
                position: relative;
                top: -2px;
            }
            sub:first-of-type{
                opacity: .8;
            }
        }
.parking-link{ 
    position: relative;
    display: block;
    border-top: 1px #e1e1e1 solid;
    color: $color-main;
    opacity: .8;
    line-height: 53px;
    &:after{
        content:"";
        position: absolute;
        right: 0;
        top: 50%;
        width: 8px;
        height: 8px;
        margin-top: -8px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        @include webkit(transform,rotate(45deg));
    }
}
.cars-detailed{ 
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 0;
    .scroll{
        height: 100%;
        overflow-y: auto;
    }
    .column{
        position: relative;
        padding: 26px 0 20px;
        margin-bottom: 19px;
        font-size: 20px;
        color: #34393f;
        border-bottom: 1px solid #e1e1e1;
        .close{
            position:absolute;
            right: 0px;
            top: 23px;
            display: block;
            width: 26px;
            height: 26px;
            
            &:before, &:after{
                content:"";
                position: absolute;
                top: 50%;
                left: 50%;
                height: 20px;
                margin-left: -1px;
                margin-top: -10px;
                border-left: 2px solid #999c9f;
            }
            &::before{@include webkit(transform,rotate(45deg))};
            &::after{@include webkit(transform,rotate(-45deg))};
        }
    }
    .select-car-btn{
        position: absolute;
        left: 50%;
        margin-left: -120px;
        bottom: -42px;
    }
}
.cars-ele-box{ 
    margin-top: 17px;
    padding: 15px;
    border-radius: 100px;
    background-color: #fff;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, .1));
    .e-bg{
        display:block;
          height: 8px;
          background-color: #e1e1e1;
          border-radius: 100px;
    }
    .e-high{
        position: absolute;
        background-color: $color-bulr;
        border-radius: 5px;
        left: 0;
        top: 0;
        height: 100%;
    }  
} 
.infor{
       margin: 32px 0 28px;
    }
    .cars-type-list{
        li{
            height: 43px;
            padding: 0 17px 0 20px;
            margin-bottom: 15px;
            background-color: #f3f3f3;
            border-color: #f3f3f3;
            border-style: solid;
            border-width: 2px;
            border-radius: 10px;
            font-size: 16px;
            line-height: 43px;
        }
        .current{
         border-color: #17a8fa;
        }
        .carsname{
            float: left;
        }
        .price{
            float: right;
        }
    }
    .clouse-dec{
        @extend %clearfix;
        i{
          float:right;
          width: 20px;
          height: 20px;
          border-radius: 100px;
          background-color: #cccccc;
          &.current{
             background-color: $color-main;
          }
          &::before{
              content:"";
              display: block;
              width: 8px;
              height: 4px;
              margin: 6px 0 0 5px;
              border-left: 2px solid #fff;
              border-bottom: 2px solid #fff;
              @include webkit(transform,rotate(-45deg));
          }
        }
    }
</style>