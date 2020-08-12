<template>
    <div class="pointStore">
        <!-- 商品（＝ポイント）一覧の表示 -->
        <div v-for="point in points" v-bind:key="point">
            <PointChoice :point="point"></PointChoice>
        </div>
    </div>
</template>

<script>
import PointChoice from "../components/PointChoice";

export default {
    name: "PointStore",
    data: () => {
        return {
            points: [
                {price: 100, imgPath: require("../assets/coin_little.png")},
                {price: 1000, imgPath: require("../assets/coin_silver.png")},
                {price: 5000, imgPath: require("../assets/coin_gold.png")}
            ]
        };
    },
    components: {
        PointChoice
    }
}
</script>