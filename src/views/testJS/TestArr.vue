<template>
  <div class="testArr">
    <p>1：冒泡（通过下标修改）：{{bubbleIndex}}</p>
    <p>2：插入（通过下标修改）：{{insertIndex}}</p>
    <p>3：冒泡（官方文档写法）：{{bubbleVue}}</p>
    <p>3：插入（官方文档写法）：{{insertVue}}</p>
    <p>4：简单数组测试：{{commonArr}}</p>
    <p>{{text}}</p>
    <input type="text" placeholder="测试修改data全部data重新渲染" v-model="inp">
    <br />
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      bubbleIndex: [4, 1, -7, 0, 12, -2, 0, 2],
      insertIndex: [4, 1, -7, 0, 12, -2, 0, 2],
      bubbleVue: [4, 1, -7, 0, 12, -2, 0, 2],
      insertVue: [4, 1, -7, 0, 12, -2, 0, 2],
      commonArr: [1, 2, 3, 4],
      inp: "",
      text: "test",
    };
  },
  mounted() {
    this.bubbleIndexFun();
    this.insertIndexFun();
    this.bubbleVueFun();
    this.insertVueFun();
    this.commonArrFun();
  },
  methods: {
    //  冒泡排序：比较相邻两个数，交换位置
    bubbleIndexFun() {
      for (let i = 0; i < this.bubbleIndex.length; i++) {
        for (let j = 1, k = 0; j <= this.bubbleIndex.length - i; j++, k++) {
          if (this.bubbleIndex[k] > this.bubbleIndex[k + 1]) {
            let temp = this.bubbleIndex[k];
            this.bubbleIndex[k] = this.bubbleIndex[k + 1];
            this.bubbleIndex[k + 1] = temp;
          }
        }
      }
      this.bubbleIndex = [1, 2];
      // console.log("通过下标修改的冒泡排序" + this.bubbleIndex);
    },
    // 通过下标修改的插入排序：第一个数当做有序排列，后面的都是无序，从无序第一个开始往前扫描比大小，插入
    insertIndexFun() {
      let preIndex, current;
      for (var i = 1; i < this.insertIndex.length; i++) {
        preIndex = i - 1;
        current = this.insertIndex[i];
        while (preIndex >= 0 && this.insertIndex[preIndex] > current) {
          this.insertIndex[preIndex + 1] = this.insertIndex[preIndex];
          preIndex--;
        }
        this.insertIndex[preIndex + 1] = current;
      }
      // console.log("通过下标修改的插入排序" + this.insertIndex);
    },

    // 通过vue官方文档写法的冒泡
    bubbleVueFun() {
      for (let i = 0; i < this.bubbleVue.length; i++) {
        for (let j = 1, k = 0; j <= this.bubbleVue.length - i; j++, k++) {
          //表示每一轮中比较的次数
          if (this.bubbleVue[k] > this.bubbleVue[k + 1]) {
            let temp = this.bubbleVue[k];
            this.bubbleVue[k] = this.bubbleVue[k + 1];
            // Vue.set(vm.items, indexOfItem, newValue)//vue官方文档写法
            this.$set(this.bubbleVue, k, this.bubbleVue[k + 1]);
            this.$set(this.bubbleVue, k + 1, temp);
          }
        }
      }
    },
    insertVueFun() {
      let preIndex, current;
      for (var i = 1; i < this.insertVue.length; i++) {
        preIndex = i - 1;
        current = this.insertVue[i];
        while (preIndex >= 0 && this.insertVue[preIndex] > current) {
          Vue.set(this.insertVue, preIndex + 1, this.insertVue[preIndex]);
          preIndex--;
        }
        Vue.set(this.insertVue, preIndex + 1, current);
      }
    },
    commonArrFun() {
      //   Vue.set(this.commonArr, 2, "官方文档");
      this.commonArr[2] = "哈哈";
      this.commonArr = [...this.commonArr];
    },
  },
};
</script>
<style scoped lang="less">
.testArr {
  font-size: 20px;
  input[type="text"] {
    border: 1px solid #000;
  }
}
</style>