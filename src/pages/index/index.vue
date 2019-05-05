<template>
  <div>
    <div class="search" >
      <input type="text" placeholder="搜索"  placeholder-class="center">
    </div>

    <!-- 焦点图 -->
    <swiper class="banner" autoplay="true" circular="true" indicator-dots  indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item v-for="(list, index) in bannerList" :key="index">
        <image :src="list.image_src"></image>
      </swiper-item>
    </swiper>
    <!-- 导航条 -->
    <div class="nav">
      <navigator v-for="(list, key) in categoryList" :key="key">
        <image :src="list.image_src"></image>
      </navigator>

    </div>
    <!-- 楼层 -->
    <div class="floors">
      <div class="floor" v-for="(item, index) in floorData" :key="index">
        <div class="title">
          <image :src="item.floor_title.image_src"></image>
        </div>
        <div class="items" >
          <image v-for="(list,k) in item.product_list" :key="k" :src="list.image_src"></image>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  data () {
    return {
      bannerList: [],
      categoryList: [],
      floorData: []
    }
  },
  created () {
    // let app = getApp()
    this.getSwiper()
    this.getCategory()
    this.getfloor()
  },
  methods: {
    async getSwiper () {
      const { message } = await request('https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata')
      this.bannerList = message
    },
    async getCategory() {
      const { message } = await request('https://www.zhengzhicheng.cn/api/public/v1/home/catitems')
      this.categoryList = message
    },
    async getfloor() {
      const { message } = await request('https://www.zhengzhicheng.cn/api/public/v1/home/floordata')
      this.floorData = message
    }
  },
  onPullDownRefresh() {
    this.getSwiper()
    this.getCategory()
    this.getfloor()
    mpvue.stopPullDownRefresh()
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
  }

}
.center {
    text-align: center;
    font-size: 24rpx;
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
