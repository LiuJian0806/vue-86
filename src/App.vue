<template>
  <div class="home-container">
    <!-- 顶部 -->
    <div class="header" v-show="false">
      <div class="left">
        <div class="profile-photo"></div>
        <div class="address-weather">
          <div class="address">
            广州
            <span class="icon iconfont">&#xe63c;</span>
          </div>
          <div class="weather">晴 30&#176;</div>
        </div>
      </div>
      <div class="middle">
        <mt-search v-model="value"></mt-search>
      </div>
      <div class="right">
        <span class="icon iconfont add">&#xe613;</span>
      </div>
    </div>
    <!-- 选择地址的头部 -->
    <div class="address-header" v-show="true">
        <div class="search">
         <span class="icon iconfont back">&#xe677;</span>
         <div class="search-input"><mt-search v-model="value"></mt-search></div>
        </div>
        <div class="navigation-button">
          <!-- <div class="inland">国内</div>
          <div class="outland">国际/港澳台</div> -->
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">国内</mt-tab-item>
            <mt-tab-item id="2">国际/港澳台</mt-tab-item>
          </mt-navbar>
        </div>
    </div>

    <router-view class="content"></router-view>
    <!-- 底部导航栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <span slot="icon" class="icon iconfont navigation">&#xe667;</span>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <span slot="icon" class="icon iconfont navigation">&#xe61f;</span>
        搜索
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <span slot="icon" class="icon iconfont navigation">&#xe69d;</span>
        订单
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <span slot="icon" class="icon iconfont navigation">&#xe605;</span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      selected: ''
    }
  },
  methods: {}
}
</script>
<style lang="scss" >
.home-container {
  .header {
    position:fixed;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #d9d9d9;
    .left {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .profile-photo {
        min-width: 30px;
        min-height: 30px;
        max-width: 30px;
        max-height: 30px;
        margin: 10px 10px;
        border-radius: 50%;
        background-image: url("./assets/background.jpg");
        background-size: 100% 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .address-weather {
        width: 70%;
        height: 80%;
        margin-top: 5px;
        .address {
          font-size: 14px;
          line-height: 22px;
          font-weight: bold;
        }
        .weather {
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
    .middle {
      width: 55%;
      height: 100%;
      .mint-search {
        height: 50px;
        padding: 3px 5px;
      }
    }
    .right {
      width: 10%;
      height: 100%;
      .add {
        font-size: 18px;
        line-height: 50px;
        padding-left: 10px;
      }
    }
  }
  .mint-tabbar{
    position: fixed;
    bottom: 0;
  }
  .is-selected{
    color: skyblue !important;
  }
  .navigation{
    font-size: 20px !important;
  }
  // router-view
  .content{
    padding-top:50px;
    padding-bottom: 55px; 
  }

  //selected-address
  .address-header{
    position: fixed;
    height: 80px;
    width: 100%;
    background-color: #d9d9d9;
    .search{
      height: 45px;
      display: flex;
      justify-content: space-between;
      .back{
        font-size: 20px;
        margin-left: 10px;
        line-height: 45px;
      }
      .search-input{
        width: 90%;
        height: 100%;
      }
    }
    .navigation-button{
      height: 35px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      
      text-align: center;

      .mint-navbar{
        width: 100%;
        .mint-tab-item{
          padding:0;
          .mint-tab-item-label{
            line-height: 35px !important;
            font-size: 18px !important;
            padding: 0;
          }
        }
        
      }
      .inland{
        width: 50%;
      }
      .outland{
        width: 50%;
      }
      .inland:hover{
        color: rgb(34, 146, 238);
        border-bottom: 3px solid rgb(34, 146, 238);
      }
      .outland:hover{
        color: rgb(34, 146, 238);
        border-bottom: 3px solid rgb(34, 146, 238);
      }
    }
  }
}
</style>
