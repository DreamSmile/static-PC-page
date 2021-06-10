<template>
  <div class="game">
    <!-- 顶部 -->
    <header>
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
    <!-- 背景大图 -->
    <div
      class="bg_01"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'bg_01.jpg)' }"
    ></div>
    <!-- 新闻资讯 -->
    <div class="news">
      <div class="swipe">
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
  </div>
</template>

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
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .swipe {
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
}
</style>