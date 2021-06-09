<template>
  <div class="travel">
    <!-- 头部 -->
    <header class="banner">
      <div class="top">
        <div class="logo">
          <i class="iconfont">&#xe683;</i>
          <span class="name">Aircraft</span>
        </div>
        <div class="nav">
          <ul>
            <li>首页</li>
            <li>特价旅游</li>
            <li>跟团游</li>
            <li>最新活动</li>
            <li>联系我们</li>
          </ul>
        </div>
      </div>
      <!-- 头部图片中的信息 -->
      <div class="introduce">
        <h1 class="name">Aircraf Ttravel</h1>
        <p class="msg">
          本网站不仅让用户能分享旅游信息和联系旅途中的好友，还根据用户的旅游习惯，向他们提供定制信息，从而让旅游计划更快捷、更有趣，存在的意义宗旨是每个旅行者对旅途的追求各不相同
        </p>
        <button>了解更多</button>
      </div>
    </header>
    <!-- 热门景点区 -->
    <div class="hot">
      <div class="tips">
        本网站精选每月旅游景点前十名，并为您制定个人旅游路线，本站经过大数据严谨分析，只为让您拥有一个美好的旅行一段旅行可以治愈心灵愿您平安喜乐
      </div>
      <button class="btn"><i class="iconfont">&#xe75e;</i></button>
      <div class="title">
        <h2>热门景点 <span>Hot spots</span></h2>
      </div>
      <div class="list">
        <div :class="['item', { one: i == 0 }]" v-for="(item, i) in 4" :key="i">
          <img class="imgs" :src="$imgsrc + 'scenery.png'" />
          <div class="info">
            <p class="name">独角海岛<span>/海南</span></p>
            <p class="msg">
              灯塔是高塔形建筑物，在塔顶装设灯光设备，位置应显要，并注意其应该有特定的建筑造型，易于船舶分辨，同时成为港口最高点之一。由于地球表面为曲面故塔身须有充分的高度
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 为您推荐 -->
    <div class="recommend">
      <div class="tips">
        本网站精选每月旅游景点前十名，并为您制定个人旅游路线，本站经过大数据严谨分析，只为让您拥有一个美好的旅行一段旅行可以治愈心灵愿您平安喜乐
      </div>
      <button class="btn">查看更多</button>
      <div class="title">
        <h2>热门景点 <span>Hot spots</span></h2>
      </div>
      <div class="list">
        <div class="item">
          <ul>
            <li v-for="(item, i) in 3" :key="i">
              <img class="imgs" :src="$imgsrc + 'scenery.png'" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 加入我们 -->
    <div class="add">
      <div class="title">
        <h2>加入我们 <span>Hot spots</span></h2>
      </div>
      <div class="content">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'add.png)' }"
        ></div>
        <div class="info">
          <p class="msg">
            Aircraf Ttravel
            诚挚邀请有想法的年轻人，来本公司共同创造一个美好的未来
          </p>
          <p class="name">公司团建</p>
          <p class="msg">
            要为各大公司团建需要制定旅行计划请致电我们，也欢迎更多人联系
          </p>
          <button class="btn">联系我们</button>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer>
      <div class="content">
        <div class="logo">
          <i class="iconfont">&#xe683;</i>
          <span class="name">Aircraft</span>
        </div>
        <div class="nav">
          <ul>
            <li>首页</li>
            <li>特价旅游</li>
            <li>跟团游</li>
            <li>最新活动</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div class="icon">
          <ul>
            <li><i class="iconfont">&#xe659;</i></li>
            <li><i class="iconfont">&#xe600;</i></li>
            <li><i class="iconfont">&#xe67a;</i></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped lang="less">
