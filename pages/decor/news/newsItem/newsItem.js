var con = require("../../../../utils/data.js");
Page({

  data: {
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: con.hospital_getslide,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          list: res.data.info
        })
        app.getUserInfo();
      }

    });
    wx.request({
      url: con.gettarticallist,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, typeid: options.id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          articleTwo: res.data.info,
        })
      }
    });

  },
  bindViewDetail: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../newsD/newsD?id=' + len,
    })
  }

})