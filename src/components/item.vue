<!--底部导航栏选项子模版-->
<template>
    <div class="item" @click="zifun()">
        <span v-show="bool"><slot name="imga"></slot></span>
        <span v-show="!bool"><slot name="imgb"></slot></span>
        <br>
        <span :class="!bool?'red':'hui'">{{zitext}}</span>
    </div>
</template>

<script>
    export default{
        props:['zitext','mark','sel'],
      computed:{
          'bool':function () {
              if(this.mark==this.sel){
                  return false
              }
              return true
          }
      },
        methods:{
            zifun:function () {
                this.$emit('paochu',this.mark);
                this.$router.push("/"+this.mark)
            }
        }
    }
</script>

<style>
    .item{
      width: 20%;
      float: left;
      text-align: center;
    }
    .item img{
      width: 35px;
    }
    .hui{
      color: #767377;
    }
    .red{
      color: #ff392f;
    }
</style>
