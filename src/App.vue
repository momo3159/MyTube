<template>
  <div id="app">
    <header>
      <div id="nav">
        <div class="header-left">
          <img id="header-icon" src="./assets/icon.png">
        </div>
        <div class="header-right">
          <router-link to="/">ホーム</router-link> |
          <router-link to="/StampStore">スタンプ</router-link> |
          <router-link to="/PointStore">ポイント</router-link> |
          <router-link to="/Login">ログイン</router-link>
        </div>
      </div>
    </header>

  <div class="main">
    <div class="search-box">
      <form action="">
        <input type="url" class="search" placeholder="URL検索">
        <button type="submit" class="submit-button">
          <font-awesome-icon icon="search" class="search-icon"/>
        </button>
      </form>
    </div>

    <div class="youtube-box">
      <div class="video-box">
        <div class="video">

        </div>
        <h1>タイトル</h1>
      </div>

      <div id="coment" class="coment-box">
        <div class="coment">

        </div>
        <div class="stamp-box">
          <button class="stamp">スタンプ購入</button>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import Coment from './components/coment.vue'

export default {
  components: {
    Coment
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  height: 65px;
  width: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;
}
#header-icon {
  width: 150px;
  margin-top: 15px;
}

#nav {
  width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}
.header-left {
  float: left;
}
.header-right {
  float: right;
}

.header-right a{
  line-height: 65px;
  padding: 0 25px;
  color: white;
}

#nav a.router-link-exact-active {
  color: orange;
}

  body{
    background-color: #000;
  }

  .search-box{
    padding-top: 50px;
    text-align: center;
  }

  .search{
    width: 40em;
    height: 30px;
  }

  .submit-button{
    width: 50px;
    height: 36px;
    cursor: pointer;
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

  .video{
    border: #fff solid 2px;
    width: 100%;
    height: 56.25vh;
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

  .stamp{
    background-color: rgb(142, 248, 2);
    color: rgb(17, 0, 252);
    cursor: pointer;
    outline: none;
    padding: 10px 30px;
    margin-top: 10px;
  }
</style>
