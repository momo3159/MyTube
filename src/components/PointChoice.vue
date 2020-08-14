<template>
  <div class="item">
    <div class="price">{{ point }}ポイント</div>
    <!-- TODO: v-onで購入処理を追加 -->
    <br />
    <input
      type="button"
      value="購入"
      v-on:click="buyPoint(point)"
      class="buyPointBtn"
    />
  </div>
</template>

<script>
export default {
  name: "PointChoice",
  props: {
    point: Number
  },
  methods: {
    // TODO: ボタンクリック時のイベントを追加
    buyPoint: function(point) {
      window.alert(`${point}Ptを購入しました`);
      this.$store.state.point += point;
    }
  }
};
</script>

<style scped>
.price {
  font-size: 30px;
}
.item {
  margin: 50px;
  display: inline-block;
}
</style>
