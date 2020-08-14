<template>
  <div class="homePage">
    <div class="search-div">
      <form action="" id="search-box">
        <input type="url" class="search" placeholder="URL検索">
        <button class="submit-button" v-on:click="youtube">検索</button>
      </form>
    </div>

    <div class="youtube-box">
      <div class="video-box">
        <div class="video">
          <iframe class='movframe' height="500" width="810" v-bind:src="youtubeURL"></iframe>
        </div>
        <h1> {{ title }} </h1>
      </div>

      <div id="coment" class="coment-box">
        <div class="coment">
          <Coment />
        </div>
        <div>
          <input type="text" class="coment-text">
          <input type="submit" value="送信">
        </div>
        <div class="stamp-box">
          <button class="stamp">スタンプ購入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Coment from '../components/coment.vue'

export default {
  data () {
    return{
      title: 'タイトル',
      youtubeURL: '',
    }
  },
  components: {
    Coment
  },
  mounted () {
    axios
      .get('https://apis.google.com/js/api.js')
      .then(response => response.json())
      .then(data => {
        //タイトルの表示処理
        console.log(data.items[0].snippet.title);//タイトルの文字列
        title = data.items[0].snippet.title;
      });
  },
  methods: {
    youtube: function() {
      const yourl = 'https://www.youtube.com/';
      var url = document.getElementsByClassName('search')[0].value;
      var tmp =  url.match(/.+watch\?v=(.+)/);
      var videoId = tmp[1];
      const embed = yourl + 'embed/' + videoId ;//埋め込み動画専用のURLに変更する
      //iframeタグを利用して動画を表示
      var iframe = document.getElementsByClassName('movframe')[0] ;
      this.youtubeURL = embed;
      //youtubeのAPIキーをセット
      const APIKEY = 'AIzaSyAIUIczvHLypjcH6iFtm2TF-f8wQ5SAVmU';
      //動画のタイトルを取得
      const title_url = 'https://www.googleapis.com/youtube/v3/videos' ;
      fetch(title_url + '?id=' + videoId + '&key=' + APIKEY + '&part=snippet,contentDetails,statistics,status')
    }
  }
}
</script>

<style scoped>
  body{
    background-color: #000;
  }
  .search-div{
    padding-top: 100px;
    text-align: center;
  }
  .search{
    width: 40em;
    height: 30px;
  }
  .submit-button{
    width: 50px;
    height: 36px;
  }
  .search-icon{
    color: rgb(116, 116, 116);
    font-size: 10px;
  }
  .youtube-box{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 50px;
  }
  .video-box{
    width: 60%;
  }
  .coment-box{
    width: 20%;
    margin-left: 20px;
  }
  .coment{
    border: #fff solid 2px;
    width: 100%;
    height: 56.25vh;
  }
  .coment-text{
    margin-top: 10px;
    width: 80%;
    height: 20px;
  }
  .stamp{
    background-color: rgb(142, 248, 2);
    color: rgb(17, 0, 252);
    cursor: pointer;
    outline: none;
    padding: 10px 30px;
    margin-top: 10px;
  }
</style>
