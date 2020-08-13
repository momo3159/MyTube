<template>
    <div>
        {{point}}ポイント
        <!-- TODO: v-onで購入処理を追加 -->
        <input type="button" value="購入">
    </div>
</template>

<script>
export default {
  name: 'PointChoice',
  props: {
    point: Number
  },
  methods: {
    // TODO: ボタンクリック時のイベントを追加
  }
}
</script>
