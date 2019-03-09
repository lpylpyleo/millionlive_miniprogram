const app = getApp()
const util = require('../../utils/util.js')

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
    let that = this;
    //刷新数据
    this.setData({
      cardInfo: app.globalData.cardInfo
    })
    console.log('cardInfo', this.data.cardInfo);

    let arr = [];

    for (let i = 0; i < this.data.cardInfo.length; i++) {
      let date = that.data.cardInfo[i].addDate;
      //转换日期格式
      if (date != undefined) {
        date = util.formatTime(new Date(date))
      }
      arr[i] = date;
    }
    this.setData({
      arr: arr
    })
  },

  /**
   * 切换图标和文字
   */
  toggleInfo: function(e) {
    let index = e.currentTarget.id;

    //新增属性，undefined => false
    let awaken = "cardInfo[" + index + "].showAwakenInfo"
    this.setData({
      [awaken]: !this.data.cardInfo[index].showAwakenInfo
    })
  }

})