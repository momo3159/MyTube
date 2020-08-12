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
          <router-link to="/login">ログイン</router-link>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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

</style>