var con = require("../../../utils/data.js");
var app = getApp();
Page({
  data: {
    list: [],
    articleTwo: []
  },
  onLoad: function () {
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
      }
    });


    wx.request({
      url: con.hospital_gettype,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          type: res.data.info
        })
      }

    });
  },
  bindType: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'newsItem/newsItem?id=' + len,
    })
  }
})