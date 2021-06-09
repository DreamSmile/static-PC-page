<template>
  <div class="food">
    <header>
      <!-- 最顶部 -->
      <div class="bg">
        <div class="top">
          <div class="login">登录 | 注册</div>
          <div class="logo"><i class="iconfont">&#xe604;</i>爱美食</div>
          <div class="search"><i class="iconfont">&#xe61d;</i></div>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li class="selecd">首页</li>
          <li v-for="(item, i) in 5" :key="i">我们的菜单</li>
        </ul>
      </div>
      <div class="info">
        <div class="icon"><i class="iconfont">&#xe604;</i></div>
        <h1 class="name">XX美食馆</h1>
        <p class="msg">spicy,tasty&delicious always!</p>
        <button class="btn">给我们建议</button>
      </div>
      <div class="card">
        <div class="items" v-for="(item, i) in 3" :key="i">
          <div class="icon">
            <div class="bg">
              <i class="iconfont">&#xe604;</i>
            </div>
            <p class="name">推广</p>
          </div>
          <p class="msg">
            这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情这是详情详情
          </p>
        </div>
      </div>
    </header>
    <!-- 特殊感谢 -->
    <div class="think">
      <h2>特殊感谢</h2>
      <p class="message">
        为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民为感谢全国人民
      </p>
      <div class="box">
        <div
          class="imgs item"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'food.jpg)' }"
          @mouseover="showPhoto"
          @mouseout="removePhoto"
        >
          <span class="name">蔬菜沙拉</span>
          <div class="bg"></div>
        </div>
        <div class="menu item">
          <p class="title">蔬菜沙拉</p>
          <p class="msg">
            这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍
          </p>
          <p class="money">￥25</p>
        </div>
        <div
          class="imgs item"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'food.jpg)' }"
          @mouseover="showPhoto"
          @mouseout="removePhoto"
        >
          <span class="name">蔬菜沙拉</span>
          <div class="bg"></div>
        </div>
        <div class="menu item">
          <p class="title">蔬菜沙拉</p>
          <p class="msg">
            这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍
          </p>
          <p class="money">￥25</p>
        </div>
        <div
          class="imgs item"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'food.jpg)' }"
          @mouseover="showPhoto"
          @mouseout="removePhoto"
        >
          <span class="name">蔬菜沙拉</span>
          <div class="bg"></div>
        </div>
        <div class="menu item">
          <p class="title">蔬菜沙拉</p>
          <p class="msg">
            这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍
          </p>
          <p class="money">￥25</p>
        </div>
      </div>
    </div>
    <!-- 某商品详细介绍 -->
    <div class="details">
      <div class="set_width">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'food.jpg)' }"
        ></div>
        <div class="info">
          <h2>食品标题</h2>
          <p class="msg">提别事项提别事项提别事项</p>
          <p class="msg">
            详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍
          </p>
          <p class="msg">
            详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍
          </p>
        </div>
      </div>
    </div>
    <!-- 食物列表 -->
    <div class="list">
      <h2>美味的食物</h2>
      <div class="box">
        <div class="item" v-for="(item, i) in 4" :key="i">
          <div
            class="bg"
            :style="{ backgroundImage: 'url(' + $imgsrc + 'food.jpg)' }"
          >
            <p class="name">特殊面食</p>
          </div>
          <p class="msg">
            这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍这是详细介绍
          </p>
          <p class="more">更多</p>
        </div>
      </div>
    </div>
    <!-- 链接部分 -->
    <footer>
      <div class="navs">
        <ul>
          <li class="first">关于我们</li>
          <li v-for="(item, i) in 4" :key="i">链接</li>
        </ul>
        <ul>
          <li class="first">美味菜单</li>
          <li v-for="(item, i) in 5" :key="i">链接名称</li>
        </ul>
        <ul>
          <li class="first">关注我们</li>
          <li v-for="(item, i) in 5" :key="i">公众号</li>
        </ul>
        <ul>
          <li class="first">法律条款</li>
          <li v-for="(item, i) in 2" :key="i">公众号</li>
        </ul>
        <ul>
          <li class="first">法律条款</li>
          <li v-for="(item, i) in 6" :key="i">公众号</li>
        </ul>
      </div>
      <div class="bottom">版权某某公司制作备案号</div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    showPhoto(el) {
      console.log("增加");
      el.currentTarget.className = "imgs item big";
    },
    removePhoto(el) {
      console.log("移除");
      el.currentTarget.className = "imgs item";
    },
  },
};
</script>
<style scoped lang="less">
.food {
  font-family: PingFang SC, -apple-system, BlinkMacSystemFont, Tahoma, Arial,
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  margin: 0 auto;
  min-width: 1200px;
  max-width: 1920px;
  color: #6c6c6c;

  header {
    background-color: #f7d6a9;
    height: 800px;
    .bg {
      background-color: #f65a5b;
      .top {
        color: #fff;
        height: 30px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        .login {
          cursor: pointer;
        }
        .logo {
          .iconfont {
            font-size: 14px;
            margin-right: 4px;
          }
        }
        .search {
          cursor: pointer;
        }
      }
    }
    .nav {
      width: 80%;
      margin: 0 auto;
      ul {
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        text-align: center;
        li {
          float: left;
          width: calc(100% / 6);
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          line-height: 50px;
        }
        .selecd {
          background-color: #204057;
          color: #fff;
          opacity: 1;
        }
        li:hover {
          color: #f65a5b;
        }
      }
    }
    .info {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      margin-top: 50px;
      margin-bottom: 40px;
      .icon {
        background-color: #f65a5b;
        border-radius: 50%;
        width: 110px;
        height: 110px;
        margin: 0 auto;
        .iconfont {
          font-size: 50px;
          line-height: 110px;
        }
      }
      .name {
        font-size: 46px;
        color: #f65a5b;
        font-weight: 600;
        margin: 30px 0 40px 0;
      }
      .msg {
        font-size: 20px;
        font-size: 36px;
      }
      .btn {
        padding: 10px 20px;
        background-color: #f65a5b;
        color: #fff;
        margin-top: 40px;
        cursor: pointer;
      }
    }
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      box-sizing: border-box;
      margin: 0 auto;
      cursor: pointer;
      .items {
        width: calc(100% / 3.5);
        .icon {
          background-color: rgba(255, 255, 255, 0.3);
          height: 170px;
          position: relative;
          .bg {
            border-radius: 50%;
            height: 70px;
            width: 70px;
            margin: 0 auto;
            display: inline-block;
            position: absolute;
            top: 50%;
            margin-top: -35px;
            left: calc(50% - 35px);
            text-align: center;

            .iconfont {
              line-height: 70px;
              font-size: 30px;
              color: #fff;
            }
          }
          .name {
            position: absolute;
            bottom: 20px;
            left: calc(50% - 14px);
          }
        }
        .msg {
          margin-top: 4px;
          color: #fff;
          text-indent: 2em;
          padding: 0 20px;
          line-height: 24px;
        }
      }
    }
  }
  //   特殊感谢
  .think {
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    h2 {
      color: #f65a5b;
      font-weight: 500;
      font-size: 24px;
      position: relative;
      display: block;
      width: 100px;
      margin: 0 auto;
      margin-bottom: 64px;
    }
    h2::after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #24272c;
      bottom: -18px;
      left: -20px;
      width: 140px;
      height: 2px;
    }
    .message {
      width: 70%;
      margin: 0 auto;
      text-align: left;
      text-indent: 2em;
      line-height: 20px;
      margin-bottom: 80px;
    }
    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      box-sizing: border-box;
      .item {
        width: calc(100% / 3.5);
        min-height: 250px;
        box-sizing: border-box;
        margin-bottom: 26px;
      }
      .imgs {
        background-position: 50%;
        background-size: cover;
        position: relative;
        .name {
          position: absolute;
          bottom: 26px;
          left: 26px;
          z-index: 2;

          color: #fff;
        }
        .bg {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
          z-index: 1;
          border-bottom: 100px solid #f65a5b;
          border-right: 200px solid transparent;
        }
      }
      .big {
        background-size: 200%;
      }
      .menu {
        background-color: #204055;
        color: #fff;
        padding: 20px;
        position: relative;
        .title {
          font-size: 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .msg {
          margin-bottom: 20px;
          line-height: 24px;
        }
        .money {
          text-align: right;
          font-size: 20px;
          position: absolute;
          right: 20px;
          bottom: 20px;
        }
      }
    }
  }
  //   食品详细介绍
  .details {
    width: 100%;
    background-color: #6a727c;
    .set_width {
      width: 80%;
      margin: 0 auto;
      padding: 40px 0;
      .imgs {
        background-position: 50%;
        background-size: cover;
        background-color: #ddd;
        width: 45%;
        margin-right: 30px;
        height: 300px;
        display: inline-block;
        vertical-align: middle;
      }
      .info {
        display: inline-block;
        width: calc(55% - 30px);
        vertical-align: middle;
        box-sizing: border-box;
        h2 {
          color: #f65a5b;
          font-size: 24px;
          font-weight: 500;
          padding: 0 30px 20px 30px;
          border-bottom: 2px solid #24272c;
          display: inline-block;
          margin-bottom: 30px;
        }
        .msg {
          text-indent: 2em;
          color: #fff;
          line-height: 24px;
        }
      }
    }
  }
  //   食物列表
  .list {
    height: 600px;
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    h2 {
      color: #f65a5b;
      font-weight: 500;
      font-size: 24px;
      position: relative;
      display: block;
      width: 120px;
      margin: 0 auto;
      margin-bottom: 64px;
    }
    h2::after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #24272c;
      bottom: -18px;
      left: -20px;
      width: 160px;
      height: 2px;
    }
    .box {
      .item {
        display: inline-block;
        box-sizing: border-box;
        padding: 25px;
        width: calc(100% / 4);
        border: 1px solid #c1c5c8;
        border-right: none;
        cursor: pointer;
        .bg {
          width: 100%;
          height: 200px;
          background-position: 50%;
          background-size: cover;

          .name {
            background-color: #1f3f54;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            height: 28px;
            line-height: 28px;
          }
        }
        .msg {
          text-indent: 2em;
          line-height: 24px;
          margin: 16px 0;
          font-weight: 500;
        }
        .more {
          color: #f65a5b;
        }
      }
      .item:last-child {
        border-right: 1px solid #c1c5c8;
      }
    }
  }
  //   链接区
  footer {
    background-color: #6a727c;
    padding-top: 80px;
    .navs {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 80%;
      margin: 0 auto;
      ul {
        li {
          color: #fff;
          line-height: 36px;
          cursor: pointer;
        }
        li:hover {
          color: #f65a5b;
        }
        .first {
          color: #f65a5b;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    .bottom {
      text-align: center;
      background-color: #f65a5b;
      height: 50px;
      line-height: 50px;
      font-size: 12px;
      color: #fff;
    }
  }
}
</style>