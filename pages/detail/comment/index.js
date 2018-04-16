// pages/detail/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    articleId: '',
    articleTitle: '',
    value: '',
    commentList: [
      {
        id: "1",
        userid: "1",
        avatar: "/images/me.jpg",
        nickname: "李伯特",
        istop: true,
        star: "100",
        say: "他们中有直面挑战、敢于亮剑，成功突破阿塞拜疆一牌无线空白市场的销售精兵"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      articleId: options.id,
      articleTitle: options.title
    })
    wx.setNavigationBarTitle({
      title: '留言评论',
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  submit: function (e) {
    var that = this
    var value = e.detail.value.textarea

    if (value == '') return
    that.setData({
      loading: true
    })

    setTimeout(function () {
      var data = that.data.commentList
      data.push({
          id: "1",
          userid: "1",
          avatar: "/images/me.jpg",
          nickname: "李伯特",
          istop: false,
          star: "80",
          say: value
      })
      that.setData({
        loading: false,
        commentList: data
      })
    }, 500)
  }
})