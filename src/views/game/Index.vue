<template>
  <div class="game">
    <!-- 顶部 -->
    <header id="home">
      <div class="top">
        <div class="line">
          <div class="logo">
            <img class="tx_logo" :src="$imgsrc + 'tx_logo.png'" />
            <img class="game_logo" :src="$imgsrc + 'game_logo.jpg'" />
          </div>
          <div class="topnav">
            <span><i class="iconfont">&#xe600;</i>成长守护平台</span>
            <span>腾讯游戏排行榜<i class="iconfont down">&#xe68b;</i></span>
          </div>
        </div>
      </div>
      <div class="navs">
        <img :src="$imgsrc + 'logo_game.png'" />
        <ul>
          <li>官方首页</li>
          <li>新闻资讯</li>
          <li>游戏特色</li>
          <li>套装图鉴</li>
          <li>游戏攻略</li>
          <li>同人站</li>
          <li>兑换礼包</li>
          <li>玩家社区</li>
        </ul>
      </div>
    </header>
    <!-- 右边导航栏 -->
    <div
      class="siderbar"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'siderbar_bg.png)' }"
    >
      <ul>
        <li @click="go('section1')">新闻资讯</li>
        <li @click="go('section2')">美好之旅</li>
        <li @click="go('section3')">游戏特色</li>
        <li @click="go('section4')">游戏攻略</li>
        <li @click="go('section5')">同人站</li>
        <li @click="go('home')">top</li>
      </ul>
    </div>
    <!-- 背景大图 -->
    <div
      class="bg_01"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'bg_01.jpg)' }"
    ></div>
    <!-- 新闻资讯 -->
    <div class="news" id="section1">
      <div class="new_swipe">
        <img class="swipe_img" :src="$imgsrc + 'game_news_swipe.jpg'" />
      </div>
      <div class="news_el">
        <div class="tabs">
          <span class="name slected">热门</span>
          <span class="name">新闻</span>
          <span class="name">公告</span>
          <span class="name">活动</span>
          <i class="iconfont">&#xe84f;</i>
        </div>
        <div class="list">
          <ul>
            <li v-for="(item, i) in 5" :key="i">
              <span class="list_name">[新闻]【公告】奇迹暖暖活动信息公示</span>
              <span class="list_data">06/09</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="code"
        :style="{ backgroundImage: 'url(' + $imgsrc + 'qr-bg.jpg)' }"
      >
        <img class="code_img" :src="$imgsrc + 'qr-code.png'" />
      </div>
    </div>
    <!-- 轮播图三格 -->
    <div
      id="section2"
      class="swipe"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'bg_03.jpg' }"
    >
      <div class="img_box">
        <img :src="preImg" class="pre" />
        <img :src="selImg" class="sel" />
        <img :src="nextImg" class="next" />
        <img :src="$imgsrc + 'btn_r.png'" class="btn_r" />
        <img :src="$imgsrc + 'btn_l.png'" class="btn_l" />
      </div>
    </div>
    <!-- 轮播图平滑 -->
    <div
      id="section3"
      class="swipe1"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'bg_04.jpg' }"
    >
      <div class="img_box">
        <img :src="$imgsrc + '1200-460-3.jpg'" />
        <div class="icon">
          <div class="white"></div>
          <div class="pink"></div>
          <div class="white"></div>
          <div class="white"></div>
        </div>
      </div>
    </div>
    <!-- 游戏攻略 -->
    <div
      id="section4"
      class="strategy"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'bg_05.jpg' }"
    >
      <div class="content">
        <div class="con_left">
          <div class="title">
            <span class="name">活动攻略</span>
            <i class="iconfont">&#xe84f;</i>
          </div>
          <img :src="$imgsrc + 'gl.jpg'" />
          <ul>
            <li v-for="(item, i) in 5" :key="i">
              [活动攻略]【燕随春归】挑战灵感阶梯 收集福利套装！
            </li>
          </ul>
        </div>
        <div class="con_center">
          <div class="title">
            <span class="name">通关攻略</span>
            <i class="iconfont">&#xe84f;</i>
          </div>
          <div class="box">
            <div class="tab_top">
              <span class="tab_one">第一卷</span>
              <span class="tab_two">第二卷</span>
            </div>
            <div class="tab_left">
              <span class="tab_one">少女级</span>
              <span class="tab_two">公主级</span>
            </div>
            <div class="content">
              <ul>
                <li v-for="(item, i) in 10" :key="i">第一章初到麦川</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="con_right">
          <div class="title">
            <span class="name">通关攻略</span>
            <i class="iconfont">&#xe84f;</i>
          </div>
          <div class="icon_box">
            <div class="item" v-for="(item, i) in 12" :key="i">
              <img :src="$imgsrc + 'icons.png'" />
              <span class="name">反弹礼物</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 同人站 -->
    <div
      id="section5"
      class="fellow"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'bg_06.jpg' }"
    >
      <div class="content">
        <div class="f_left">
          <div class="title">
            <span class="name">视频</span>
            <i class="iconfont">&#xe84f;</i>
          </div>
          <div class="box">
            <div
              class="item"
              v-for="(item, i) in 4"
              :key="i"
              :style="{ backgroundImage: 'url(' + $imgsrc + '0.png' }"
            >
              <span>《奇迹暖暖》创意视频创意视频创意视频</span>
            </div>
          </div>
        </div>
        <div class="f_center">
          <div class="title">
            <span class="name">漫画</span>
            <i class="iconfont">&#xe84f;</i>
          </div>
          <div class="box">
            <div
              class="imgs"
              :style="{ backgroundImage: 'url(' + $imgsrc + '0.png' }"
            >
              <span>[漫画]奇迹暖暖漫画漫画</span>
            </div>
            <div
              class="imgs"
              :style="{ backgroundImage: 'url(' + $imgsrc + '0.png' }"
            >
              <span>[漫画]奇迹暖暖漫画漫画</span>
            </div>
            <ul>
              <li v-for="(item, i) in 5" :key="i">
                <span class="name">[漫画]Nikki UP2U3 奇暖杂志 Vol .32</span>
                <span class="time">02/01</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="f_right">
          <div class="title">
            <span class="name">小说</span>
            <i class="iconfont">&#xe84f;</i>
          </div>
          <img :src="$imgsrc + 'gl.jpg'" />
          <ul>
            <li v-for="(item, i) in 5" :key="i">
              <span> [小说]【同人文】永不凋零的花海·卷1</span>
              <span class="time">04/26</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 合作媒体 -->
    <div class="join">
      <p class="title">合作媒体</p>
      <div class="logos">
        <img :src="$imgsrc + '4399.png'" v-for="(item, i) in 5" :key="i" />
      </div>
    </div>
    <!-- 版权信息 -->
    <footer ref="test">
      <div class="content">
        <img :src="$imgsrc + 'foot-dark.png'" />
        <div class="info">
          <p>
            腾讯互动娱乐|服务条款|隐私保护指引|儿童隐私保护指引|腾讯游戏招聘|腾讯游戏客服|游戏列表|广告服务及商务合作
          </p>
          <p>腾讯公司版权所有</p>
          <p>COPYRIGHT © 1998 - 2021 TENCENT. ALL RIGHTS RESERVED.</p>
          <p>
            本网络游戏适合6+岁的用户使用；为了您的健康，请合理控制游戏时间。
          </p>
          <p>
            深圳市市场监督管理局企业主体身份公示工商网监电子标识
            |粤网文[2020]3396-195号|（署）网出证（粤）字第054号
          </p>
          <p>
            粤网文〔2017〕6138-1456号 |文网游备字〔2015〕Ｍ-RPG 1202
            号文网游备字〔2015〕Ｍ-RPG 1202 号|ISBN
            978-7-7979-7519-3|新广出审[2017]4154号|全国文化市场统一举报电话：12318
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {

  methods: {
    go(name) {
      this.$nextTick(() => {
        document.getElementById(name).scrollIntoView();
      });
    },
  },
  data() {
    return {
      swipeList: [
        { src: this.$imgsrc + "game_swipe1.jpg" },
        { src: this.$imgsrc + "game_swipe2.jpg" },
        { src: this.$imgsrc + "game_swipe3.jpg" },
        { src: this.$imgsrc + "game_swipe4.jpg" },
      ],
      preImg: this.$imgsrc + "game_swipe1.jpg",
      selImg: this.$imgsrc + "game_swipe2.jpg",
      nextImg: this.$imgsrc + "game_swipe3.jpg",
    };
  },
};
</script>

