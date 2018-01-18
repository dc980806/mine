<template>
  <div>
    <Home>
        <div slot="home" class="hometitle">
           <input type="text" placeholder="影视，唱片，图书，小组等">
           <img src="../assets/img/ic_chat_white.png">
           <img src="../assets/img/ic_actionbar_search_icon.png" class="search">
           <img src="../assets/img/ic_scan_gray.png" class="scan">
        </div>
    </Home>
    <Lun></Lun>
    <Hot></Hot>
    <News v-for="v in arr">
      <div slot="news">
        <div class="newsLeft">
          <h3>{{v.title}}</h3>
          <span>{{v.target.desc}}</span><br>
          <span>作者：{{v.target.author.name}}</span>
        </div>
        <img :src="v.target.author.avatar">
        <div class="clear"></div>
      </div>
    </News>
  </div>
</template>

<script>
  import Home from '../components/toptitle.vue';
  import Lun from '../components/lun.vue';
  import News from '../components/news.vue';
  import Hot from '../components/hot.vue';
  export default{
    components:{
      Home,
      Lun,
      News,
      Hot
    },
    data:function () {
      return{
        arr:[],
      }
    },
    mounted:function () {
      this.axios.get("/api/someApi").then((res)=>{
        console.log(res);
        this.arr=res.data.recommend_feeds;
      })
    }
  }
</script>

<style>
  .hometitle{
      width: 100%;
      height: 100%;
      background: #68cb78;
  }
  .hometitle input{
      width: 80%;
      height: 35px;
      position: absolute;
      left: 3%;
      top:10px;
      border-radius: 10px;
      text-indent: 2.5em;
  }
  .search{
      position: absolute;
      left: 4%;
      top:10px;
  }
  .scan{
      position: absolute;
      right: 18%;
      top:10px;
  }
</style>
