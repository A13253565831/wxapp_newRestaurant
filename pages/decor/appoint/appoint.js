var con = require("../../../utils/data.js");
var app = getApp();
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: con.hospital_getprelist,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        that.setData({
          pre: res.data.info
        })
      }
    });

  },
  bindPre: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'appointD/appointD?id=' + len,
    })
  }
})