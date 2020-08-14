<template>
  <div class="pointStore">
    <h1>ポイントストア</h1>
    <div class="list">
      <div v-for="point in points" v-bind:key="point.price" class="item">
        <img v-bind:src="point.imgPath" />
        <PointChoice :point="point.price"></PointChoice>
      </div>
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
        { price: 100, imgPath: require("../assets/coin_little.png") },
        { price: 1000, imgPath: require("../assets/coin_silver.png") },
        { price: 5000, imgPath: require("../assets/coin_gold.png") }
      ]
    };
  },
  components: {
    PointChoice
  },
  methods: {
      isLogin(){
        return this.$store.getters.isLogin;
      },
      getId(){
        return this.$store.getters.getId;
      }
  }
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
}
</style>
