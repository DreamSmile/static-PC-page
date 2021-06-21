<template>
  <div class="testJs">
    <p>每隔0.3秒输出[1, 2, 3, 4, 5, 6]</p>
    <button class="btn" @click="common">普通</button>
    <button class="btn" @click="closure">闭包</button>
    <button class="btn" @click="iteration">迭代</button>
    <button class="btn" @click="testThen">promise</button>
    <button class="btn" @click="testAwait">async/await</button>
    <div><span>{{info}}</span></div>
    <!-- 数组去重 -->
    <div class="test1">
      <p>数组去重:[1,2,3,3,true,"true",true,null,undefined,"","","test","嗯","test"]</p>
      <button class="btn" @click="arrFor">splice</button>
      <button class="btn" @click="arrSet">set</button>
      <button class="btn" @click="arrIndexOf">indexOf</button>
      <button class="btn" @click="arrFilter">filter</button>
      <button class="btn" @click="arrDian">扩展运算符</button>
      <p>去重后：{{newArr}}</p>
    </div>
    <!-- 元素移动，鼠标事件 -->
    <p>鼠标移动事件</p>
    <div class="mouse">
      <p>mouse</p>
      <img-el></img-el>
      <p>drag</p>
      <drag-img></drag-img>
      <!-- <img :src="$imgsrc+'default.png'" class="move" @mouseover="startMouse" /> -->
    </div>
  </div>
</template>

<script>
import ImgEl from "../../components/ImgEl.vue";
import DragImg from "../../components/DragImg.vue";
export default {
  components: {
    ImgEl,
    DragImg,
  },
  data() {
    return {
      numberList: [1, 2, 3, 4, 5, 6],
      proNum: 0,
      info: "",
      // 数组去重
      arr: [
        1,
        1,
        2,
        3,
        3,
        true,
        "true",
        true,
        null,
        undefined,
        "",
        "",
        "test",
        "嗯",
        "test",
      ],
      newArr: [],
    };
  },
  methods: {
    // 鼠标放置
    startMouse(el) {
      console.log("鼠标点击");
      el.clone().appendTo(".mouse");
    },
    // for循环去重，这个方法没办法去除null重复
    arrFor() {
      let arr = this.arr;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          //注意这边j的初始定义值
          if (arr[i] === arr[j]) {
            arr.splice(j, 1);
          }
        }
      }
      this.newArr = arr;
    },
    // set去除重复值,ES6的语法
    arrSet() {
      this.newArr = Array.from(new Set(this.arr));
    },
    // indexOf去重
    arrIndexOf() {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.newArr.indexOf(this.arr[i]) === -1) {
          this.newArr.push(this.arr[i]);
        }
      }
    },
    // filter去重
    arrFilter() {
      this.newArr = this.arr.filter((item, index, arr) => {
        // 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        return arr.indexOf(item, 0) === index;
      });
    },
    // es6的扩展运算符（...）用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
    // Set()是ES6提供的新的数据结构，类似于数组 但不会有重复的值
    // Set是一个构造函数 所以生成的是set数据结构
    arrDian() {
      this.newArr = [...new Set(this.arr)];
    },
    // 正常想法的定时输出
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
  .mouse {
    width: 100%;
    // height: 600px;
  }
}
</style>