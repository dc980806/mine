<!--首页热点-->
<template>
    <div class="hot">
      <div class="yellow"></div>
       <span>热点</span>
    </div>
</template>

<style>
    .hot{
      width: 100%;
      height: 30px;
      background-color: #f0deff;
      position: relative;
      z-index: -2;
    }
  .hot span{
    line-height: 30px;
    font-weight: 600;
    color: #7d7d7d;
    position: relative;
    left: 5%;
    z-index: -1;
  }
  .yellow{
    width: 5px;
    height: 30px;
    background-color:  yellowgreen;
    position: absolute;
    z-index: -1;
  }
</style>
