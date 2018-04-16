// pages/detail/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    article: null,
    commentList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取数据
    var that = this
    that.setData({
      loading: true
    })

    setTimeout(function () {
      that.setData({
        loading: false,
        article: {
          id: '1',
          title: '跟任总合影是一种什么体验',
          time: '2018-03-29',
          author: '老兵',
          content: '2018年3月27日上午，华为坂田基地A3湖畔来了一群特别的年轻人——32位公司金牌奖获奖员工代表。\
\
  他们中有直面挑战、敢于亮剑，成功突破阿塞拜疆一牌无线空白市场的销售精兵；有从中世纪教堂玻璃受启发，从而解决手机摄像头防震难题的技术专家；有引入先进思想和方法，大幅优化芯片架构设计仿真效率的芯片架构设计师；有为精密制造插上数字化的翅膀的光电制造专家；有建设公共的知识服务平台，减少IT重复投资的知识管理工程师；还有通过网络安全笔译和口译，建立华为安全形象的翻译……\
\
      为了感谢他们所做出的贡献，任总与金牌员工集体合影，并与每位员工单独合影。伴随着快门的“咔嚓”声，笑容在每一个人脸上定格，留下了珍贵的记忆。这种与众不同的表彰方式，让每位获奖员工得到激励的同时，也感受到肩头的责任。\
\
      金牌奖是公司授予员工的最高荣誉，旨在奖励为公司持续商业成功做出突出贡献的个人和团队，可谓百里挑一，含金量十足。2017年公司共评选出1785名金牌个人，574个金牌团队。'
        },
        commentList: [
          {
            id: "1",
            user: {
              userid: "1",
              avatar: "/images/me.jpg",
              nickname: "李伯特",
              istop: true,
              star: "100",
              say: "他们中有直面挑战、敢于亮剑，成功突破阿塞拜疆一牌无线空白市场的销售精兵"
            },
            reply: {
              star: "28",
              say: "谢谢你的回复"
            }
          },
          {
            id: "2",
            user: {
              userid: "1",
              avatar: "/images/user.png",
              nickname: "张小娴",
              star: "100",
              say: "他们中有直面挑战、敢于亮剑，成功突破阿塞拜疆一牌无线空白市场的销售精兵"
            },
            reply: false
          },
          {
            id: "3",
            user: {
              userid: "1",
              avatar: "/images/me.jpg",
              nickname: "李伯特",
              star: "100",
              say: "他们中有直面挑战、敢于亮剑，成功突破阿塞拜疆一牌无线空白市场的销售精兵"
            },
            reply: {
              star: "28",
              say: "谢谢你的回复"
            }
          }
        ]
      })
    }, 500)
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
  
  }
})