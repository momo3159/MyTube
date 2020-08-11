<template>
  <div id="app">
    <img src="./assets/icon.png">
    <div id="nav">
      <router-link to="/">ホーム</router-link> |
      <router-link to="/stampStore">スタンプ</router-link>
      <router-link to="/pointStore">ポイント</router-link>
      <router-link to="/login">ログイン</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* ヘッダーの表示を整える */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
