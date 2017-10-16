var con = require("../../../../utils/data.js");
var WxParse = require

  ("../../../../wxParse/wxParse.js");
var app = getApp();
Page({
  data: {
    artD: {

    }
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({

      url: con.getartical,
      data: { wxappid: con.wyy_user_wxappid, id: id },

      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {


        console.log(res.data);
        WxParse.wxParse('arta', 'html', res.data.details, that,

          0);
        that.setData({
          // artD: res.data
          text: res.data.text,
          title: res.data.title,
          img: res.data.img
        })
      }
    })
  },

})

