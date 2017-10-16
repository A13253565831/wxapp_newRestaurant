var con = require("../../../utils/data.js");
var app = getApp();
Page({
  data: {
    artItem: []
  },
  onLoad: function (options) {
    var id = options.id;
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
      url: con.gettarticallist,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, typeid: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data.info);
        that.setData({
          artItem: res.data.info
        })
      }
    });
  },
  bindcarbookD: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'articleD/articleD?id=' + len
    })
  }
})








