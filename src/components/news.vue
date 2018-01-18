<!--首页热点展示-->
<template>
  <div class="news">
    <slot name="news"></slot>
  </div>
</template>

<style>
    .news{
      width: 95%;
      margin: 10px 2.5%;
      background-color: #f1f7f1;
      box-sizing: border-box;
      padding: 5px;
    }
    .newsLeft{
      float: left;
      width: 75%;
    }
  .news img{
    width: 25%;
    float: right;
  }
  .clear{
    clear: both;
  }
</style>
