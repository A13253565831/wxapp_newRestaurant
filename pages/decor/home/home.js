var con = require("../../../utils/data.js");
var app = getApp()
Page({
  data: {
    type: [],
    list: [],
    galler: []
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
        app.getUserInfo();
      }

    });
    wx.request({
      url: con.hospital_gettype,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, count: 4 },
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
    wx.request({
      url: con.hospital_getphotogroup,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, count: 4 },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          galler: res.data.info
        })
      }
    });

  },
  bindType: function (e) {
    // console.log(e.currentTarget.dataset.id);
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../article/article?id=' + len,
    });
  },
  bindgaller: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../gallerItem/gallerItem?id=' + len,
    })
  }
})

