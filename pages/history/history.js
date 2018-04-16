// pages/history/history.js
var apiUtils = require('../../utils/apiUtils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList: [
      {
        date: '2018-03-30',
        articleList: [
          {
            meta: '10:09 第二次阅读',
            title: '产品能力是每个人的底层能力',
            url: ''
          },
          {
            meta: '09:09 第一次阅读',
            title: '产品能力是每个人的底层能力',
            url: ''
          }
        ]
      },
      {
        date: '2018-03-29',
        articleList: [
          {
            meta: '10:09 第一次阅读',
            title: '产品不是最重要的事',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '责任也能产生激励',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '关注问题，而不是答案',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '如何快速留下好的第一印象',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '用户体验与结婚教练',
            url: ''
          }
        ]
      },
      {
        date: '2018-03-28',
        articleList: [
          {
            meta: '10:09 第一次阅读',
            title: '产品不是最重要的事',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '责任也能产生激励',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '关注问题，而不是答案',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '如何快速留下好的第一印象',
            url: ''
          },
          {
            meta: '10:09 第一次阅读',
            title: '用户体验与结婚教练',
            url: ''
          }
        ]
      }
    ],
    pageNum: 1,             // 当前已经加载的页序号 
    pageSize: 15,           // 分页大小
    loading: false,         // "上拉加载"的变量，默认false，隐藏
    loadingFail: false,     // "加载失败"的变量，默认false，隐藏
    loadingComplete: false  // “没有数据”的变量，默认false，隐藏 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHistoryList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this
    
    // 初始化相关变量，刷新页面
    that.setData({
      pageNum: 1
    })
    // 重新加载数据
    that.getHistoryList()
    // console.log('pull down and refresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 模拟加载    
    this.getHistoryList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 获取阅读历史列表
   */
  getHistoryList: function () {
    let that = this
    // 显示加载情况
    that.setData({
      loading: true,
      loadingFail: false,
      loadingComplete: false
    })
    // 远程请求数据
    // 页码加1
    wx.showNavigationBarLoading()
    
    apiUtils.AJAX('/data/history.json?page=' + this.data.pageNum, function (res) {
      // 成功获取数据
      // 隐藏导航条加载图标
      wx.hideNavigationBarLoading()
      // 关闭下拉刷新图标
      wx.stopPullDownRefresh()
      // 本地页面序号加1
      that.data.pageNum++
      that.setData({
        loading: false,
        loadingComplete: true
      })
      console.log(res)
    }, function () {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      that.setData({
        loading: false,
        loadingFail: true,
        loadingComplete: false
      })
    })
    
  }
})