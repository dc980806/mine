<!--头部导航-->
<template>
    <div class="top">
      <span>{{toptext}}</span>
      <slot name="imgb"></slot>
      <slot name="imga"></slot>
      <slot name="home"></slot>
    </div>
</template>

<style>
  .top{
      width: 100%;
      height: 60px;
      position: fixed;
      top:0;
      text-align: center;
      line-height: 60px;
      border-bottom: 1px red solid;
      z-index: 5;
    background-color: white;
  }
  .top img{
      position: absolute;
      width: 30px;
      top: 15px;
  }
  .top img:nth-child(2){
      right: 5%;
  }
  .top img:nth-child(3){
      right: 20%;
  }
</style>

<script>
  export default{
    props:['toptext']
  }
</script>