<style scoped lang="less">
.game {
  font: normal 14px/1.6em "microsoft yahei", simsun, Tahoma, sans-serif;
  color: #5f3e4f;
  max-width: 1920px;
  margin: 0 auto;

  // 顶部
  header {
    .top {
      border: 1px solid #f5f5f5;
      height: 52px;
      .line {
        width: 980px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          .tx_logo {
            width: 150px;
          }
          .game_logo {
            width: 230px;
          }
        }
        .topnav {
          span {
            margin-left: 20px;
            cursor: pointer;
            color: #464646;
            .down {
              margin-left: 8px;
            }
          }
          span:hover {
            color: #f1a8ad;
          }
        }
      }
    }
    .navs {
      width: 1060px;
      margin: 0 auto;
      img {
        width: 221px;
        display: inline-block;
        vertical-align: middle;
      }
      ul {
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        li {
          font-size: 17px;
          width: 102px;
          float: left;
          line-height: 72px;
          cursor: pointer;
          position: relative;
          text-align: center;
        }
        li:hover {
          color: #f1a8ad;
        }
        li:after {
          content: "";
          position: absolute;
          right: 0;
          top: 27px;
          height: 18px;
          width: 1px;
          background-color: #c0c1c2;
        }
        li:last-child:after {
          content: none;
        }
      }
    }
  }
  // 右边导航
  .siderbar {
    background-size: cover;
    background-position: 50%;
    width: 161px;
    height: 411px;
    position: fixed;
    top: 20%;
    right: 0;
    z-index: 9;

    ul {
      width: 90px;
      height: 315px;
      margin: 10px auto;
      position: relative;
      top: 40px;
      li {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        border-bottom: 1px solid #f1a8ad;
        color: #fff;
        cursor: pointer;
      }
      li:hover {
        color: #f1a8ad;
      }
    }
  }
  // 背景大图
  .bg_01 {
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 600px;
    margin-top: 10px;
  }
  // 新闻资讯
  .news {
    margin-top: -50px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .news_swipe {
      .swipe_img {
        width: 525px;
      }
    }
    .news_el {
      flex: 1;
      padding: 15px;
      box-sizing: border-box;
      .tabs {
        height: 42px;
        border-bottom: 2px solid #d7d7d7;
        .name {
          width: 23%;
          line-height: 42px;
          font-size: 18px;
          display: inline-block;
          text-align: center;
          cursor: pointer;
        }
        .iconfont {
          font-size: 24px;
          vertical-align: sub;
          cursor: pointer;
        }
        .slected {
          border-bottom: 3px solid #e47e80;
        }
      }
      .list {
        ul {
          li {
            height: 48px;
            line-height: 48px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            .list_name {
            }
            .list_data {
              color: #2b2a2a;
            }
          }
        }
      }
    }
    .code {
      width: 225px;
      height: 294px;
      background-position: 50%;
      background-size: cover;
      position: relative;
      .code_img {
        position: absolute;
        top: 30px;
        left: 25px;
        width: 178px;
        height: 177px;
      }
    }
  }
  // 轮播图
  .swipe {
    width: 100%;
    height: 511px;
    background-position: center;
    .img_box {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      height: 500px;
      .pre {
        position: absolute;
        z-index: 1;
        width: 560px;
        left: 0;
        top: 50%;
        margin-top: -154px;
        cursor: pointer;
      }
      .sel {
        width: 724px;
        margin: 0 auto;
        position: absolute;
        z-index: 3;
        top: 50%;
        margin-top: -200px;
        left: 50%;
        margin-left: -362px;
        cursor: pointer;
      }
      .next {
        position: absolute;
        z-index: 1;
        width: 560px;
        right: 0;
        top: 50%;
        margin-top: -154px;
        cursor: pointer;
      }
      .btn_r {
        position: absolute;
        left: 120px;
        top: 50%;
        margin-top: -30px;
        z-index: 2;
        cursor: pointer;
      }
      .btn_l {
        position: absolute;
        z-index: 2;
        right: 120px;
        top: 50%;
        margin-top: -30px;
        z-index: 2;
        cursor: pointer;
      }
    }
  }
  // 平滑轮播图
  .swipe1 {
    width: 100%;
    height: 566px;
    background-position: center;
    .img_box {
      width: 1200px;
      height: 460px;
      margin: 0 auto;
      padding-top: 54px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .icon {
        margin: 0 auto;
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;

        .white,
        .pink {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid #e47e80;
          background-color: #fff;
          margin: 0 3px;
          cursor: pointer;
          box-shadow: 0px 1px 2px #e47e80 inset;
        }
        .pink {
          background-color: #e47e80;
        }
      }
    }
  }
  // 游戏攻略
  .strategy {
    width: 100%;
    height: 516px;
    background-position: center;

    .content {
      width: 1200px;
      background-color: #fff;
      margin: 0 auto;
      position: relative;
      top: 74px;
      height: 425px;
      .title {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e8e8e8;
        .name {
          font-size: 20px;
          color: #5f3e4f;
        }
        .iconfont {
          color: #ddd;
          font-size: 30px;
        }
      }

      .con_left,
      .con_center,
      .con_right {
        width: 370px;
        float: left;
        padding: 0 15px;
      }
      .con_left {
        img {
          width: 100%;
          margin: 20px 0;
        }
        ul {
          li {
            height: 35px;
            line-height: 35px;
          }
        }
      }
      .con_center {
        .box {
          margin-top: 40px;
          width: 100%;
          height: 306px;
          position: relative;
          box-sizing: border-box;

          .tab_top {
            font-size: 16px;
            left: 42px;
            top: -10px;
            position: absolute;
            box-sizing: border-box;
            .tab_one,
            .tab_two {
              padding: 10px 50px 10px 50px;
              border-radius: 20px 20px 0 0;
              background-color: #ff93a5;
              color: #fff;
            }
          }
          .tab_left {
            font-size: 16px;
            width: 42px;
            height: 258px;
            position: absolute;
            top: 22px;
            left: 0;
            .tab_one,
            .tab_two {
              padding: 37px 0 37px 14px;
              border-radius: 20px 0 0 20px;
              background-color: #ff93a5;
              color: #fff;
              display: block;
            }
          }
          .content {
            position: absolute;
            top: 21px;
            left: 41px;
            width: 295px;
            overflow-y: auto;
            height: 280px;
            border: 1px solid #e8e8e8;
            ul {
              li {
                line-height: 36px;
                margin-left: 86px;
                cursor: pointer;
              }
            }
          }
          ::-webkit-scrollbar {
            width: 0;
          }
        }
      }
      .con_right {
        .icon_box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 12px;
          .item {
            width: 86px;
            height: 95px;
            margin-top: 13px;
            text-align: center;
            border: 1px solid #e8e8e8;
            background-color: #f8f8f8;

            img {
              width: 85%;
            }
            .name {
              text-align: center;
            }
          }
        }
      }
    }
  }
  // 同人站
  .fellow {
    width: 100%;
    height: 642px;
    background-position: center;
    .content {
      width: 1200px;
      background-color: #fff;
      margin: 0 auto;
      position: relative;
      top: 74px;
      height: 425px;
      .title {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #e8e8e8;
        .name {
          font-size: 20px;
          color: #5f3e4f;
        }
        .iconfont {
          color: #ddd;
          font-size: 30px;
        }
      }
      .f_left,
      .f_center,
      .f_right {
        width: 370px;
        float: left;
        padding: 0 15px;
      }
      .f_left {
        .box {
          margin-top: 20px;
          box-sizing: border-box;
          width: 100%;
          height: 300px;
          .item {
            width: 176px;
            height: 150px;
            margin: 0 4px 10px 4px;
            float: left;
            font-size: 0;
            box-sizing: border-box;
            background-position: 50%;
            background-size: cover;
            position: relative;
            span {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: rgba(0, 0, 0, 0.5);
              color: #fff;
              font-size: 16px;
              line-height: 30px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 176px;
            }
          }
        }
      }
      .f_center {
        .box {
          margin-top: 20px;
          box-sizing: border-box;
          width: 100%;
          height: 300px;
          .imgs {
            width: 176px;
            height: 150px;
            margin: 0 4px 10px 4px;
            display: inline-block;
            font-size: 0;
            box-sizing: border-box;
            background-position: 50%;
            background-size: cover;
            position: relative;
            span {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: rgba(0, 0, 0, 0.3);
              color: #fff;
              font-size: 16px;
              line-height: 30px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 176px;
            }
          }
          ul {
            li {
              line-height: 34px;
              height: 34px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
              .time {
                color: #2b2a2a;
              }
            }
          }
        }
      }
      .f_right {
        img {
          width: 100%;
          margin: 20px 0;
        }
        ul {
          li {
            height: 35px;
            line-height: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            .time {
              color: #2b2a2a;
            }
          }
        }
      }
    }
  }
  // 合作加盟
  .join {
    background-color: #f8f8f8;
    height: 255px;
    .title {
      font-size: 34px;
      text-align: center;
      color: #50505a;
      height: 56px;
    }
    .logos {
      overflow: hidden;
      margin: 20px auto;
      width: 910px;
      img {
        height: 36px;
        float: left;
        margin-right: 14px;
      }
      img:last-child {
        margin-right: 0;
      }
    }
  }
  // 页脚
  footer {
    background-color: #8c515d;
    .content {
      min-width: 1050px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 auto;
      padding: 15px 20px;
      box-sizing: border-box;
      img {
      }
      .info {
        color: #fff;
        width: 682px;
        p {
          line-height: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>