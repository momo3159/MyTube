<template>
    <div class="stampStore">
        <h1>スタンプストア</h1>
        <!-- 検索 title, authorで判定すれば良い-->
        <input v-model="search" placeholder="キーワード">
        <!-- TODO: ポイントが足りない時の処理 -->
        <!-- ポイントはサーバーから取得（？） -->
        <br>
        <div class="list">
            <div class="stamp-list" v-for="stamp in filtered(search)" v-bind:key="stamp.title">
                <div class="stamp">
                    <img v-bind:src="stamp.image">
                    <div class="author">{{stamp.title}}</div>
                    <div class="title">created by {{stamp.author}}</div>
                    <br>
                    <div class="price">
                        {{stamp.point}} Pt
                        <input type="button" class="buy-btn" value="購入する" v-on:click="buy(stamp)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'StampStore',
  data: () => {
    return {
      // 本来はサーバーサイドから取ってくるべきデータ（？）
      stamps: [
        {author: 'hoge', title: 'ハムスターセット', point: 100, image: require('../assets/hamster_sleep.png')},
        {author: 'piyo', title: 'やらかした人シリーズ', point: 50, image: require('../assets/coffee_kobosu.png')},
        {author: 'hogehoge', title: '棒人間シリーズ', point: 200, image: require('../assets/figure_sleeping.png')},
        {author: 'foo', title: '小学生', point: 50, image: require('../assets/mizu_boy.png')},
        {author: 'bar', title: 'オリンピック', point: 100, image: require('../assets/parade.png')},
        {author: 'bar', title: '動物シリーズ', point: 100, image: require('../assets/penguin.png')},
        {author: 'bar', title: '花見シリーズ', point: 100, image: require('../assets/ukareru_man.png')},
        {author: 'bar', title: 'Vue.js', point: 100, image: require('../assets/logo.png')}
      ]
    }
  },
  computed: {
    filtered: function () {
      return function (search) {
        return this.stamps.filter((stamp) => {
          return search === undefined || stamp.author.includes(search) || stamp.title.includes(search)
        })
      }
    }
  },
  methods: {
    buy: stamp => {
      // デバッグ用
      console.log(`${stamp.author}の${stamp.title}を購入しました`)
      console.log(`${stamp.point}ポイントを使いました`)
    }
  }
}
</script>

<style scoped>
    .list {
        display: flex;
        flex-wrap: wrap;
    }
    .list:after {
        content: "";
        display: block;
        width: 300px;
    }
    .stamp-list {
        flex: 0 1 300px;
        margin-bottom: 30px;
        margin-top: 60px;
    }
    img {
        width: 70%;
        height: 200px;
    }
    h1 {
        margin-top: 100px;
    }
    .buy-btn {
        margin-left: 15px;
    }
</style>
