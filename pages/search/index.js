// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchHistory: [],
    searchHot: [
      '王阳明',
      '王阳明的故事',
      '心学大师如何格物致知',
      '格物致知',
      '王阳明的故事'
    ],
    hideHistory: true,
    showAllHistory: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // 模拟加载
    setTimeout(function () {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  searchFocus: function (e) {
    var that = this
    var store = wx.getStorageSync('searchHistory')

    if (store.length > 0) {
      // 判断是否已经全部加载完毕
      if (that.data.searchHistory.length >= store.length) {
        that.setData({
          showAllHistory: false
        })
      } else if (that.data.searchHistory.length == 0){
        that.setData({
          searchHistory: store.splice(0, 5)
        })
        that.setData({
          showAllHistory: true
        })
      }
    }
    // 显示搜索历史
    if (that.data.searchHistory.length > 0) {
      that.setData({
        hideHistory: false
      })
    }

  },
  searchBlur: function(e) {
    var that = this
    // 隐藏搜索历史
    that.setData({
      hideHistory: true
    })
  },
  searchInput: function (e) {
    var that = this
    // 模糊查询，返回候选推荐关键字
  },
  searchConfirm: function (e) {
    var that = this
    // 
    var data = this.data.searchHistory
    data.push(e.detail.value)
    // 保存搜索记录到本地缓存中
    wx.setStorage({
      key: 'searchHistory',
      data: data,
    })
    // 同步更新本地数据
    that.setData({
      searchHistory: data
    })
  },
  loadAllHistory: function (e) {
    var that = this
    // 如果为true 加载全部搜索历史记录
    if (that.data.showAllHistory) {
      // 加载完全部的搜索历史之后切换现实
      var searchHistory = wx.getStorageSync('searchHistory')
      that.setData({
        searchHistory: searchHistory
      })

      that.setData({
        showAllHistory: false
      })
    } else {
      // 删除全部搜索历史记录
      wx.setStorage({
        key: 'searchHistory',
        data: []
      })
      that.setData({
        searchHistory: []
      })
    }
  },
  clearHistory: function (e) {
    var that = this
    var id = e.currentTarget.id
    var data = that.data.searchHistory
    // 删除当前记录
    data.splice(id, 1)
    // 更新本地缓存
    wx.setStorage({
      key: 'searchHistory',
      data: data
    })
    // 同步更新本地数据
    that.setData({
      searchHistory: data
    })
  }
})