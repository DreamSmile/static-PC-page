<template>
  <div class="testJs">
    <p>每隔0.3秒输出[1, 2, 3, 4, 5, 6]</p>
    <button class="btn" @click="common">普通</button>
    <button class="btn" @click="closure">闭包</button>
    <button class="btn" @click="iteration">迭代</button>
    <button class="btn" @click="testThen">promise</button>
    <button class="btn" @click="testAwait">async/await</button>
    <div><span>{{info}}</span></div>
  </div>
</template>
<style scoped lang="less">
.testJs {
  font-size: 16px;
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
  data() {
    return {
      numberList: [1, 2, 3, 4, 5, 6],
      proNum: 0,
      info: "",
    };
  },
  mounted() {
    // this.closure();
    // this.common();
    // this.iteration();
    // this.testThen();
    // this.testAwait();
  },
  methods: {
    common() {
      for (let i = 0; i < this.numberList.length; i++) {
        setTimeout(() => {
          console.log("普通输出" + this.numberList[i]);
          this.info += this.numberList[i];
        }, 300);
      }
    },
    //   闭包输出
    closure() {
      this.info = "";
      // 闭包,for循环遍历数组内容，用闭包的方式挨个输出
      let data = this.numberList;
      for (let index = 0; index < data.length; index++) {
        ((x) => {
          setTimeout(() => {
            this.info += data[x];
            if (index == 5) {
              console.log("闭包结束");
              this.info = "";
            }
          }, x * 300);
        })(index);
      }
    },
    // 迭代，迭代只是循环的一种方式，循环具体有三种for,while,do-while,而迭代指的是循环输出一个列表或者数组的所有元素
    // 下面方法只能对数组，要对对象的话Array.prototype.forEach.call
    // 迭代
    iteration() {
      this.info = "";
      let arr = this.numberList;
      arr.forEach((element, i) => {
        setTimeout(() => {
          this.info += arr[i];
          console.log(i);
          if (i == 5) {
            console.log("迭代结束");
            setTimeout(() => {
              this.info = "";
            }, 300);
          }
        }, i * 300);
      });
    },
    // promise,使用promise的then来实现每隔一秒输出数组内容
    testPromise(i) {
      let arr = this.numberList;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.info += arr[i];
          resolve();
        }, 300);
      });
    },
    testThen() {
      let _this = this;
      if (_this.proNum <= this.numberList.length) {
        this.testPromise(_this.proNum).then((data) => {
          _this.proNum++;
          _this.testThen(_this.proNum);
        });
      } else {
        console.log("执行完promise");
        _this.testThen = 0;
        _this.info = "";
      }
    },

    // async/await
    testAsync(i) {
      //定义要做的内容
      let arr = this.numberList;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.info += arr[i];
          resolve();
        }, 300);
      });
    },

    async testAwait() {
      //调用内容时使用async，提醒函数里有异步
      let arr = this.numberList;
      if (this.proNum <= arr.length) {
        await this.testAsync(this.proNum); //将异步内容用同步方式展示出来
        this.proNum++;
        this.testAwait(this.proNum); //再次调用，内部循环
      } else {
        console.log("执行完成");
        this.proNum = 0;
        this.info = "";
      }
    },
  },
};
</script>