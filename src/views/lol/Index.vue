<template>
  <div class="lol">
    <header>
      <!-- 头部显示 -->
      <div class="bg" :style="{backgroundImage:'url('+$imgsrc+'0.jpg)'}">
        <div class="top">
          <div class="top_width">
            <img class="logo" :src="$imgsrc+'logo-public.png'" />
            <ul class="navs">
              <li>
                <p class="nav_title">游戏资料</p>
                <p class="nav_subtitle">GAME INFO</p>
              </li>
              <li v-for="(nav,i) in 4" :key="i">
                <p class="nav_title">商城/合作</p>
                <p class="nav_subtitle">STORE</p>
              </li>
            </ul>
            <ul class="top_right">
              <li class="icon"><i class="iconfont">&#xe61d;</i></li>
              <li class="icon"><i class="iconfont">&#xe600;</i></li>
              <li><img :src="$imgsrc+'default.png'"><span class="login">亲爱的召唤师，欢迎登陆</span></li>
            </ul>
          </div>
        </div>
        <!-- 查看详情按钮 -->
        <button class="btn">查看详情</button>
      </div>
      <!-- hover nav显示的子导航栏 -->
      <div class="hover_nav">
        <div class="hover_width">
          <div class="list">
            <ul v-for="(ul,i) in 5 " :key="i">
              <li v-for="(li,j) in 7 " :key="j">游戏下载</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- 轮播图与新闻 -->
    <div class="wrap1">
      <div class="swipe">
        <swiper :options="swipeOptions">
          <swiper-slide v-for="(item, i) in swipeList" :key="i"><img :src="item.src" /></swiper-slide>
        </swiper>
        <div class="tabs">
          <span :class="['tab',{selected:selactedNum==0}]">精选限定皮肤限时销售</span>
          <span :class="['tab',{selected:selactedNum==1}]">2021幸运一夏</span>
          <span :class="['tab',{selected:selactedNum==2}]">LPL今日赛程</span>
          <span :class="['tab',{selected:selactedNum==3}]">S11城市发布</span>
          <span :class="['tab',{selected:selactedNum==4}]">阿丽卡的黑金商店</span>
        </div>
      </div>
      <div class="news">
        <div class="news_tab">
          <span class="tabs">综合</span>
          <span class="tabs">公告</span>
          <span class="tabs">赛事</span>
          <span class="tabs">战略</span>
          <span class="tabs">社区</span>
        </div>
        <div class="list">
          <ul>
            <li class="first">2021英雄联盟全球总决赛举办城市公布</li>
            <li class="common">
              <div class="title"><span class="type type_news">新闻</span>6月19日免费英雄更新公告</div><span class="time">05-19</span>
            </li>
            <li class="common">
              <div class="title"><span class="type type_video">视频</span>2021年6月11日 不停机更新公告</div><span class="time">05-19</span>
            </li>
            <li class="common">
              <div class="title"><span class="type type_notice">公告</span>6月19日免费英雄更新公告</div><span class="time">05-19</span>
            </li>
            <li class="common">
              <div class="title"><span class="type type_game">赛事</span>6月19日免费英雄更新公告</div><span class="time">05-19</span>
            </li>
            <li class="common">
              <div class="title"><span class="type type_teach">教学</span>弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！版本最强吃鸡率套路恶魔九五</div><span class="time">05-19</span>
            </li>
            <li class="common">
              <div class="title"><span class="type type_game">赛事</span>6月19日免费英雄更新公告</div><span class="time">05-19</span>
            </li>
          </ul>
          <div class="more">阅读更多</div>
        </div>
      </div>
    </div>
    <!-- 热门活动和下载游戏 -->
    <div class="act">
      <div class="act_left">
        <div class="title">
          <div class="name">
            <h2>热门活动</h2>
            <div class="tabs">
              <ul>
                <li>正在进行</li>
                <li>商城特惠</li>
                <li>长期活动</li>
              </ul>
              <div class="more">更多</div>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="item" v-for="(item, i) in 4" :key="i">
            <div class="imgs" :style="{backgroundImage:'url('+$imgsrc+'hot_item.jpg)'}"></div>
            <p class="item_name">寻找破败的起源</p>
            <p class="item_time">长期活动</p>
          </div>
        </div>
      </div>
      <div class="act_right">
        <div class="row">
          <div class="row_big" :style="{backgroundImage:'url('+$imgsrc+'pic-download.png)'}"></div>
          <div class="row_right">
            <div class="imgs" :style="{backgroundImage:'url('+$imgsrc+'pic-download.png)'}"></div>
            <div class="imgs" :style="{backgroundImage:'url('+$imgsrc+'pic-download.png)'}"></div>
          </div>
        </div>
        <ul>
          <li v-for="(item,i) in 8" :key="i">
            <i class="iconfont">&#xe605;</i>
            游戏资料
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.lol {
  font: 12px/1.5 tahoma, "\5FAE\8F6F\96C5\9ED1", sans-serif;
  min-width: 1380px;
  margin: 0 auto;
  overflow-anchor: none; //滚动事件使页面高度或宽度发生了改变，滚动条指向的内容也会随之而变。禁止滚动锚定。
  background-color: #eee;
  *zoom: 1; //HACK写法,代表ie下才有会的样式效果
  header {
    width: 100%;
    .bg {
      height: 720px;
      background-position: bottom;
      background-size: cover;
      position: relative;
      .top {
        background: -webkit-linear-gradient(to bottom, black, transparent);
        background: linear-gradient(to bottom, black, transparent);
        height: 78px;
        box-sizing: border-box;
        position: relative;
        z-index: 2;
        .top_width {
          min-width: 1230px;
          max-width: 1358px;
          margin: 0 auto;
          position: relative;

          .logo {
            width: 167px;
            height: 60px;
            display: inline-block;
            vertical-align: middle;
          }
          .navs {
            display: inline-block;
            vertical-align: middle;
            box-sizing: border-box;
            padding-top: 16px;
            width: 55%;
            height: 78px;
            li {
              cursor: pointer;
              float: left;
              //   width: 150px;
              width: 20%;
              height: 78px;
              text-align: center;
              .nav_title {
                font-size: 18px;
                color: #fff;
              }
              .nav_subtitle {
                color: #cdbe91;
              }
            }
            li:after {
              content: "";
              display: block;
              height: 0;
              visibility: hidden;
              clear: both;
            }
          }
          .navs:hover .hover_nav {
            display: block;
          }
          .top_right {
            position: absolute;
            right: 0;
            top: 0;
            li {
              float: left;
              height: 78px;
              cursor: pointer;
              .iconfont {
                color: #cdbe91;
                font-size: 20px;
                width: 40px;
              }
              img {
                border-radius: 50%;
                height: 48px;
                width: 48px;
                margin-right: 10px;
              }
              .login {
                color: #fefefe;
                font-size: 16px;
                line-height: 78px;
              }
            }
            .icon {
              width: 54px;
              line-height: 78px;
            }
            li:after {
              content: "";
              clear: both;
              visibility: hidden;
              height: 0;
              display: block;
            }
          }
        }
      }
      .btn {
        display: block;
        position: absolute;
        z-index: 1;
        left: 50%;
        margin-left: -77px;
        bottom: 32px;
        width: 160px;
        height: 40px;
        border: 1px solid #c89b2f;
        color: #c89b2f;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
    .hover_nav {
      display: none;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 80px 0 40px 0;
      z-index: 1;
      .hover_width {
        width: 100%;
        max-width: 1358px;
        min-width: 1230px;
        height: auto;
        margin: 0 auto;
        .list {
          width: 55%;
          margin-left: 162px;
          ul {
            width: 20%;
            display: inline-block;

            li {
              color: #e1e1e1;
              font-size: 14px;
              line-height: 30px;
              height: 30px;
              cursor: pointer;
              text-align: center;
            }
            li:hover {
              color: #cdbe91;
            }
          }
        }
      }
    }
  }
  //   轮播图与新闻中心
  .wrap1 {
    width: 1358px;
    height: auto;
    margin: 0 auto;
    padding: 40px 0 80px 0;
    .swipe {
      width: 820px;
      height: 380px;
      display: inline-block;
      vertical-align: top;
      /deep/.swiper-container {
        // width: 820px;
        width: 780px;
        height: 340px;
      }
      .tabs {
        box-sizing: border-box;
        width: 780px;
        margin: 0 auto;
        .tab {
          width: 20%;
          height: 40px;
          box-sizing: border-box;
          background-color: #e3e2e2;
          font-size: 14px;
          text-align: center;
          line-height: 40px;
          color: #424242;
          display: inline-block;
        }
        .selected {
          color: #ab8e66;
          background-color: #f7f6f6;
          border-bottom: 2px #cea861 solid;
        }
      }
    }
    .news {
      width: 496px;
      height: 380px;
      overflow: hidden;
      display: inline-block;
      font-size: 0;
      .news_tab {
        width: 496px;
        height: 35px;
        box-sizing: border-box;
        border-bottom: 1px solid #e0e2e2;
        display: flex;
        justify-content: space-between;
        .tabs {
          font-size: 18px;
          cursor: pointer;
        }
        .tabs:hover {
          font-weight: 700;
          color: #1da6ba;
          border-bottom: 2px solid #1da6ba;
        }
      }
      .list {
        ul {
          .first {
            display: inline-block;
            background-position: 0 -458px;
            width: 496px;
            height: 59px;
            overflow: hidden;
            line-height: 59px;
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            box-sizing: border-box;
            padding: 0 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #0da0b4;
          }
          .common {
            font-size: 14px;
            width: 100%;
            height: 40px;
            line-height: 40px;

            border-top: 1px #e0e2e2 solid;
            display: flex;
            justify-content: space-between;
            .title {
              overflow: hidden;
              box-sizing: border-box;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 460px;
            }
            .type {
              vertical-align: middle;
              padding: 2px 4px;
              box-sizing: border-box;
              font-size: 12px;
              border: 1px #69c5d2 solid;
              color: #1da6ba;
              line-height: 18px;
              text-align: center;
              margin-right: 10px;
            }
            .type_news,
            .type_notice {
              border: 1px solid #c5ab86;
              color: #bb9a6c;
            }
            .type_video {
              color: #e9852d;
              border: 1px solid #e9852d;
            }
            .type_game {
              color: #6388c5;
              border: 1px solid #6388c5;
            }
            .type_teach {
              color: #4ba36a;
              border: 1px solid #4ba36a;
            }
          }
        }
        .more {
          background-color: #e3e2e2;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
          color: #676767;
          cursor: pointer;
        }
        .more:hover {
          color: #0da0b4;
        }
      }
    }
  }
  //   热门游戏和下载游戏
  .act {
    margin: 0 auto;
    // width: 1358px;
    width: 1408px;
    .act_left {
      width: 820px;
      height: 335px;
      display: inline-block;
      vertical-align: top;
      margin-right: 50px;
      .title {
        height: 35px;
        margin-bottom: 20px;
        .name {
          h2 {
            font-size: 24px;
            font-weight: 400;
            padding-left: 10px;
            border-left: 5px solid #1da6ba;
            float: left;
          }
          h2:after {
            content: "";
            display: block;
            height: 0;
            visibility: hidden;
          }
          .tabs {
            border-bottom: 1px solid #e0e2e2;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            height: 35px;

            ul {
              overflow: hidden;
              vertical-align: text-bottom;
              li {
                font-size: 16px;
                float: left;
                width: 100px;
                height: 100%;
                text-align: center;
                cursor: pointer;
              }
              li:hover {
                color: #1da6ba;
                font-size: 18px;
              }
            }
          }
          .more {
          }
        }
      }
      .list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .item {
          width: 193px;
          height: 278px;
          background-color: #fff;
          box-sizing: border-box;
          cursor: pointer;
          .imgs {
            background-position: 50%;
            background-size: cover;
            width: 100%;
            height: 207px;
          }
          .item_name {
            padding: 6px 10px 4px 10px;
            font-size: 14px;
          }
          .item_time {
            font-size: 12px;
            padding: 6px 10px 4px 10px;

            color: #1da6ba;
          }
        }
      }
    }
    .act_right {
      width: 496px;
      height: 335px;
      display: inline-block;
      .row {
        display: flex;
        justify-content: space-between;
        .row_big {
          width: 366px;
          height: 188px;
          background-size: cover;
          background-position: 50%;
          display: inline-block;
        }
        .row_right {
          display: inline-block;
          .imgs {
            width: 118px;
            height: 84px;
            background-size: cover;
            background-position: 50%;
          }
          .imgs:last-child {
            margin-top: 19px;
          }
        }
      }
      ul {
        li {
          width: 112px;
          height: 68px;
          background-color: #fff;
          float: left;
          color: #424242;
          text-align: center;
          line-height: 68px;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Navigation, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swipeList: [
        { src: this.$imgsrc + "lol_swipe0.jpeg" },
        { src: this.$imgsrc + "lol_swipe1.jpeg" },
        { src: this.$imgsrc + "lol_swipe2.jpeg" },
        { src: this.$imgsrc + "lol_swipe3.jpeg" },
        { src: this.$imgsrc + "lol_swipe4.jpeg" },
      ],
      selactedNum: 0,
      swipeOptions: {
        slidesPerView: "auto", //默认1, 同时显示的slides数量,auto 代表根据轮播图的宽度排列
        grabCursor: true,
        centeredSlides: true,
        autoplay: true,
        loop: true, //循环滚动
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChange: function () {
            // this.selactedNum = this.activeIndex / 2;
            // console.log(this.selactedNum);
          },
        },
      },
      newsList: [
        { type: "news", data: "6月19日免费英雄更新公告", time: "03-19" },
        {
          type: "video",
          data: "盲僧万用开局路线公式！青铜学了玩的像钻石",
          time: "05-12",
        },
        { type: "notice", data: "6月19日免费英雄更新公告", time: "05-19" },
        {
          type: "teach",
          data: "弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！",
          time: "05-09",
        },
        { type: "game", data: "6月19日免费英雄更新公告", time: "05-19" },
        { type: "news", data: "6月19日免费英雄更新公告", time: "06-11" },
        { type: "notice", data: "公告公告公告", time: "01-22" },
        { type: "news", data: "2021幸运一夏", time: "03-19" },
        { type: "teach", data: "最全英雄教学", time: "05-29" },
        { type: "news", data: "6月19日免费英雄更新公告", time: "03-19" },
        {
          type: "video",
          data: "盲僧万用开局路线公式！青铜学了玩的像钻石",
          time: "05-12",
        },
        { type: "notice", data: "6月19日免费英雄更新公告", time: "05-19" },
        {
          type: "teach",
          data: "弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！",
          time: "05-09",
        },
        { type: "game", data: "6月19日免费英雄更新公告", time: "05-19" },
        { type: "news", data: "6月19日免费英雄更新公告", time: "06-11" },
        { type: "notice", data: "公告公告公告", time: "01-22" },
        { type: "news", data: "2021幸运一夏", time: "03-19" },
        { type: "teach", data: "最全英雄教学", time: "05-29" },
      ],
    };
  },
  methods: {
    onSwiper(num) {
      console.log("哈哈哈");
      console.log(num);
    },
    chage(num) {
      console.log("slideChange");
      console.log(num);
    },
  },
};
</script>