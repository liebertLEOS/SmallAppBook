//index.js
//获取应用实例
var apiUtils = require('../../utils/apiUtils')
var types = require('../../utils/constant').MAIN_TYPE
var app = getApp()
Page({
  data: {
    loading: false,
    tabs: [],
    activeIndex: "0",
    sliderOffset: 0,
    sliderLeft: 0,
    swiper: [
      {
        imagePath:"../../images/poster1.jpeg",
        title: "阿里新突破！自主创新的下一代匹配推荐技术",
        url: "/pages/detail/index/index?id=1122"
      },
      {
        imagePath: "../../images/poster1.jpeg",
        title: "天天加班写业务代码，这不是我要的技术人生",
        url: "/pages/detail/index/index?id=1122"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    news: [
      {
        title: "阿里新突破！自主创新的下一代匹配推荐技术",
        desc: "阿里新突破！自主创新的下一代匹配推荐技术，如何为海量商品设计推荐系统？我们有了新突破",
        url: "/pages/detail/index/index?id=1122"
      },
      {
        title: "如何快速成长为技术大牛？阿里资深技术专家的总结亮了",
        desc: "天天加班写业务代码，这不是我要的技术人生",
        url: "/pages/detail/index/index"
      },
      {
        title: "阿里新突破！自主创新的下一代匹配推荐技术",
        desc: "阿里新突破！自主创新的下一代匹配推荐技术，如何为海量商品设计推荐系统？我们有了新突破",
        url: "/pages/detail/index/index"
      },
      {
        title: "如何快速成长为技术大牛？阿里资深技术专家的总结亮了",
        desc: "天天加班写业务代码，这不是我要的技术人生",
        url: "/pages/detail/index/index"
      },
      {
        title: "阿里新突破！自主创新的下一代匹配推荐技术",
        desc: "如何为海量商品设计推荐系统？我们有了新突破",
        url: "/pages/detail/index/index"
      },
      {
        title: "如何快速成长为技术大牛？阿里资深技术专家的总结亮了",
        desc: "天天加班写业务代码，这不是我要的技术人生",
        url: "/pages/detail/index/index"
      }
    ],
    content: {
      page: 1,
      limit: 5
    },
    contentData: [],
    isFromSearch: true,  //第一次加载，设置true  
    searchPageNum: 1,   // 设置加载的第几次，默认是第一次  
    callbackcount: 15,      //返回数据的个数  
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false  //“没有数据”的变量，默认false，隐藏 
  },
  onLoad: function () {
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '老兵说阳明',
      success: function (res) {
        
      }
    })
  },
  //以下为scrollview
  scrollUpper: function (e) {
    console.log(e)
  },
  scrollLower: function (e) {
    let that = this;
    that.setData({ searchLoading: true})
    if (that.data.searchLoading && !that.data.searchLoadingComplete) {
      that.setData({
        searchPageNum: that.data.searchPageNum + 1,  //每次触发上拉事件，把searchPageNum+1  
        isFromSearch: false  //触发到上拉事件，把isFromSearch设为为false  
      });
    }
  },
  //以上为scrollview
  onShareAppMessage: function () {
    return {
      title: '我的分享'
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 模拟加载
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 500)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;
    that.setData({ 
      searchLoading: true,
      searchLoadingComplete: false
    })
    wx.showNavigationBarLoading()
    // 模拟加载
    setTimeout(function () {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      that.setData({ 
      searchLoading: false,
      searchLoadingComplete: true
      })
    }, 1000)
  }
}
)
