//index.js
//获取应用实例
const app = getApp()
const data = require('./data.js')

Page({
  data: {
    isLoading: false,
    rarity: ['n', 'r', 'sr', 'ssr'],
    extraType: ['全部', 'none', 'pst', 'pstr', 'pstp', 'fes', '1staniv', 'extra'],
    idolIndex: 0,
    rarityIndex: 0,
    extraTypeIndex: 0,
    idols: data
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
   * 处理提交
   */
  handleSubmit: function(e) {
    this.setData({
      isLoading: true
    })
    var that = this;
    let id = Number(that.data.idolIndex) + 1;
    let url = 'https://api.matsurihi.me/mltd/v1/cards?idolId=' + id + '&rarity=' + that.data.rarity[that.data.rarityIndex];
    
    //如果选择了type，则加参数
    if (that.data.extraTypeIndex > 0) {
      url = url + '&extraType=' + that.data.extraType[that.data.extraTypeIndex]
    }

    wx.request({
      method: 'GET',
      url: url,
      success: (res) => {
        console.log('request success', res);
        app.globalData.cardInfo = res.data;

        wx.navigateTo({
          url: '/pages/detail/detail'
        });
        that.setData({
          isLoading: false
        })

      },
      fail: (res) => {
        console.error(res)
      }
    })
  },
  
  /**
   * 监听选择器
   */
  onPickerChange: function(e) {
    console.log('value changed', e)
    let id = e.currentTarget.id
    this.setData({
      [id]: e.detail.value
    })
  }

})