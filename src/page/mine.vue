<template>
  <div>
    <!--头部-->
    <Mine toptext="我的">
      <img src="../assets/img/ic_settings.png" slot="imgb">
    </Mine>
    <!--登录信息-->
    <MineCont>
      <img src="../assets/img/images/ic_user_info_gender.png" class="mineImg" slot="mineImg">
      <p class="mineP" slot="mineP">畅斯基 <span><img src="../assets/img/images/ic_mine_female.png"></span></p>
      <p class="minePTwo" slot="minePTwo">ID:17792188633</p>
      <p class="minePThree" slot="minePThree">关注：1      被关注：0</p>
    </MineCont>
    <!--提醒-->
    <List>
      <img src="../assets/img/images/ic_mine_notification.png" slot="icon" class="icon">
      <span slot="listText" class="span">提醒</span>
      <img src="../assets/img/images/ic_arrow_green_right.png" slot="rightIcon" class="iconright">
      <div slot="jianGe" class="jianGe"></div>
      <p slot="zanwu" class="zanwu">暂无新提醒</p>
    </List>
    <ListNav></ListNav>
  </div>
</template>

<script>
  import Mine from '../components/toptitle.vue';
  import List from '../components/list.vue';
  import MineCont from '../components/mineCont.vue';
  import ListNav from '../components/listNav';
  export default{
    components:{
      Mine,
      List,
      MineCont,
      ListNav
    }
  }
</script>

<style>
  .icon{
    width: 30px;
    position: absolute;
    top: 7px;
    left: 5%;
  }
  .span{
    position: absolute;
    top: 10px;
    left: 15%;
    color: #3c3c3c;
    font-weight: 600;
  }
  .iconright{
    position: absolute;
    width: 10px;
    top: 7px;
    right: 5%;
  }
  .jianGe{
    width: 95%;
    height: 1px;
    background: #bfbfbf;
    position: absolute;
    top: 40px;
    right: 2.5%;
  }
  .zanwu{
    position: absolute;
    bottom: 10px;
    left: 39%;
    color: #3c3c3c;
    font-weight: 600;
  }
</style>
