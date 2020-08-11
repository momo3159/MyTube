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
                {author: "hoge", title: "hoge", point: 100, image: "../assets/"},
                {author: "piyo", title: "piyo", point: 50, image: "../assets/"},
                {author: "hogehoge", title: "hogehoge", point: 200, image: "../assets/"},
                {author: "foo", title: "foo", point: 50, image: "../assets/"},
                {author: "bar", title: "bar", point: 100, image: "../assets/"},
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