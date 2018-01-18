<template>
  <div>
    <Group toptext="小组">
      <img src="../assets/img/ic_actionbar_search_icon.png" slot="imga">
      <img src="../assets/img/ic_create_group_chat_blue.png" slot="imgb">
    </Group>
    <!--小组头部信息-->
    <div class="bgPhoto">
        <p>216521个小组等你来玩</p>
        <p>立即选择加入吧！</p>
        <p>根据你的兴趣推荐</p>
    </div>
    <!--绿色的板子-->
    <div class="lusede">
        <img src="../assets/img/images/ic_rec_group_banner_6.png" class="lusede">
      <span class="jingxuan">精选推荐</span>
    </div>
    <!--间隔-->
    <div class="big">
      <div class="GG"></div>
      <span>影视</span>
    </div>
    <!--小组-->
    <AnyGroup>
      <div class="anygroup" slot="anygroup">
        <img src="../assets/img/images/ic_share_friends.png" class="anyGroupImg">
        <div class="groupMessage">
          <h4 class="groupTitle">佳片推荐（就是好电影）</h4>
          <p>dsadsad我受hi好可怜空间里看见了卡的撒旦撒旦撒旦撒大苏打撒打算打算打</p>
        </div>
        <span class="groupSpan">121213人</span>
        <img src="../assets/img/images/ic_group_check_anonymous.png" class="checkImg">
        <div class="clear"></div>
      </div>
      <div class="anygroup" slot="anygroup">
        <img src="../assets/img/images/ic_share_qq.png" class="anyGroupImg">
        <div class="groupMessage">
          <h4 class="groupTitle">佳x片推荐（就xx电影）</h4>
          <p>dsadsad我受hi好可怜空间里看见dsasdsa了卡的撒旦撒旦撒旦撒大苏打撒打算打算打</p>
        </div>
        <span class="groupSpan">121213人</span>
        <img src="../assets/img/images/ic_group_check_anonymous.png" class="checkImg">
        <div class="clear"></div>
      </div>
      <div class="anygroup" slot="anygroup">
        <img src="../assets/img/images/ic_share_weibo.png" class="anyGroupImg">
        <div class="groupMessage">
          <h4 class="groupTitle">锤子把（这是个锤子嘛）</h4>
          <p>dsadsad我受hi好可怜空间里看见了卡的撒旦撒旦撒旦撒大苏</p>
        </div>
        <span class="groupSpan">121213人</span>
        <img src="../assets/img/images/ic_group_check_anonymous.png" class="checkImg">
        <div class="clear"></div>
      </div>
      <div class="anygroup" slot="anygroup">
        <img src="../assets/img/images/ic_share_wechat.png" class="anyGroupImg">
        <div class="groupMessage">
          <h4 class="groupTitle">滚蛋（内心独白）</h4>
          <p>dsadsad我受hi好可怜空间里看见了卡的撒旦撒旦撒旦撒大苏</p>
        </div>
        <span class="groupSpan">121213人</span>
        <img src="../assets/img/images/ic_group_check_anonymous.png" class="checkImg">
        <div class="clear"></div>
      </div>
    </AnyGroup>
  </div>
</template>

<script>
  import Group from '../components/toptitle.vue';
  import AnyGroup from '../components/anyGroup.vue';
  export default{
    components:{
      Group,
      AnyGroup
    }
  }
</script>


<style>
    .bgPhoto{
      width: 100%;
      height: 150px;
      background: url("../assets/img/images/ic_group_banner.png");
      background-size: cover;
      box-sizing: border-box;
      padding-top: 50px;
      position: relative;
    }
    .bgPhoto p:nth-child(1){
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    .bgPhoto p:nth-child(2){
      font-weight: 600;
      text-align: center;
      color: #7d7d7d;
    }
    .bgPhoto p:nth-child(3){
      font-size: 15px;
      font-weight: 600;
      color: #7d7d7d;
      position: absolute;
      bottom: 5px;
      left:5px;
    }
  .lusede{
    width: 95%;
    margin:0 auto;
    position: relative;
  }
    .lusede img{
      width: 100%;
    }
  .jingxuan{
    position: absolute;
    bottom:20px;
    left: 2%;
    color: white;
  }
  .big{
    position: relative;
    margin: 20px auto;
  }
    .GG{
      height: 1px ;
      width: 95%;
      background-color: #cdcdcd;
    }
  .big span{
    background-color: white;
    position: absolute;
    top: -10px;
    left: 45%;
  }
</style>
