<template>
  <div class="safe">
    <!-- 头部 -->
    <header>
      <div class="top">
        <div class="bg">
          <span>欢迎来到第三方保险平台-XXX！</span>
          <div class="box">
            <div class="money">
              <i class="iconfont">&#xe683;</i>
              成为VIP
            </div>
            <div class="money">
              <i class="iconfont">&#xe683;</i>
              支付中心
            </div>
            <div class="login">注册 登录</div>
          </div>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <img class="logo" :src="$imgsrc + 'yght_logo.jpg'" />
        <div class="search_el">
          <input class="inp" type="text" placeholder="请输入想要的保险产品" />
          <button class="btn"><i class="iconfont">&#xe61d;</i></button>
        </div>
        <div class="phone">
          <i class="iconfont icon">&#xe61d;</i>
          <div class="info">
            <p class="name">客服电话</p>
            <p class="number">12345678969</p>
          </div>
        </div>
        <img class="code" :src="$imgsrc + 'yght_logo.jpg'" />
      </div>
      <!-- nav -->
      <div class="navs">
        <ul>
          <li v-for="(item, i) in 10" :key="i">首页</li>
        </ul>
      </div>
      <!-- swipe轮播区和表单输入 -->
      <div class="swipe">
        <div class="forms">
          <p class="name">需求测试</p>
          <p class="msg">让我们帮您分析适合什么保险</p>
          <!-- 单选框 -->
          <div class="rows">
            您的性别：
            <label><input type="radio" name="sex" value="男生" />男生</label>
            <label><input type="radio" name="sex" value="女生" />女生</label>
          </div>
          <div class="rows">
            出生日期：<input
              type="text"
              placeholder="格式：2021-06-09"
              class="inp"
            />
          </div>
          <button class="btn">开始测试</button>
        </div>
      </div>
    </header>
    <!-- 通知区 -->
    <div class="banner">
      <i class="iconfont">&#xe683;</i>
      <span><a href="#">这是热点新闻新闻热点新闻新闻</a></span>
    </div>
    <!-- 新闻区 -->
    <div class="news">
      <div class="new_left">
        <div class="title">
          <span class="name">保险专题</span>
          <span class="more">更多</span>
        </div>
        <img :src="$imgsrc + 'safe_swipe.jpg'" />
        <p class="head">标题标题标题标题标题标题</p>
        <p class="msg">
          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介介绍详细介绍详细介绍详细介绍详细介介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍
        </p>
        <div class="roll">
          <div class="line selecd"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="new_center">
        <div class="title">
          <span class="name">最新险种</span>
          <span class="more">更多</span>
        </div>
        <ul>
          <li v-for="(item, i) in 6" :key="i">
            <a href="#"> 【医疗险】长安责任住院费用医疗保险（2021版） </a>
            <div class="num"><i class="iconfont">&#xe683;</i>100{{ i }}</div>
          </li>
        </ul>
        <div class="title">
          <span class="name">保险咨询</span>
          <span class="more">更多</span>
        </div>
        <ul>
          <li v-for="(item, i) in 6" :key="i">
            <a href="#">儿童能单独购买保险吗</a>
            <div class="num"><i class="iconfont">&#xe683;</i>100{{ i }}</div>
          </li>
        </ul>
      </div>
      <div class="new_right">
        <img v-for="(item, i) in 2" :key="i" :src="$imgsrc + 'safe_ad.jpg'" />
      </div>
    </div>
    <!-- 图片广告 -->
    <div class="img_banner">
      <img :src="$imgsrc + 'safe_banner.jpg'" />
    </div>
  </div>
