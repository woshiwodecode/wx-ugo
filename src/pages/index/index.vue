<template>
  <div>
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
.banner {
    width: 100%;
    height: 340rpx;

    image {
      width: 100%;
      height: 340rpx;
    }
  }

</style>
