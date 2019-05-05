<template>
  <div>
    <div class="search" >
      <input type="text" placeholder="搜索">
    </div>

    <!-- 焦点图 -->
    <swiper class="banner" autoplay="true" circular="true" indicator-dots  indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item>
        <image src="/static/uploads/banner1.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="/static/uploads/banner2.png"></image>
      </swiper-item>
      <swiper-item>
        <image src="/static/uploads/banner3.png"></image>
      </swiper-item>
    </swiper>
    <!-- 导航条 -->
    <div class="nav">
      <image src="/static/uploads/icon_index_nav_1@2x.png"></image>
      <image src="/static/uploads/icon_index_nav_2@2x.png"></image>
      <image src="/static/uploads/icon_index_nav_3@2x.png"></image>
      <image src="/static/uploads/icon_index_nav_4@2x.png"></image>
    </div>
    <!-- 楼层 -->
    <div class="floors">
      <div class="floor">
        <div class="title">
          <image src="/static/uploads/pic_floor01_title.png"></image>
        </div>
        <div class="items">
          <image src="/static/uploads/pic_floor01_1@2x.png"></image>
          <image src="/static/uploads/pic_floor01_2@2x.png"></image>
          <image src="/static/uploads/pic_floor01_3@2x.png"></image>
          <image src="/static/uploads/pic_floor01_4@2x.png"></image>
          <image src="/static/uploads/pic_floor01_5@2x.png"></image>
        </div>
      </div>
      <div class="floor">
        <div class="title">
          <image src="/static/uploads/pic_floor02_title.png"></image>
        </div>
        <div class="items">
          <image src="/static/uploads/pic_floor02_1@2x.png"></image>
          <image src="/static/uploads/pic_floor02_2@2x.png"></image>
          <image src="/static/uploads/pic_floor02_3@2x.png"></image>
          <image src="/static/uploads/pic_floor02_4@2x.png"></image>
          <image src="/static/uploads/pic_floor02_5@2x.png"></image>
        </div>
      </div>
      <div class="floor">
        <div class="title">
          <image src="/static/uploads/pic_floor03_title.png"></image>
        </div>
        <div class="items">
          <image src="/static/uploads/pic_floor03_1@2x.png"></image>
          <image src="/static/uploads/pic_floor03_2@2x.png"></image>
          <image src="/static/uploads/pic_floor03_3@2x.png"></image>
          <image src="/static/uploads/pic_floor03_4@2x.png"></image>
          <image src="/static/uploads/pic_floor03_5@2x.png"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {

    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="less">
.search {
  background-color: #ff2d4a;
  padding: 20rpx 16rpx;
  height: 60rpx;
  input {
  width: 100%;
  height: 60rpx;
  background-color: #fff;
  border-radius: 15rpx;
  padding-left: 326rpx;

}
}

.banner {
    width: 100%;
    height: 340rpx;

    image {
      width: 100%;
      height: 340rpx;
    }
  }
.nav {
  display: flex;
  justify-content: space-between;
  padding: 30rpx 44rpx;
  image {
    width: 128rpx;
    height: 140rpx;
  }
}

.floor {
  .title {
      width: 750rpx;
      height: 60rpx;
      padding-top: 20rpx;
      background-color: #f4f4f4;
    }

    .items {
      padding: 20rpx 16rpx;
      overflow: hidden;

      image {
        width: 232rpx;
        height: 188rpx;
        margin-right: 10rpx;
        margin-bottom: 10rpx;
        float: left;
      }

      image:nth-child(2n+1) {
        margin-right: 0;
      }

      image:first-child {
        height: 386rpx;
        margin-right: 10rpx;
      }
    }
}
</style>
