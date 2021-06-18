<template>
  <div class="lol">
    <header>
      <!-- 头部显示 -->
      <div class="bg" :style="{backgroundImage:'url('+$imgsrc+'0.jpg)'}">
        <div class="top">
          <div class="top_width">
            <img class="logo" :src="$imgsrc+'logo-public.png'" />
            <ul class="navs" @mouseover="showNav">
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
      <div :class="['hover_nav',{is_show:show}]" @mouseout="removeNav">
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
          <span :class="['tab',{selected:selactedNum==0}]" @mouseover="tabSwipe(0)">精选限定皮肤限时销售</span>
          <span :class="['tab',{selected:selactedNum==1}]" @mouseover="tabSwipe(1)">2021幸运一夏</span>
          <span :class="['tab',{selected:selactedNum==2}]" @mouseover="tabSwipe(2)">LPL今日赛程</span>
          <span :class="['tab',{selected:selactedNum==3}]" @mouseover="tabSwipe(3)">S11城市发布</span>
          <span :class="['tab',{selected:selactedNum==4}]" @mouseover="tabSwipe(4)">阿丽卡的黑金商店</span>
        </div>
      </div>
      <div class="news">
        <div class="news_tab">
          <span :class="['tabs',{selected:newTab==0}]" @mouseover="tabNew(0)">综合</span>
          <span :class="['tabs',{selected:newTab==1}]" @mouseover="tabNew(1)">公告</span>
          <span :class="['tabs',{selected:newTab==2}]" @mouseover="tabNew(2)">赛事</span>
          <span :class="['tabs',{selected:newTab==3}]" @mouseover="tabNew(3)">战略</span>
          <span :class="['tabs',{selected:newTab==4}]" @mouseover="tabNew(4)">社区</span>
        </div>
        <div class="list">
          <ul>
            <li class="first">2021英雄联盟全球总决赛举办城市公布</li>
            <li class="common" v-for="(item,i) in allList" :key="i" v-show="newTab==0">
              <div class="title"><span :class="['type', `type_${item.type}`]">{{item.typaName}}</span>{{item.data}}</div><span class="time">{{item.timeS}}</span>
            </li>
            <li class="common" v-for="(item,i) in newList" :key="i" v-show="newTab==1">
              <div class="title"><span :class="['type', `type_${item.type}`]">{{item.typaName}}</span>{{item.data}}</div><span class="time">{{item.timeS}}</span>
            </li>
            <li class="common" v-for="(item,i) in videoList" :key="i" v-show="newTab==2">
              <div class="title"><span :class="['type', `type_${item.type}`]">{{item.typaName}}</span>{{item.data}}</div><span class="time">{{item.timeS}}</span>
            </li>
            <li class="common" v-for="(item,i) in teachList" :key="i" v-show="newTab==3">
              <div class="title"><span :class="['type', `type_${item.type}`]">{{item.typaName}}</span>{{item.data}}</div><span class="time">{{item.timeS}}</span>
            </li>
            <li class="common" v-for="(item,i) in noticeList" :key="i" v-show="newTab==4">
              <div class="title"><span :class="['type', `type_${item.type}`]">{{item.typaName}}</span>{{item.data}}</div><span class="time">{{item.timeS}}</span>
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
    <!-- 更新详情区 -->
    <div class="update">
      <div class="update_left">
        <div class="item one" :style="{backgroundImage:'url('+$imgsrc+'update1.png)'}">
          <div class="cover">
            <span class="tip">英雄重做</span>
            <p class="title">祖安狂人蒙多重做归来</p>
            <p class="msg">英雄重做重做蒙多专题站现已上线！</p>
          </div>
          <div class="one_hover">
            <span class="tip">英雄重做重做蒙多专题站现已上线</span>
            <span class="btn" :style="{backgroundImage:'url('+$imgsrc+'btn_bg.png)'}">查看详情</span>
          </div>
        </div>
        <div class="item two" :style="{backgroundImage:'url('+$imgsrc+'update2.jpg)'}">
          <div class="cover">
            <span class="tip">泳池派对</span>
            <p class="title">泳池派对</p>
            <p class="msg">心随海浪 畅享阳光</p>
          </div>
        </div>
      </div>
      <div class="update_right">
        <div class="version">
          <div class="one" :style="{backgroundImage:'url('+$imgsrc+'lol_ver_one.jpg)'}"> </div>
          <div class="two" :style="{backgroundImage:'url('+$imgsrc+'lol_ver_two.jpg)'}"> </div>
        </div>
        <div class="version right">
          <div class="hero" :style="{backgroundImage:'url('+$imgsrc+'lol_ver.png)'}">
            <div class="hero_hover">
              <div class="info">
                <p class="title">英雄剖析：格温</p>
                <p class="msg">你是否还记得儿时最喜欢的玩具？</p>
              </div>
            </div>
          </div>
          <div class="free" :style="{backgroundImage:'url('+$imgsrc+'ver_btn_bg.png)'}">周免</div>
        </div>
      </div>
    </div>
    <!-- 第二个hover区 -->
    <div class="two_hover">
      <!-- <div class="video" :style="{backgroundImage:'url('+$imgsrc+'update1.png)'}"></div>
            <div class="message">
              <div class="title">
                <p class="name">泳池派对</p>
                <p class="msg">心随海浪 畅享阳光</p>
              </div>
              <button class="btn">查看详情</button>
            </div> -->
      <ul>
        <li v-for="(item ,i ) in 7" :key="i">
          <div class="list" :style="{backgroundImage:'url('+$imgsrc+'hover_lol.jpg)'}">
            <p class="title">终极威胁 捍卫之战</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 视频区 -->
    <div class="video">
      <div class="video_bg">
        <div class="video_left">
          <div class="top_tab">
            <h2>最新视频</h2>
            <div class="tabs">
              <ul>
                <li>推荐</li>
                <li>官方</li>
                <li>娱乐</li>
                <li>赛事</li>
                <li>云顶之弈</li>
                <li>教学</li>
              </ul>
              <div class="other">
                <span class="next">下一页<i class="iconfont">&#xe60e;</i></span>
                <span class="more">更多</span>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="item" v-for="(item ,i ) in 8" :key="i">
              <img :src="$imgsrc+'lol_ver_two_hover.jpg'">
              <p class="title">凯隐的大躲一个控制，就是我们反杀的机会，骚年快锻炼你的手速吧</p>
              <div class="play">
                <span class="play_times">20次播放</span>
                <span class="play_time">39分钟前</span>
              </div>
            </div>
          </div>
        </div>
        <div class="video_right">
          <div class="top_tab">
            <h2>热门专辑</h2>
            <div class="tabs">
              <ul>
                <li>周一</li>
                <li>周二</li>
                <li>周三</li>
                <li>周四</li>
                <li>周五</li>
                <li>周六</li>
                <li>周日</li>

              </ul>
            </div>
          </div>
          <div class="list">
            <div class="item" v-for="(item,i) in 3" :key="i">
              <img class="photo" :src="$imgsrc+'video_swipe.png'">
              <p class="msg">巅峰top5是一档精彩英雄联盟赛事集锦节目，为广大玩家带来每日LPL比赛精彩镜头</p>
              <div class="user">
                <div class="face" :style="{backgroundImage:'url('+$imgsrc+'user.jpg)'}"></div>
                <span class="name">LOL解说小鱼</span>
              </div>
            </div>
          </div>
          <button class="btn" :style="{backgroundImage:'url('+$imgsrc+'index-spr.png)'}">前往视频中心</button>
        </div>
      </div>
    </div>
    <!-- 创作中心 -->
    <div class="create">
      <div class="content">
        <div class="create_left">
          <div class="title">
            <h2>FANART创作馆</h2>
            <span>更多</span>
          </div>
          <ul>
            <li :style="{backgroundImage:'url('+$imgsrc+'lol_create.jpg'}" v-for="(item,i ) in 8" :key="i">
              <div class="cover">
                <p class="list_tite">画了一只阿狸头像</p>
                <div class="info">
                  <span class="author">白鲨糖白</span>
                  <span class="fabulous" tabindex="1"><i class="iconfont">&#xe697;</i>123</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="create_right">
          <img class="create_left1" :src="$imgsrc+'create_right1.png'">
          <div class="img_list">
            <img :src="$imgsrc+'lol_list.png'" v-for="(item,i) in 3" :key="i">
            <div class="more" :style="{backgroundImage:'url('+$imgsrc+'ver_btn_bg.png)'}">合作媒体</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚版权信息 -->
    <footer>
      <div class="content">
        <div class="logo" :style="{backgroundImage:'url('+$imgsrc+'topfoot-spr.png)'}"></div>
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
              clear: both;
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
        cursor: pointer;
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
    .is_show {
      display: block;
    }
  }
  //   轮播图与新闻中心
  .wrap1 {
    width: 1358px;
    height: auto;
    margin: 0 auto;
    padding: 40px 0 80px 0;
    position: relative;

    .swipe {
      width: 820px;
      height: 380px;
      display: inline-block;
      vertical-align: top;
      /deep/.swiper-container {
        width: 820px;
        // width: 780px;
        height: 340px;
      }
      .tabs {
        box-sizing: border-box;
        width: 820px;
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
      position: absolute;
      right: 0;
      top: 40px;
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
        .selected {
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
              cursor: pointer;
            }
            .title:hover {
              color: #0da0b4;
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
    width: 1358px;
    position: relative;
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
            clear: both;
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
      position: absolute;
      right: 0;
      top: 0;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        li {
          width: 112px;
          height: 68px;
          background-color: #fff;
          // float: left;
          color: #424242;
          text-align: center;
          line-height: 68px;
          margin-top: 10px;
          cursor: pointer;
          // margin-right: 10px;
        }
      }
    }
  }
  // 更新详情区
  .update {
    position: relative;
    width: 1358px;
    margin: 0 auto;
    height: 254px;
    margin-top: 50px;
    .update_left {
      width: 820px;
      height: 254px;
      .item {
        width: 402px;
        height: 254px;
        background-position: 50%;
        background-size: cover;
        cursor: pointer;
        display: inline-block;
        .cover {
          width: 100%;
          height: 100%;
          position: relative;
          .tip {
            position: absolute;
            top: 10px;
            left: 16px;
            background-color: #000;
            color: #cdbe91;
          }
          .title {
            font-weight: 700;
            font-size: 16px;
            color: #cdbe91;
            position: absolute;
            bottom: 36px;
            left: 16px;
          }
          .msg {
            position: absolute;
            bottom: 12px;
            left: 16px;
            font-size: 14px;
            color: #fff;
          }
        }
        .one_hover {
          width: 402px;
          height: 254px;
          background-color: rgba(0, 0, 0, 0.5);
          position: relative;
          display: none;
          .tip {
            position: absolute;
            top: 20px;
            left: 16px;
            font-weight: 700;
            font-size: 16px;
            color: #cdbe91;
          }
          .btn {
            cursor: pointer;
            position: absolute;
            bottom: 18px;
            left: 25px;
            color: #ffdb8b;
            line-height: 42px;
            text-align: center;
            width: 154px;
            height: 42px;
            background-position: 50%;
            background-size: cover;
          }
        }
      }
      .two {
        float: right;
      }
      .two::after {
        content: "";
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
      }
      .one:hover .cover {
        display: none;
      }
      .one:hover .one_hover {
        display: block;
      }
    }
    .update_right {
      position: absolute;
      right: 0;
      top: 0;
      width: 496px;
      height: 254px;

      .version {
        width: 240px;
        height: 100%;
        display: inline-block;
        .one,
        .two {
          width: 240px;
          height: 120px;
          cursor: pointer;
        }
        .two {
          margin-top: 14px;
        }
        .two:hover {
          background-image: url("http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/assetsPage/lol_ver_two_hover.jpg");
        }
      }
      .right {
        margin-left: 16px;
        vertical-align: top;
        .hero {
          width: 239px;
          height: 180px;
          background-size: cover;
          background-position: 50%;
          cursor: pointer;
        }
        .hero_hover {
          background-color: rgba(0, 0, 0, 0.5);
          text-align: center;
          height: 180px;
          display: none;
          .info {
            position: absolute;
            top: 160px;
            margin-top: -90px;
            text-align: center;
            width: 239px;
            .title {
              font-weight: 400;
              font-size: 16px;
              color: #cdbe91;
            }
            .msg {
              font-size: 12px;
              color: #9d9c9c;
            }
          }
        }
        .hero:hover .hero_hover {
          display: block;
        }
        .free {
          width: 239px;
          height: 58px;
          font-size: 16px;
          line-height: 58px;
          text-align: center;
          margin-top: 16px;
          color: #fff;
          cursor: pointer;
        }
      }
      .right::after {
        content: "";
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
      }
    }
  }
  // 更新区的第二个hover
  .two_hover {
    width: 1358px;
    height: 117px;
    margin: 20px auto;
    -webkit-transition: height 0.3s, margin-top 0.3s;
    transition: height 0.3s, margin-top 0.3s;
    will-change: height;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        .list {
          width: 185px;
          height: 117px;
          position: relative;
          background-size: cover;
          background-position: 50%;

          .title {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.5);
            color: #ffdb8b;
          }
        }
        .list:hover {
          background-size: 120%;
        }
      }
    }
  }
  // 视频区
  .video {
    background-color: #e3e2e2;
    padding: 64px 0 66px 0;
    width: 100%;
    min-width: 1358px;
    .video_bg {
      position: relative;
      width: 1358px;
      height: auto;
      margin: 0 auto;
      .video_left {
        width: 820px;
        height: 463px;
        display: inline-block;
        vertical-align: top;
        .top_tab {
          height: 35px;
          width: 100%;
          h2 {
            color: #0b0b0b;
            font-weight: 400;
            font-size: 24px;
            padding-left: 10px;
            position: relative;
            display: inline-block;
          }
          h2:after {
            content: "";
            height: 26px;
            width: 3px;
            position: absolute;
            top: 6px;
            left: 0;
            background-color: #1da6ba;
          }
          .tabs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #d6d7d8;
            width: 700px;
            float: right;
            height: 30px;
            ul {
              li {
                margin-right: 40px;
                font-size: 16px;
                color: #676767;
                float: left;
                cursor: pointer;
              }
              li:after {
                content: "";
                display: block;
                visibility: hidden;
                clear: both;
                height: 0;
              }
            }
            .other {
              font-size: 12px;
              color: #7ea1a6;
              .next {
                padding-right: 16px;
                cursor: pointer;
                .iconfont {
                  font-size: 10px;
                  margin-left: 4px;
                }
              }
              .more {
                padding-left: 16px;
                position: relative;
                cursor: pointer;
              }
              .more:hover {
                color: #1da6ba;
              }
              .more:after {
                content: "";
                height: 14px;
                width: 1px;
                background-color: #cacbcc;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }
        }
        .list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .item {
            width: 193px;
            height: 185px;
            position: relative;
            box-sizing: border-box;
            margin-bottom: 25px;
            overflow: hidden;
            img {
              width: 193px;
              height: 107px;
            }
            .title {
              line-height: 21px;
              color: #424242;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              padding: 0 10px;
              box-sizing: border-box;
              margin-top: 8px;
            }
            .title:hover {
              color: #1da6ba;
            }
            .play {
              margin-top: 12px;
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              color: #919091;
              padding: 0 10px;
              box-sizing: border-box;

              .play_times {
              }
              .play_time {
              }
            }
          }
        }
      }
      .video_right {
        width: 496px;
        height: 463px;
        display: inline-block;
        margin-left: 42px;
        vertical-align: top;
        .top_tab {
          height: 35px;
          width: 100%;
          h2 {
            color: #0b0b0b;
            font-weight: 400;
            font-size: 24px;
            padding-left: 10px;
            position: relative;
            display: inline-block;
          }
          h2:after {
            content: "";
            height: 26px;
            width: 3px;
            position: absolute;
            top: 6px;
            left: 0;
            background-color: #1da6ba;
          }
          .tabs {
            border-bottom: 1px solid #d6d7d8;
            width: 367px;
            display: inline-block;
            height: 30px;
            margin-left: 20px;
            vertical-align: bottom;
            ul {
              display: flex;
              justify-content: space-between;
              text-align: center;
              li {
                margin-right: 14px;
                font-size: 16px;
                color: #676767;
                cursor: pointer;
              }
            }
          }
        }
      }
      .video_right::after {
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
        height: 0;
      }
      .list {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        .item {
          width: 156px;
          cursor: pointer;
          .photo {
            width: 156px;
            height: 212px;
          }
          .msg {
            margin: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            color: #919091;
            font-size: 14px;
            padding: 0 5px;
            line-height: 21px;
          }
          .msg:hover {
            color: #1da6ba;
          }
          .user {
            height: 30px;
            padding: 0 5px;
            .face {
              width: 30px;
              height: 30px;
              display: inline-block;
              border-radius: 50%;
              background-size: cover;
              background-position: 50%;
              background-color: #ddd;
              vertical-align: middle;
            }
            .name {
              color: #919091;
              line-height: 30px;
              font-size: 12px;
              margin-left: 6px;
            }
            .name:hover {
              color: #1da6ba;
            }
          }
        }
      }
      .btn {
        box-sizing: border-box;
        margin-top: 40px;
        width: 506px;
        height: 50px;
        font-size: 16px;
        cursor: pointer;
        color: #ab8e66;
        background-position: 0 -522px;
        background-color: transparent;
        background-size: 638px 572px;
        background-repeat: no-repeat;
      }
    }
  }
  // 创作区
  .create {
    width: 100%;
    min-width: 1358px;
    padding-top: 52px;
    .content {
      width: 1358px;
      height: 532px;
      margin: 0 auto;
      .create_left {
        width: 820px;
        display: inline-block;
        vertical-align: top;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 9px;
          h2 {
            color: #0b0b0b;
            font-weight: 400;
            font-size: 24px;
            padding-left: 10px;
            position: relative;
            display: inline-block;
          }
          h2:after {
            content: "";
            height: 26px;
            width: 3px;
            position: absolute;
            top: 6px;
            left: 0;
            background-color: #1da6ba;
          }
          span {
            position: relative;
            cursor: pointer;
            font-size: 12px;
            color: #7ea1a6;
          }
          span:hover {
            color: #1da6ba;
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            width: 192px;
            height: 192px;
            position: relative;
            cursor: pointer;
            margin-top: 12px;
            background-position: 50%;
            background-size: cover;
            .cover {
              display: none;
              position: absolute;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 0 8px 6px 10px;
              box-sizing: border-box;
              -webkit-transition: bottom 0.3s;
              transition: bottom 0.3s;
              width: 100%;
              .list_tite {
                font-size: 14px;
                line-height: 24px;
                color: #fff;
                font-weight: 500;
              }
              .info {
                font-size: 14px;
                color: #b2b2b2;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .fabulous:focus {
                  color: red;
                }
              }
            }
          }
          li:hover .cover {
            display: block;
          }
        }
      }
      .create_right {
        width: 496px;
        display: inline-block;
        vertical-align: top;
        margin-left: 42px;
        .create_left1 {
          width: 241px;
          height: 411px;
          display: inline-block;
          vertical-align: top;
          margin-top: 40px;
          cursor: pointer;
        }
        .create_left1:hover {
          margin-top: 30px;
        }
        .img_list {
          width: 240px;
          display: inline-block;
          margin-left: 14px;
          margin-top: 57px;

          img {
            width: 240px;
            height: 87px;
            margin-bottom: 25px;
            cursor: pointer;
          }
          .more {
            width: 239px;
            height: 58px;
            font-size: 16px;
            line-height: 58px;
            text-align: center;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  footer {
    background-color: #e3e2e2;
    width: 100%;
    min-width: 1358px;
    padding: 45px 0;
    .content {
      min-width: 1358px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 auto;
      padding: 15px 20px;
      box-sizing: border-box;
      .logo {
        background-size: 405px 178px;
        background-repeat: no-repeat;
        background-position: -216px 0;
        width: 189px;
        height: 34px;
      }
      .info {
        color: #9f9378;
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
      show: false, //头部的子列表隐藏或显示
      swipeList: [
        { src: this.$imgsrc + "lol_swipe0.jpeg" },
        { src: this.$imgsrc + "lol_swipe1.jpeg" },
        { src: this.$imgsrc + "lol_swipe2.jpeg" },
        { src: this.$imgsrc + "lol_swipe3.jpeg" },
        { src: this.$imgsrc + "lol_swipe4.jpeg" },
      ],
      selactedNum: 0, //swipe的tab
      newTab: 0, //新闻的tab
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
      newList: [
        {
          type: "news",
          typaName: "新闻",
          data: "6月19日免费英雄更新公告",
          time: "03-19",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "6月19日免费英雄更新公告",
          time: "03-19",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "这是新闻",
          time: "03-19",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "6月19日免费英雄更新公告",
          time: "03-19",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻",
          time: "03-19",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻",
          time: "03-19",
        },
      ],
      videoList: [
        {
          type: "video",
          data: "盲僧万用开局路线公式！青铜学了玩的像钻石",
          typaName: "视频",
          time: "05-12",
        },
        {
          type: "video",
          data: "这是视频教学",
          typaName: "视频",
          time: "05-12",
        },
        {
          type: "video",
          data: "盲僧万用开局路线公式！青铜学了玩的像钻石",
          typaName: "视频",
          time: "05-12",
        },
        {
          type: "video",
          data: "视频视屏",
          typaName: "视频",
          time: "05-12",
        },
        {
          type: "video",
          data: "盲僧万用开局路线公式！青铜学了玩的像钻石",
          typaName: "视频",
          time: "05-12",
        },
        {
          type: "video",
          data: "盲僧万用开局路线公式！青铜学了玩的像钻石",
          typaName: "视频",
          time: "05-12",
        },
      ],
      noticeList: [
        {
          type: "notice",
          typaName: "公告",
          data: "6月19日免费英雄更新公告",
          time: "05-19",
        },
        {
          type: "notice",
          typaName: "公告",
          data: "公告公告公告",
          time: "01-22",
        },
        {
          type: "notice",
          typaName: "公告",
          data: "6月19日免费英雄更新公告",
          time: "05-19",
        },
        {
          type: "notice",
          typaName: "公告",
          data: "公告公告公告",
          time: "01-22",
        },
        {
          type: "notice",
          typaName: "公告",
          data: "6月19日免费英雄更新公告",
          time: "05-19",
        },
        {
          type: "notice",
          typaName: "公告",
          data: "公告公告公告",
          time: "01-22",
        },
      ],
      teachList: [
        {
          type: "teach",
          typaName: "教学",
          data: "弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！",
          time: "05-09",
        },
        {
          type: "teach",
          typaName: "教学",
          data: "最全英雄教学",
          time: "05-29",
        },
        {
          type: "teach",
          typaName: "教学",
          data: "弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！",
          time: "05-09",
        },
        {
          type: "teach",
          typaName: "教学",
          data: "最全英雄教学",
          time: "05-29",
        },
        {
          type: "teach",
          typaName: "教学",
          data: "弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！",
          time: "05-09",
        },
        {
          type: "teach",
          typaName: "教学",
          data: "最全英雄教学",
          time: "05-29",
        },
      ],
      allList: [
        {
          type: "teach",
          typaName: "教学",
          data: "弈图道破：天使坠落恶魔永生！版本最强吃鸡率套路恶魔九五！",
          time: "05-09",
        },
        {
          type: "game",
          typaName: "赛事",
          data: "6月19日免费英雄更新公告",
          time: "05-19",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "6月19日免费英雄更新公告",
          time: "06-11",
        },

        { type: "news", typaName: "新闻", data: "2021幸运一夏", time: "03-19" },
        {
          type: "teach",
          typaName: "教学",
          data: "最全英雄教学",
          time: "05-29",
        },
        {
          type: "news",
          typaName: "新闻",
          data: "6月19日免费英雄更新公告",
          time: "03-19",
        },
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
    // swipe的hover筛选数据
    tabSwipe(num) {
      console.log("监听" + num);
      this.selactedNum = num;
    },
    // 新闻的hover筛选数据
    tabNew(num) {
      this.newTab = num;
    },
    // 展示hover列表
    showNav() {
      this.show = true;
    },
    // 隐藏hover元素
    removeNav() {
      this.show = false;
    },
  },
};
</script>