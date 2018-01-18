<!--二级路由电影展示模块-->
<template>
    <div>
      <slot name="secondMovie"></slot>
    </div>
</template>

<style>
  .mostbig{
    width: 100%;
    height: 200px;
    background-color: #e8eff4;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
  }
  .secondMovieSpan{
    position: absolute;
    right: 5%;
    top:5%;
    color: #42c055;
  }
  .secondMovieSpan img{
    width: 8px;
    float: right;
  }
  .focusImg{
    margin-top: 10px;
    width: 700px;
    height: 150px;
  }
  .focusAny{
    font-size: 12px;
    box-sizing: border-box;
    padding: 5px;
    width: 100px;
    height: 100%;
    float: left;
    text-align: center;

  }
  .focusAny img{
    width: 100%;
  }
  .starDiv img{
     width: 15px;
    text-align:center ;
  }
  .oveflow{
    overflow-x: auto;
  }
</style>
