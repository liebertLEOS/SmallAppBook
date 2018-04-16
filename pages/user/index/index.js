// pages/user/index/index.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    menu: [
      {
        title: "基本信息",
        icon: "fa-user",
        url: "/pages/user/basic/basic"
      },
      {
        title: "好文收藏",
        icon: "fa-star",
        url: "/pages/user/basic/basic"
      },
      {
        title: "我的留言",
        icon: "fa-commenting",
        url: "/pages/user/basic/basic"
      },
      {
        title: "意见反馈",
        icon: "fa-send",
        url: "/pages/user/basic/basic"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      that.setData({
        userInfo: userInfo
      })
    })
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
    wx.setNavigationBarTitle({
      title: '个人中心',
      success: function (res) {
        // success
      }
    })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('下拉加载更多...')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})