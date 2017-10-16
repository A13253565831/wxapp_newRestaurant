var con = require("../../../../utils/data.js");
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: con.getphotodetail,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, id: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        that.setData({
          gallerD: res.data
        })

      },
    })
  }
})