<!--广播的个人发言模块-->
<template>
  <div>
    <slot name="audioCont"></slot>
  </div>
</template>

<style>
    .audioCont{
        width: 95%;
        height: 200px;
        margin: 10px auto;
      background: #f1f1f1;
      position: relative;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 10px;
    }
    .touxiang{
      width: 60px;
    }
    .bacha{
      width: 10px;
      position: absolute;
      right: 4%;
    }
  .audioName{
      position: absolute;
    top:15px;
    left: 20%;
    font-weight: 600;
    font-size: 20px;
  }
  .guanZhu{
    position: absolute;
    top:45px;
    left: 20%;
  }
  .audioNews{
    position: absolute;
    top:40%;
  }
  .audioBtn{
    position: absolute;
    right: 10%;
    top:15%;
    text-align: center;
    text-decoration: none;
    color:white;
    background-color: #42c055;
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
  }
</style>
