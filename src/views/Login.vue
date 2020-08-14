<template>
  <div class="login">
    <div class="login-box">
        <h1 class="login-title">ログイン</h1>
        <form action="">
            <input
                type="text"
                placeholder="IDを入力してください"
                class="input"
                v-model="inputID"
            />
            <br />
            <input
                type="password"
                placeholder="パスワードを入力してください"
                class="input"
                v-model="inputPW"
            />
            <br />
            <input
                type="button"
                value="ログインする"
                class="login-button"
                v-on:click.prevent="doLogin(inputID, inputPW)"
            />
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      inputID: "",
      inputPW: ""
    };
  },
  methods: {
    doLogin: function(inputID, inputPW) { // inputID, inputPW: String
      fetch(
          `https://91ss8vtva7.execute-api.ap-northeast-1.amazonaws.com/mytubeapi/mytube/get?id=${inputID}&pass=${inputPW}`
      )
        .then(response => {
          if (!response.ok) {
            console.error("エラーレスポンス");
          } else {
            return response.json().then(userInfo => {
                console.log(inputID);
                console.log(inputPW);
              console.log(userInfo);
              console.log(userInfo["message"]);
              if (userInfo["message"] === "id or password is incorrect") {
                window.alert("ユーザーIDかパスワードが間違っています");
                console.log(this.$store.state.isLogin);
              } else if(userInfo["id"] != this.inputID){
                  console.log(userInfo["id"])
                  window.alert("ユーザーIDかパスワードが間違っています");
              }
              else {    
                this.login();
                this.$store.state.id = inputID;
                window.alert("ログインしました");
              }
            });
          }
        })
        .catch(() => {
          window.alert("IDかパスワードが間違っています");
          // console.error(error);
        });
    },
    login() {
        this.$store.commit('login');
    },
  }
};
</script>

<style scoped>
.main {
  border-top: 2px solid #fff;
  color: #fff;
  text-align: center;
  height: 100vh;
}
.login-title {
  padding-top: 70px;
}
.input {
  width: 30em;
  padding: 10px;
  margin-top: 50px;
  border: none;
  border-bottom: #fff 2px solid;
  background-color: #000;
  color: #fff;
  outline: none;
}
.input:focus {
  outline: none;
}
.login-button {
  margin-top: 50px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #000;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.login-button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.login-button:focus {
  outline: none;
}
</style>
