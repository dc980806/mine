<!--小组展示模块-->
<template>
  <div>
    <slot name="anygroup"></slot>
  </div>
</template>

<style>
    .anygroup{
      width: 95%;
      margin: 10px 2.5%;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 10px;
      position: relative;
    }
    .anyGroupImg{
      width: 60px;
      float: left;
    }
    .groupMessage{
      font-size: 12px;
      margin: 0 5px;
      width: 50%;
      height: 100%;
      float: left;
    }
  .clear{
    clear: both;
  }
  .groupSpan{
    font-size: 12px;
    position: absolute;
    top: 40%;
    color:orange;
  }
  .checkImg{
    width: 20px;
    position: absolute;
    top: 38%;
    right: 5%;

  }
</style>
