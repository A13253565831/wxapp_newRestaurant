var con = require("../../../utils/data.js");

Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: con.hospital_getphotogroup,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          cartoon: res.data.info
        })
      }
    });
  },
  bindDtap: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'cartoonItem/cartoonItem?id=' + len
    })
  }
})
