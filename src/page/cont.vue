<template>
  <div>
    <Cont toptext="书影音">
      <img src="../assets/img/ic_actionbar_search_icon.png" slot="imga">
      <img src="../assets/img/ic_create_group_chat_blue.png" slot="imgb">
    </Cont>
    <div class="nav">
      <span :class="{active:index==1}" @click="index=1"><router-link to="/cont/movie">电影</router-link></span>
      <span :class="{active:index==2}" @click="index=2"><router-link to="/cont/read">读书</router-link></span>
      <span :class="{active:index==3}" @click="index=3"><router-link to="/cont/tv">电视</router-link></span>
      <span :class="{active:index==4}" @click="index=4"><router-link to="/cont/town">同城</router-link></span>
      <span :class="{active:index==5}" @click="index=5"><router-link to="/cont/music">音乐</router-link></span>
    </div>
    <div class="clear"></div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
  import Cont from '../components/toptitle.vue';
  export default{
    components:{
      Cont
    },
    data:function () {
      return{
        index:1
      }
    }
  }
</script>

<style>
  .nav a{
    width: 20%;
    height: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
    text-decoration:none;
    color: #7d7d7d;
  }
  .active a{
    border-bottom: 1px red solid;
  }
  .clear{
    clear:both
  }
</style>
