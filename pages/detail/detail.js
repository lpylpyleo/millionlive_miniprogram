let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardInfo: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      cardInfo: app.globalData.cardInfo
    })
    console.log('cardInfo', this.data.cardInfo)
  },

/**
 * 切换图标
 */
  toggleIcon: function(e) {
    let index = e.currentTarget.id
    let shown = "cardInfo[" + index+"].showAwaken"
    this.setData({
      [shown]: !this.data.cardInfo[index].showAwaken
    })
  }


})