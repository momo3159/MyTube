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
            points: [100, 1000, 5000] // ポイント（価格）の種類
        };
    },
    components: {
        PointChoice
    }
}
</script>