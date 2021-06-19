<template>
  <div class="home">
    <button class="btn" @click="go('travel')">旅游景点官网</button>
    <button class="btn" @click="go('food')">食品官网</button>
    <button class="btn" @click="go('safe')">保险官网</button>
    <button class="btn" @click="go('game')">奇迹暖暖官网</button>
    <button class="btn" @click="go('lol')">英雄联盟</button>
    <button class="btn" @click="go('testJS')">测试js</button>
  </div>
</template>
<style scoped lang="less">
.home {
  .btn {
    border: 1px solid #13a3ff;
    background-color: #fff;
    color: #13a3ff;
    padding: 6px 10px;
    margin: 20px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #13a3ff;
    color: #fff;
  }
}
</style>

<script>
export default {
  name: "Home",
  methods: {
    go(name) {
      this.$router.push(name);
    },
  },
};
</script>
