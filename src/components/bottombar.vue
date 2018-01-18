<!--底部导航栏-->
<template>
    <div class="bottombar">
        <Item zitext="主页" mark="home" @paochu="fufun" :sel="futext">
          <img src="../assets/img/1.png" slot="imga">
          <img src="../assets/img/6.png" slot="imgb">
        </Item>
      <Item zitext="书影音" mark="cont" @paochu="fufun" :sel="futext">
        <img src="../assets/img/2.png" slot="imga">
        <img src="../assets/img/7.png" slot="imgb">
      </Item>
      <Item zitext="广播" mark="audio" @paochu="fufun" :sel="futext">
        <img src="../assets/img/3.png" slot="imga">
        <img src="../assets/img/8.png" slot="imgb">
      </Item>
      <Item zitext="小组" mark="group" @paochu="fufun" :sel="futext">
        <img src="../assets/img/4.png" slot="imga">
        <img src="../assets/img/9.png" slot="imgb">
      </Item>
      <Item zitext="我的" mark="mine" @paochu="fufun" :sel="futext">
        <img src="../assets/img/5.png" slot="imga">
        <img src="../assets/img/10.png" slot="imgb">
      </Item>
    </div>
</template>

<script>
    import Item from './item.vue';
    export default{
        components:{
          Item
        },
      data:function () {
        return{
            futext:'home',
        }
      },
      methods:{
          fufun:function (val) {
              this.futext=val
          }
      },
      mounted:function () {
          this.$router.push('/home')
      }
    }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .bottombar{
    width: 100%;
    height: 60px;
    border-top: 1px red solid;
    position:fixed;
    bottom: 0;
    background-color: white;
    padding-top: 2px;
    z-index: 5;
  }
</style>
