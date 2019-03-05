//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLoading: false,
    rarity: ['n', 'r', 'sr', 'ssr'],
    extraType: ['无','none', 'pst', 'pstr', 'pstp', 'fes', '1staniv', 'extra'],
    idolIndex: 0,
    rarityIndex: 0,
    extraTypeIndex: 0,
    idols: [{
        "id": 1,
        "name": "天海 春香"
      },
      {
        "id": 2,
        "name": "如月 千早"
      },
      {
        "id": 3,
        "name": "星井 美希"
      },
      {
        "id": 4,
        "name": "萩原 雪歩"
      },
      {
        "id": 5,
        "name": "高槻 やよい"
      },
      {
        "id": 6,
        "name": "菊地 真"
      },
      {
        "id": 7,
        "name": "水瀬 伊織"
      },
      {
        "id": 8,
        "name": "四条 貴音"
      },
      {
        "id": 9,
        "name": "秋月 律子"
      },
      {
        "id": 10,
        "name": "三浦 あずさ"
      },
      {
        "id": 11,
        "name": "双海 亜美"
      },
      {
        "id": 12,
        "name": "双海 真美"
      },
      {
        "id": 13,
        "name": "我那覇 響"
      },
      {
        "id": 14,
        "name": "春日 未来"
      },
      {
        "id": 15,
        "name": "最上 静香"
      },
      {
        "id": 16,
        "name": "伊吹 翼"
      },
      {
        "id": 17,
        "name": "田中 琴葉"
      },
      {
        "id": 18,
        "name": "島原 エレナ"
      },
      {
        "id": 19,
        "name": "佐竹 美奈子"
      },
      {
        "id": 20,
        "name": "所 恵美"
      },
      {
        "id": 21,
        "name": "徳川 まつり"
      },
      {
        "id": 22,
        "name": "箱崎 星梨花"
      },
      {
        "id": 23,
        "name": "野々原 茜"
      },
      {
        "id": 24,
        "name": "望月 杏奈"
      },
      {
        "id": 25,
        "name": "伴田 路子"
      },
      {
        "id": 26,
        "name": "七尾 百合子"
      },
      {
        "id": 27,
        "name": "高山 紗代子"
      },
      {
        "id": 28,
        "name": "松田 亜利沙"
      },
      {
        "id": 29,
        "name": "高坂 海美"
      },
      {
        "id": 30,
        "name": "中谷 育"
      },
      {
        "id": 31,
        "name": "天空橋 朋花"
      },
      {
        "id": 32,
        "name": "エミリー スチュアート"
      },
      {
        "id": 33,
        "name": "北沢 志保"
      },
      {
        "id": 34,
        "name": "舞浜 歩"
      },
      {
        "id": 35,
        "name": "木下 ひなた"
      },
      {
        "id": 36,
        "name": "矢吹 可奈"
      },
      {
        "id": 37,
        "name": "横山 奈緒"
      },
      {
        "id": 38,
        "name": "二階堂 千鶴"
      },
      {
        "id": 39,
        "name": "馬場 このみ"
      },
      {
        "id": 40,
        "name": "大神 環"
      },
      {
        "id": 41,
        "name": "豊川 風花"
      },
      {
        "id": 42,
        "name": "宮尾 美也"
      },
      {
        "id": 43,
        "name": "福田 のり子"
      },
      {
        "id": 44,
        "name": "真壁 瑞希"
      },
      {
        "id": 45,
        "name": "篠宮 可憐"
      },
      {
        "id": 46,
        "name": "百瀬 莉緒"
      },
      {
        "id": 47,
        "name": "永吉 昴"
      },
      {
        "id": 48,
        "name": "北上 麗花"
      },
      {
        "id": 49,
        "name": "周防 桃子"
      },
      {
        "id": 50,
        "name": "ジュリア"
      },
      {
        "id": 51,
        "name": "白石 紬"
      },
      {
        "id": 52,
        "name": "桜守 歌織"
      }
    ]
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
    if (that.data.extraTypeIndex>0){
      url = url+'&extraType=' +that.data.extraType[that.data.extraTypeIndex]
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
  },

  onReady: function() {

  }

})