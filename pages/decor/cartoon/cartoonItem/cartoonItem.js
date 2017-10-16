var con = require("../../../../utils/data.js");
var app = getApp();
Page({
  data: {
    gallerItem:[]
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: con.hospital_getphoto,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, id: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data.info);
        that.setData({
          gallerItem: res.data.info
        })

      },
    })
  },
  bindgallerD: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../cartoonD/cartoonD?id=' + len,
    })
  }
})