<template>
  <div class="testJs">
    <h2>每隔0.3秒输出[1, 2, 3, 4, 5, 6]</h2>
    <button class="btn" @click="common">普通</button>
    <button class="btn" @click="closure">闭包</button>
    <button class="btn" @click="iteration">迭代</button>
    <button class="btn" @click="testThen">promise</button>
    <button class="btn" @click="testAwait">async/await</button>
    <div><span>{{info}}</span></div>
    <!-- 数组去重 -->
    <div class="test1">
      <h2>数组去重:[1,2,3,3,true,"true",true,null,undefined,"","","test","嗯","test"]</h2>
      <button class="btn" @click="arrFor">splice</button>
      <button class="btn" @click="arrSet">set</button>
      <button class="btn" @click="arrIndexOf">indexOf</button>
      <button class="btn" @click="arrFilter">filter</button>
      <button class="btn" @click="arrDian">扩展运算符</button>
      <p>去重后：{{newArr}}</p>
    </div>
    <!-- 元素移动，鼠标事件 -->
    <h2>鼠标移动事件</h2>
    <div class="mouse">
      <p>mouse</p>
      <img-el></img-el>
      <p>drag</p>
      <drag-img></drag-img>
    </div>
    <!-- 数字求和 -->
    <div class="translate">
      <h2>输入两个数字，求和</h2>
      <input type="text" v-model="inp1" />
      <input type="text" v-model="inp2" />
      <!-- 需要ES6的isNaN，NaN也是number所以不能根据变量是不是number类型来判断 -->
      <p>{{Number.isNaN(this.add)? '请稍等..':this.add}}</p>
    </div>
    <!-- 一键复制 -->
    <div class="copy">
      <h2>一键复制</h2>
      <textarea ref="textData" placeholder="输入需要复制的内容"></textarea>
      <button @click="copyData">复制</button>
    </div>
    <!-- vue修饰符 -->
    <div class="testVue">
      <h2>vue修饰符</h2>
      <span>v-model.number控制只能输入数字</span>
      <input type="text" v-model.number="testVueNumber" />
      <br />
      <span>v-model.trim.lazy可叠加使用失去焦点离开才会更新data</span>
      <input type="text" v-model.trim.lazy="testVueLazy" />
      <span style="backgroundColor:#bac9e8">{{testVueLazy}}</span>
      <br />
      <span>v-model.trim忽略输入框前后的空格</span>
      <input type="text" v-model.trim="testVueTrim" />
      <span style="background:#bac9e8">{{testVueTrim}}</span>
      <br />
      <br />
      <div @click="fatherClick">
        <a @click="testStop" class="btn">单纯点击事件</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a @click.stop="testStop" class="btn">click.stop阻止单击事件继续传播</a>
      </div>
    </div>
    <!-- 组件传值 -->
    <div class="testProp">
      <h2>组件传值</h2>
      <p>子组件</p>
      <p>父接收到的子组件值：{{childDatas}}</p>
      <button @click="testChildFun" class="btn-mini">点击执行子组件方法</button>
      <br />
      <input type="text" v-model="sendChildStr" placeholder="输入传给子组件的数据" />
      <child ref="child" :testArr="initdata" :testStr="sendChildStr" @childData="childData" @childFun="testya"> </child>
    </div>
    <!-- js深克隆 浅克隆  -->
    <div class="clone">
      <h2>深克隆与浅克隆</h2>
    <!-- <ul>
      <li>（1）：为什么要引入Vue,不是全局注册了吗</li>
      <li>（2）:1-2会互相影响，赋值其中一个，另一个会正常</li>
      <li>（3）:3的实现会使1、2成功</li>
      <li>（4）this.commonArr[2] = "哈哈";在其他方法中有Vue.set时可以修改？</li>
      <li>（4）Vue.set更新时界面上数据都会更新，但1,2没有使用set还能更新</li>
    </ul> -->
    </div>
  </div>
</template>

<script>
import ImgEl from "../../components/ImgEl.vue";
import DragImg from "../../components/DragImg.vue";
import Child from "../../components/Child.vue";

