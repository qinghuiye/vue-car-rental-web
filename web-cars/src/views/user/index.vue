<template>
    <div class="user-container">
        <div class="user-info">
            <img src="../../assets/images/face.png" alt="">
            <div class="meta">
                <h4 class="name">eagarg</h4>
                <span>
                    文明驾驶分
                    <strong>0</strong>
                </span>
            </div>
        </div>
        <ul class="group-links">
            <router-link to="/my" tag="a" class="arrow">
                <i class="icon icon-user-link-1"></i>
                我的帐户
            </router-link>
             <router-link to="/order" tag="a" class="arrow">
                <i class="icon icon-user-link-2"></i>
                租车订单
            </router-link>
             <router-link to="/authentication" tag="a" class="arrow">
                <i class="icon icon-user-link-3"></i>
                实名认证
            </router-link>
             <router-link to="/safe" tag="a" class="arrow">
                <i class="icon icon-user-link-4"></i>
                安全设置
            </router-link>
             <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-user-link-5"></i>
                帮助中心
            </router-link>
        </ul>
        <button class="logout">登出</button>
    </div>
</template>
<script>
export default {
    name: "User",
    components: {},
    data(){
        return {
            
        }
    },
    methods: {
       
    }
    
}
</script>
<style lang="scss">
.logout {
    position: absolute;
    left: 50%;
    bottom: 60px;
    width: 165px;
    height: 58px;
    margin-left: -82px;
    background-color: #2d3339;
    border-radius: 100px;
    text-align: center;
    line-height: 58px;
    color: #fff;
    font-size: 18px;
    border: none;
    outline: none;
}
.user-info {
    display: flex;
    padding: 84px 0 80px 10px; // 方向顺时针，4个边
    img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 6px solid #2f343a;
    }
    .meta {
        flex: 1;
        padding-left: 17px;
    }
    .name {
        color: #909090;
        line-height: 43px;
        font-size: 18px;
    }
    span {
        display: inline-block;
        height: 27px;
        padding: 0 17px;
        background-color: #10a0f2;
        border-radius: 100px;
        line-height: 27px;
        color: #fff;
        font-size: 14px;
    }
}
</style>