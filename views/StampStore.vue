<template>
    <div class="stampStore">
        <h1>スタンプストア</h1>
        <!-- 検索 title, authorで判定すれば良い-->
        <!-- TODO: ポイントが足りない時の処理 -->
        <!-- ポイントはサーバーから取得（？） -->
        <div class="stamp" v-for="stamp in stamps" v-bind:key="stamp.title">
            <img v-bind:src="stamp.image">
            <div class="author">{{stamp.author}}</div>
            <div class="title">{{stamp.title}}</div>
            <div class="price">{{stamp.point}}</div>
            <input type="button" value="購入する" v-on:click="buy(stamp)">
        </div>    
    </div>
    
</template>

<script>
export default {
    name: "StampStore",
    data: ()=> {
        return {
            // 本来はサーバーサイドから取ってくるべきデータ（？）
            stamps: [
                {author: "hoge", title: "ハムスターセット", point: 100, image: require("../assets/hamster_sleep.png")},
                {author: "piyo", title: "やらかした人シリーズ", point: 50, image: require("../assets/coffee_kobosu.png")},
                {author: "hogehoge", title: "棒人間シリーズ", point: 200, image: require("../assets/figure_sleeping.png")},
                {author: "foo", title: "小学生", point: 50, image: require("../assets/mizu_boy.png")},
                {author: "bar", title: "オリンピック", point: 100, image: require("../assets/parade.png")},
                {author: "bar", title: "動物シリーズ", point: 100, image: require("../assets/penguin.png")},
                {author: "bar", title: "花見シリーズ", point: 100, image: require("../assets/ukareru_man.png")},
                {author: "bar", title: "Vue.js", point: 100, image: require("../assets/logo.png")}
            ]
        }
    },
    methods: {
        buy: stamp =>{
            // デバッグ用
            console.log(`${stamp.author}の${stamp.title}を購入しました`);
            console.log(`${stamp.point}ポイントを使いました`);
        }
    }
}
</script>

<style scoped>
    /* TODO: スタンプの表示の仕方を整える*/
</style>