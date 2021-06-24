<template>
  <div class="child">
    <h2>子组件</h2>
    子组件接收到的数组：{{testArr}}
    <br />
    子组件接收到的字符串：{{testStr}}
    <br />
    <button @click="send">发送信息给父</button>
    <button @click="testParentFun">执行父组件的方法</button>
  </div>
</template>
<script>
export default {
  props: {
    testArr: {
      type: Array,
      default: [],
    },
    testStr: {
      type: String,
      default: "",
    },
  },
  methods: {
    send() {
      this.$emit("childData", "子组件传的数据");
    },
    childFun() {
      alert("这是子组件的方法");
    },
    testParentFun() {
      this.$parent.parentFun("传值");
      //   this.$emit.childFun("这是传的值呀");
    },
  },
};
</script>
<style scoped lang="less">
.child {
  border: 1px solid #000;
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #13a3ff;
  }
  button {
    border: 1px solid #13a3ff;
    background-color: #fff;
    color: #13a3ff;
    padding: 6px 10px;
    margin: 20px;
    cursor: pointer;
  }
}
</style>