.travel {
  font-family: PingFang SC, -apple-system, BlinkMacSystemFont, Tahoma, Arial,
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  margin: 0 auto;
  min-width: 1200px;
  overflow: auto;
  background-color: #f0f2f5;
  //头部
  .banner {
    // background-image: url("http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/assetsPage/t_bg.png");
    // background-position: 50%;
    // background-size: cover;
    background-color: #087075;
    width: 100%;
    .top {
      margin: 0 auto;
      height: 80px;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        color: #fff;
        font-size: 28px;
        .iconfont {
          font-size: 28px;
        }
        .name {
          font-weight: 500;
        }
      }
      .nav {
        ul {
          color: #fff;
          overflow: hidden;
          li {
            float: left;
            margin-right: 56px;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
    }
    // 头部图片中的信息
    .introduce {
      color: #fff;
      width: 80%;
      margin: 0 auto;
      .name {
        font-size: 80px;
        font-weight: 500;
        line-height: 112px;
      }
      .msg {
        font-size: 20px;
        line-height: 42px;
        max-width: 650px;
      }
      button {
        color: #fff;
        background-color: #264eb7;
        padding: 28px 94px;
        font-size: 20px;
        margin: 100px 0;
      }
    }
  }
  //   热门景点
  .hot {
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    position: relative;
    .tips {
      color: #838383;
      line-height: 25px;
      font-size: 18px;
      position: absolute;
      top: 18px;
      right: 20px;
      width: 60%;
      max-width: 650px;
    }
    .btn {
      position: absolute;
      background-color: #264eb7;
      width: 64px;
      height: 64px;
      bottom: 0px;
      left: calc(100% / 2.5 + 100px);
      .iconfont {
        color: #fff;
        font-size: 24px;
      }
    }
    .title {
      margin-bottom: 100px;
      h2 {
        font-size: 36px;
        color: #383838;
        font-weight: 500;
        span {
          font-size: 18px;
        }
      }
    }
    .list {
      white-space: nowrap;
      overflow-x: hidden;
      box-sizing: border-box;
      .item {
        min-width: 300px;
        width: calc(100% / 3 - 100px);
        display: inline-block;
        margin-right: 100px;
        vertical-align: top;
        .imgs {
          width: 100%;
        }
        .info {
          padding: 0 20px;
          .name {
            font-size: 18px;
            color: #383838;
            margin: 22px 0 18px 0;
            span {
              font-size: 12px;
              color: #b1b1b1;
            }
          }
          .msg {
            font-size: 12px;
            line-height: 24px;
            color: #c6c6c6;
            white-space: normal;
            padding-bottom: 10px;
          }
        }
      }
      .one {
        box-shadow: 0px 2px 6px 2px rgba(177, 174, 174, 0.2);
        background-color: #fff;
        width: calc(100% / 2.5);
        position: relative;
      }
    }
  }
  //   推荐
  .recommend {
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    position: relative;
    overflow-y: hidden;
    .title {
      margin-bottom: 120px;
      h2 {
        font-size: 36px;
        color: #383838;
        font-weight: 500;
        span {
          font-size: 18px;
        }
      }
    }
    .tips {
      color: #b1b1b1;
      font-size: 18px;
      line-height: 25px;
      width: 70%;
      max-width: 750px;
      position: absolute;
      top: 94px;
      left: 0;
    }
    .btn {
      padding: 20px 60px;
      color: #fff;
      font-size: 20px;
      background-color: #264eb7;
      position: absolute;
      right: 0;
      top: 24px;
    }
    .list {
      margin-bottom: 20px;
      padding-top: 52px;
      .item {
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            width: calc(100% / 4);
            .imgs {
              width: 100%;
            }
          }
        }
      }
    }
  }
  //   加入我们
  .add {
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    position: relative;
    overflow-y: hidden;
    margin-bottom: 100px;

    .title {
      margin-bottom: 120px;
      h2 {
        font-size: 36px;
        color: #383838;
        font-weight: 500;
        span {
          font-size: 18px;
        }
      }
    }
    .content {
      color: #383838;
      display: flex;
      box-sizing: border-box;
      align-items: flex-end;
      .imgs {
        margin-right: 110px;
        width: calc(50% - 110px);
        height: 332px;
        background-size: cover;
        background-position: 50%;
        background-color: #ddd;
        display: inline-block;
      }
      .info {
        flex: 1;
        display: inline-block;
        width: 50%;
        .msg {
          font-size: 20px;
          color: #838383;
        }
        .name {
          font-size: 36px;
          font-weight: 500;
          margin: 50px 0 16px;
        }
        .btn {
          padding: 20px 60px;
          color: #fff;
          font-size: 20px;
          background-color: #264eb7;
          margin-top: 80px;
        }
      }
    }
  }
  // 底部
  footer {
    background-color: #264eb7;
    width: 100%;
    .content {
      width: 80%;
      margin: 0 auto;
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      .logo {
        color: #fff;
        font-size: 28px;
        .iconfont {
          font-size: 28px;
        }
        .name {
          font-weight: 500;
        }
      }
      .nav {
        ul {
          color: #fff;
          overflow: hidden;
          li {
            float: left;
            margin-right: 56px;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
      .icon {
        ul {
          color: #fff;
          overflow: hidden;
          li {
            float: left;
            margin-right: 50px;
            color: #fff;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>