export default {
  components: {
    ImgEl,
    DragImg,
    Child,
  },
  data() {
    return {
      cloneArr1: [1, 2, 3],
      sendChildStr: "",
      childDatas: "",
      testVueTrim: 0,
      testVueLazy: 0,
      testVueNumber: 0,
      numberList: [1, 2, 3, 4, 5, 6],
      sortArr: "",
      initdata: [4, 1, -7, 0, 12, -2, 0, 2],
      proNum: 0,
      info: "",
      inp1: "",
      inp2: 0,
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
  computed: {
    add() {
      return parseInt(this.inp1) + parseInt(this.inp2);
    },
  },
  watch: {
    inp1: function (val) {
      this.inp1 = val.replace(/\D/g, "");
    },
    inp2: function (val) {
      this.inp2 = val.replace(/\D/g, "");
    },
  },
  mounted() {
    this.cloneFun1();
  },
  methods: {
    // 深克隆与浅克隆
    cloneFun1() {
      // 基本类型（undefined、Null、Boolean、Number、String）不会产生深克隆浅克隆
      // 引用类型会产生Object、Array和Function
      // 浅克隆就是将栈内存中的引用复制一份，赋给一个新的变量，本质上两个指向堆内存中的同一地址，内容也相同，
      // 其中一个变化另一个内容也会变化（根本上改变的是同一个对象）。
      // 深克隆就是创建一个新的对象，开辟一块内存，然后将原对象中的数据全部复制过去，新对象和原对象毫无关系，互不影响
      let arr = [1, 2, 3, 4];
      let arr1 = arr;
      arr[1] = "新的";
      // console.log(arr);
      // console.log(arr1);

      let obj = { a: 1, b: 2, c: 3 };
      let obj1 = obj;
      obj1.b = "修改";
      // console.log(obj);
      // console.log(obj1);
      let obj2 = this.cloneFun(obj1);
      obj2.c = "深克隆";
      console.log(obj);
      console.log(obj2);
      // 深克隆
      // Array.from(arr)实现
      let arr2 = Array.from(arr);
      arr2[2] = "深克隆";
      // console.log(arr);
      // console.log(arr2);
      // 扩展运算符
      let arr3 = [...arr];
      arr3[1] = "扩展运算符";
      // console.log(arr);
      // console.log(arr3);
      let arr4 = this.cloneFun(arr);
      arr4.push("arr4的数据");
      // console.log(arr);
      // console.log(arr4);
    },
    // 整理深拷贝
    cloneFun(obj) {
      let type = Object.prototype.toString.call(obj);
      if (type == "[object Array]") {
        return [...obj];
      } else if (type == "[object Object]") {
        return JSON.parse(JSON.stringify(obj));
      }
    },
    // 使用$emit调用的父组件方法
    testya(val) {
      alert("使用emit传的值为:" + val);
    },
    // 被子组件调用的方法
    parentFun(val) {
      alert("这是父组件组件方法子组件,传入的值：" + val);
    },
    // 父组件执行子组件方法
    testChildFun() {
      this.$refs.child.childFun();
    },
    // 子传给父
    childData(val) {
      this.childDatas = val;
    },
    fatherClick() {
      alert("父");
    },
    // 测试vue click.stop
    testStop() {
      alert("子");
    },
    // 一键复制
    copyData() {
      let copyText = this.$refs.textData;
      copyText.select(); //选择对象
      document.execCommand("copy");
      alert("复制成功");
    },

    // 鼠标放置
    startMouse(el) {
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
    // 缩减async/await
    async testAwait1() {
      let num = 6;
      if (this.proNum < num) {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(this.proNum);
            this.proNum++;
            resolve();
          }, 300);
        });
        this.testAwait1();
      }
    },
  },
};
</script>
<style scoped lang="less">
.testJs {
  font-size: 16px;
  input[type="text"] {
    border: 1px solid #000;
  }
  div {
    margin: 20px 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: red;
  }
  .btn {
    border: 1px solid #13a3ff;
    background-color: #fff;
    color: #13a3ff;
    padding: 6px 10px;
    margin: 20px;
    cursor: pointer;
  }
  .btn-mini {
    border: 1px solid #13a3ff;
    background-color: #fff;
    color: #13a3ff;
    padding: 4px 8px;
    margin: 6px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #13a3ff;
    color: #fff;
  }
  .mouse {
    width: 100%;
    box-shadow: 10px 10px 5px #888888;
  }
  .translate {
    margin: 10px 0;
    input {
      border: 1px solid #000;
      margin-right: 10px;
    }
  }
  .copy {
    button {
      background-color: #fff;
      color: #13a3ff;
      border: 1px solid #13a3ff;
      padding: 2px 4px;
      cursor: pointer;
    }
  }
  .sort {
    // 元素不能被选中
    p {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Chrome/Safari/Opera */
      -khtml-user-select: none; /* Konqueror */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently*/
    }
  }
}
</style>