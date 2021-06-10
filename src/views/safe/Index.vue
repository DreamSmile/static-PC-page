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
    <!-- 城市明星 -->
    <div class="star">
      <h2 :style="{ backgroundImage: 'url(' + $imgsrc + 'title_bg.jpg)' }">
        城市明星
      </h2>
      <div class="box">
        <div class="content" v-for="(item, i) in 4" :key="i">
          <img :src="$imgsrc + 'user.jpg'" />
          <div class="info">
            <p class="name">张三</p>
            <p class="space">中国泉州</p>
            <p class="work">中国人寿</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 保险专家 -->
    <div class="expert">
      <div class="title">
        <span class="name">保险专家</span>
        <div class="menu">
          <ul>
            <li>新闻特刊</li>
            <li>资信体质</li>
            <li>推荐专家</li>
            <li>保险团队</li>
          </ul>
          <span class="more">更多</span>
        </div>
      </div>
      <div class="container">
        <div class="con_left">
          <h3>精英查询</h3>
          <div class="forms">
            <select class="sel" v-for="(item, i) in 3" :key="i">
              <option value="all">全部</option>
            </select>
            <input class="inp" type="text" placeholder="输入保险精英的名字" />
            <button class="btn">找保险精英</button>
          </div>
          <div class="num">
            <img :src="$imgsrc + 'img01.jpg'" />
            <div class="info">
              <p class="name">保险精英库</p>
              <p class="msg">目前共有精英数：</p>
              <p class="number">123459人</p>
            </div>
          </div>
        </div>
        <div class="con_right">
          <div class="box" v-for="(item, i) in 9" :key="i">
            <img class="imgs" :src="$imgsrc + 'user.jpg'" />
            <div class="info">
              <p class="name">李四</p>
              <p class="work">泉州 中国人寿</p>
              <button class="btn">预约我</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 热门方案 -->
    <div class="hot">
      <div class="title">
        <span class="name">热门方案</span>
        <span class="more">更多</span>
      </div>
      <div class="list" v-for="(item, i) in 3" :key="i">
        <p class="name">上班族适合买什么保险</p>
        <p class="work">
          <i class="iconfont">&#xe683;</i>福建泉州
          <i class="iconfont">&#xe683;</i>泰康人寿
        </p>
        <p class="message">适合对象：24岁 不限</p>
        <p class="message">保障需求：意外险，重疾险</p>
        <div class="num">
          <div class="item">
            <p class="number">2345.00</p>
            <p class="item_name">年缴保费</p>
          </div>
          <div class="item">
            <p class="number">2345.00</p>
            <p class="item_name">年缴保费</p>
          </div>
        </div>
        <button class="btn">查看方案详情</button>
      </div>
    </div>
    <!-- 页脚 -->
    <footer>
      <div class="bg">
        <div class="copyright">
          <img class="logo" :src="$imgsrc + 'yght_logo.jpg'" />
          <p>增值电信业务经营许可证（ISP/ICP）</p>
          <p>增值电信业务经营许可证（ISP/ICP）</p>
          <p>增值电信业务经营许可证</p>
          <p>经营许可证（ISP/ICP）</p>
          <p>业务经营许可证（ISP/ICP）</p>
        </div>
        <div class="hootlink">
          <ul v-for="(item, i) in 5" :key="i">
            <li class="frist"><i class="iconfont">&#xe600;</i>用户帮助</li>
            <li v-for="(items, j) in 4" :key="j">网站导航</li>
          </ul>
        </div>
      </div>
    </footer>
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
        width: 146px;
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
          .number {
            font-size: 22px;
          }
        }
      }
      .code {
        display: inline-block;
        width: 162px;
        margin-left: 74px;
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
  //   城市明星
  .star {
    padding: 20px;
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    box-sizing: border-box;
    h2 {
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
      font-size: 30px;
      color: #13a3ff;
    }
    .box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .content {
        width: 265px;
        box-sizing: border-box;
        background-color: #f3f5f7;
        height: 145px;

        img {
          width: 125px;
          height: 100%;
          display: inline-block;
          margin-right: 12px;
          vertical-align: middle;
          cursor: pointer;
        }
        .info {
          display: inline-block;
          height: 100%;
          box-sizing: border-box;
          vertical-align: middle;

          .name {
            color: #2c2c2c;
            cursor: pointer;
            font-size: 18px;
            margin-top: 20px;
            font-weight: 500;
          }
          .space,
          .work {
            font-size: 16px;
            cursor: pointer;
            margin-top: 14px;
          }
          .name:hover,
          .space:hover,
          .work:hover {
            color: #13a3ff;
          }
        }
      }
    }
  }
  //   保险专家
  .expert {
    width: 1200px;
    margin: 20px auto;
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #dadada;
      .name {
        font-size: 24px;
        color: #13a3ff;
      }
      .menu {
        ul {
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
          li {
            float: left;
            width: 100px;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            position: relative;
          }
          li:hover {
            color: #13a3ff;
          }
          li:after {
            content: "";
            width: 1px;
            height: 18px;
            position: absolute;
            right: 0;
            top: 0;
            background-color: #2c2c2c;
          }
          li:last-child:after {
            background-color: #fff;
          }
        }
        
        .more {
          vertical-align: middle;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
    .container {
      display: flex;
      box-sizing: border-box;
      .con_left {
        width: 320px;
        padding: 10px 20px 10px 0;
        border-right: 1px solid #dadada;
        h3 {
          font-size: 18px;
        }
        .forms {
          box-sizing: border-box;
          font-size: 16px;
          .sel {
            width: 100%;
            border: 1px solid #ccc;
            margin-top: 13px;
            height: 38px;
          }
          .inp {
            width: 100%;
            border: 1px solid #ccc;
            padding: 6px 4px;
            margin-top: 13px;
            box-sizing: border-box;
          }
          .btn {
            width: 100%;
            color: #fff;
            font-size: 18px;
            text-align: center;
            line-height: 30px;
            background-color: #13a3ff;
            padding: 6px 0;
            border-radius: 5px;
            margin-top: 13px;
            cursor: pointer;
            margin-bottom: 16px;
          }
        }
        .num {
          padding-top: 16px;
          border-top: 1px solid #ccc;
          img {
            display: inline-block;
          }
          .info {
            display: inline-block;
            vertical-align: bottom;
            font-size: 0;
            .name,
            .msg {
              font-size: 16px;
              line-height: 30px;
            }
            .number {
              color: #13a3ff;
              font-size: 24px;
              line-height: 30px;
            }
          }
        }
      }
      .con_right {
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 20px;

        .box {
          display: flex;
          box-sizing: border-box;
          width: 255px;
          margin-top: 16px;
          .imgs {
            width: 94px;
            height: 110px;
            margin-right: 20px;
          }
          .info {
            .name {
              font-size: 16px;
              margin-top: 10px;
              font-weight: 500;
              cursor: pointer;
            }
            .work {
              margin-top: 10px;
              font-size: 14px;
            }
            .btn {
              border: 1px solid #13a3ff;
              color: #13a3ff;
              background-color: #fff;
              padding: 2px 10px;
              margin-top: 10px;
              cursor: pointer;
            }
            .btn:hover {
              background-color: #13a3ff;
              color: #fff;
            }
          }
        }
      }
    }
  }
  //  热门方案
  .hot {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #dadada;
      .name {
        color: #13a3ff;
        font-size: 24px;
        padding-left: 20px;
      }
      .more {
        color: #666;
        font-size: 16px;
        cursor: pointer;
        cursor: pointer;
        padding-right: 20px;
      }
    }
    .list {
      display: inline-block;
      width: calc(100% / 3);
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      border-right: 1px solid #ccc;
      .name {
        font-size: 24px;
        font-weight: 500;
      }
      .work {
        font-size: 16px;
        color: #aaa;
        border-bottom: 1px dotted #ccc;
        line-height: 40px;
        margin-bottom: 24px;
      }
      .message {
        font-size: 18px;
        line-height: 30px;
      }
      .num {
        margin-top: 45px;
        .item {
          display: inline-block;
          width: 50%;
          font-size: 0;
          box-sizing: border-box;

          .number {
            color: #13a3ff;
            font-size: 25px;
          }
          .item_name {
            font-size: 18px;
            margin-top: 10px;
          }
        }
        .item:last-child {
          border-left: 1px dotted #ccc;
        }
      }
      .btn {
        width: 100%;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        background: #13a3ff;
        border: 0;
        border-radius: 5px;
        margin: 20px auto;
        margin-bottom: 0;
      }
    }
    .list:last-child {
      border-right: none;
    }
  }
  //   页脚
  footer {
    background-color: #444749;
    padding-bottom: 30px;
    .bg {
      width: 1200px;
      margin: 30px auto;
      display: flex;
      .copyright {
        line-height: 26px;
        color: #92979b;
        margin-right: 40px;
        margin-top: 70px;
        .logo {
          width: 182px;
          height: 54px;
          margin-bottom: 20px;
        }
      }
      .hootlink {
        color: #fff;
        flex: 1;
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        ul {
          li {
            cursor: pointer;
            line-height: 30px;
            .iconfont {
              margin-right: 10px;
            }
          }
          li:hover {
            color: #13a3ff;
          }
          .frist {
            font-size: 18px;
            margin-left: -27px;
            line-height: 16px;
          }
          .frist:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>