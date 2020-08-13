<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ coment }}</p>
  </div>
</template>

<script>
export default {
  data (){
    return {
      name: "名無し",
      coment: "Hello World"
    }
  }
}
</script>

<style>
body{
  color: #fff;
}
</style>
