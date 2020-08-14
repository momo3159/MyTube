<template>
  <div id="app">
    <header>
      <div id="nav">
        <div class="header-left">
          <img id="header-icon" src="./assets/icon.png" />
        </div>
        <div class="header-right">
          <router-link to="/">ホーム</router-link> |
          <router-link to="/StampStore">スタンプ</router-link> |
          <router-link to="/PointStore">ポイント</router-link> |
          <router-link to="/Login">ログイン</router-link>
          <div id="userId" v-show="isLogin()">{{showIdInHeader()}}</div>
          <div id="userPt" v-show="isLogin()">{{showPt()}}</div>
        </div>
        
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
  export default{
    methods: {
      isLogin(){
        return this.$store.getters.isLogin;
      },
      getId(){
        return this.$store.getters.getId;
      },
      getPt(){
        return this.$store.getters.getPt;
      },
      showIdInHeader(){
        return `userID: ${this.getId()}でログイン中`;
      },
      showPt(){
        return `所持ポイント: ${this.getPt()}Pt`;
      }
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
  height: 100vh;
  width: 100vw;
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

.header-right a {
  line-height: 65px;
  padding: 0 25px;
  color: white;
}

#nav a.router-link-exact-active {
  color: orange;
}

#userId, #userPt {
  float: right;
  line-height: 65px;
  padding: 0 25px;
  color: white;
  margin-right: 0px;
}

</style>
