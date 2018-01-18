<template>
  <div>
    <Audio toptext="广播">
      <img src="../assets/img/ic_status_search_user.png" slot="imga">
      <img src="../assets/img/ic_create_group_chat_blue.png" slot="imgb">
    </Audio>
    <!--发现有趣的人-->
    <Findfired></Findfired>
    <!--个人发言模版-->
    <AudioCont>
      <div class="audioCont" slot="audioCont">
        <img src="../assets/img/images/ic_user_info_location.png" class="touxiang">
        <img src="../assets/img/images/ic_rating_actionbar_close.png" class="bacha">
        <a href="#" class="audioBtn">关注</a>
        <span class="audioName">陈苍苍</span>
        <span class="guanZhu">738890人关注</span>
        <span class="audioNews">倒计时的开始你看了第三，的每年从现在，你你看了睡觉啊打开拉萨火车站学会快乐立刻换上了卡的加萨肯德基萨拉的接撒扣篮对决啊算了撒旦撒旦撒旦撒旦撒旦</span>
      </div>
    </AudioCont>
    <AudioCont>
      <div class="audioCont" slot="audioCont">
        <img src="../assets/img/images/ic_user_info_birthday.png" class="touxiang">
        <img src="../assets/img/images/ic_rating_actionbar_close.png" class="bacha">
        <a href="#" class="audioBtn">关注</a>
        <span class="audioName">锤子</span>
        <span class="guanZhu">538890人关注</span>
        <span class="audioNews">我是说赛事的横扫大红色卡迪纳斯卡的和斯科拉蒂和萨姆纳达斯科蒂诺萨肯德基哈萨克丁俊晖撒的谎萨迪克的撒旦撒旦撒旦撒下做出选择操作执行</span>
      </div>
    </AudioCont>
    <AudioCont>
      <div class="audioCont" slot="audioCont">
        <img src="../assets/img/images/ic_user_info_birthday.png" class="touxiang">
        <img src="../assets/img/images/ic_rating_actionbar_close.png" class="bacha">
        <a href="#" class="audioBtn">关注</a>
        <span class="audioName">锤子二号</span>
        <span class="guanZhu">553340人关注</span>
        <span class="audioNews">我是说赛事的横萨肯德基哈萨克丁俊晖撒的谎萨迪克的撒旦撒旦撒旦撒下做出选择操作执行</span>
      </div>
    </AudioCont>
    <AudioCont>
      <div class="audioCont" slot="audioCont">
        <img src="../assets/img/images/ic_user_info_birthday.png" class="touxiang">
        <img src="../assets/img/images/ic_rating_actionbar_close.png" class="bacha">
        <a href="#" class="audioBtn">关注</a>
        <span class="audioName">李狗蛋</span>
        <span class="guanZhu">557350人关注</span>
        <span class="audioNews">我是说赛事的横萨肯德基哈萨克丁俊晖撒的谎萨迪hi文化的扩散，村民小组农村，毛主席你猜怎么想呢从现在，每次把自行车bask接电话撒旦撒下做出选择操作执行</span>
      </div>
    </AudioCont>
  </div>
</template>

<script>
  import Audio from '../components/toptitle.vue';
  import Findfired from  '../components/findfirend.vue';
  import AudioCont from '../components/audioCont.vue';
  export default{
    components:{
        Audio,
      Findfired,
      AudioCont
    }
  }
</script>
