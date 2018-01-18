<!--登录信息-->
<template>
  <div class="mineCont">
    <slot name="mineImg"></slot>
    <slot name="mineP"></slot>
    <slot name="minePTwo"></slot>
    <div class="jian"></div>
    <slot name="minePThree"></slot>
  </div>
</template>


<style>
  .mineCont{
    width: 100%;
    height: 150px;
    background: url("../assets/img/images/live_player_bg.jpg");
    background-size: cover;
    position: relative;
  }
  .mineImg{
    width: 100px;
    position: absolute;
    top: 10%;
    left:5%;
  }
  .mineP{
    position: absolute;
    top: 15%;
    left: 37%;
    font-size: 25px;
    font-weight: 600;
    color:white;
  }
  .mineP img{
    width: 20px;
  }
  .minePTwo{
    position: absolute;
    top: 40%;
    left: 37%;
    font-weight: 600;
    color:white;
  }
  .jian{
    width: 60%;
    height: 1px;
    background: #bfbfbf;
    position: absolute;
    top: 58%;
    right: 4%;
  }
  .minePThree{
    position: absolute;
    top: 65%;
    left: 37%;
    font-weight: 600;
    color:white;
  }
</style>