</template>
<style scoped lang="less">
.safe {
  background-color: #f3f5f7;
  color: #333;
  font-family: PingFang SC, -apple-system, BlinkMacSystemFont, Tahoma, Arial,
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  header {
    background-color: #fff;
    .top {
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #dadada;
      background-color: #fff;
      font-size: 16px;
      .bg {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .box {
          .money {
            display: inline-block;
            color: #f6881f;
            cursor: pointer;
          }
          .login {
            display: inline-block;
            color: #13a3ff;
            cursor: pointer;
            margin-left: 20px;
          }
        }
      }
    }
    .search {
      width: 1200px;
      margin: 20px auto;
      margin-bottom: 8px;
      .logo {
        width: 162px;
        height: 54px;
        display: inline-block;
      }
      .search_el {
        display: inline-block;
        margin-left: 96px;
        .inp {
          border: 0;
          padding: 11px;
          width: 402px;
          border: 1px solid #13a3ff;
        }
        .btn {
          background-color: #13a3ff;
          color: #fff;
          width: 46px;
          height: 46px;
          line-height: 46px;
          text-align: center;
          font-size: 27px;
          cursor: pointer;
          .color {
            font-size: 30px;
          }
        }
      }
      .phone {
        display: inline-block;
        color: #13a3ff;
        margin-left: 64px;
        .icon {
          margin-right: 4px;
          font-size: 36px;
        }
        .info {
          display: inline-block;
          .name {
          }
          .number {
            font-size: 22px;
          }
        }
      }
      .code {
        display: inline-block;
        width: 141px;
        height: 86px;
        margin-left: 78px;
      }
    }
    .navs {
      width: 100%;
      background-color: #13a3ff;

      ul {
        color: #fff;
        overflow: hidden;
        width: 1200px;
        height: 48px;
        line-height: 48px;
        margin: 0 auto;
        li {
          float: left;
          width: 10%;
          cursor: pointer;
          text-align: center;
          font-size: 18px;
        }
        li:hover {
          background-color: #008fe9;
        }
      }
    }
    .swipe {
      position: relative;
      height: 300px;
      background-color: #a2d3f3;
      .forms {
        z-index: 2;
        width: 335px;
        height: 230px;
        text-align: center;
        padding: 30px 40px 40px;
        border-radius: 2px;
        position: absolute;
        top: 0;
        right: 50%;
        margin-right: -600px;
        background: rgba(255, 255, 255, 0.8);
        filter: progid:DXImageTransform.Microsoft.gradient(gradientType = 0,startColorstr = #80ffffff,endColorstr = #80ffffff)\8;
        .name {
          color: #13a3ff;
          font-size: 30px;
          line-height: 40px;
        }
        .msg {
          color: #666;
          font-size: 18px;
          line-height: 37px;
        }
        .rows {
          text-align: left;
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          input[type="radio"] {
          }
          input[type="text"] {
            padding: 4px 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: transparent;
          }
        }
        .btn {
          cursor: pointer;
          color: #fff;
          background: #13a3ff;
          border-radius: 6px;
          display: block;
          line-height: 45px;
          height: 45px;
          border: 0;
          width: 100%;
          margin: 15px 0 0;
        }
      }
    }
  }
  //   通知区
  .banner {
    width: 1200px;
    background-color: #fff;
    margin: 20px auto;
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    .iconfont {
      margin: 0 10px;
    }
    span {
    }
  }
  //   新闻专区
  .news {
    width: 1200px;
    height: 520px;
    margin: 0 auto;
    display: flex;
    background-color: #fff;
    box-sizing: border-box;
    .title {
      height: 34px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .name {
        font-size: 24px;
        color: #13a3ff;
      }
      .more {
        color: #666;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .new_left {
      width: 384px;
      padding: 20px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
      .head {
        font-size: 18px;
        margin: 30px 0 15px 0;
        text-align: center;
      }
      .msg {
        text-indent: 2em;
        font-size: 16px;
        line-height: 20px;
      }
      .roll {
        margin: 0 auto;
        width: 156px;
        margin-top: 30px;
        .line {
          height: 5px;
          border-radius: 20px;
          display: inline-block;
          width: 44px;
          height: 5px;
          margin: 0 3px;
          background: #e9e9e9;
        }
        .selecd {
          width: 50px;
          background-color: #13a3ff;
        }
      }
    }
    .new_center {
      flex: 1;
      border: 1px solid #dadada;
      border-top: none;
      border-bottom: none;
      padding: 20px;
      box-sizing: border-box;
      ul {
        border-bottom: 1px dashed #e0e0e0;
        margin-bottom: 20px;
        padding-bottom: 20px;
        li {
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
            flex: 1;
          }
          .num {
            color: #aaa;
            .iconfont {
            }
          }
        }
        li:hover {
          a {
            color: #13a3ff;
          }
        }
      }
      ul:last-child {
        border-bottom: none;
      }
    }
    .new_right {
      width: 290px;
      padding: 20px;
      img {
        width: 100%;
      }
      img:last-child {
        margin-top: 20px;
      }
    }
  }
  //   广告图片
  .img_banner {
    width: 1200px;
    margin: 20px auto;
    img {
      width: 100%;
    }
  }
}
</style>