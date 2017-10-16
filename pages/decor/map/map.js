var con = require('../../../utils/data.js');
var WxParse = require("../../../wxParse/wxParse.js");
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min.js');
var app = getApp();
var lng, lat, name, address;

Page({
  data: {
    longitude: {},
    latitude: {},
    markers: [],

  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: con.hospital_getinfo,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data.info);
        name = res.data.info.name;
        address = res.data.info.address;
        WxParse.wxParse('shoperIn', 'html', res.data.info.intro, that, 0)
        that.setData({
          address: res.data.info.address,
          name: res.data.info.name,
          tel: res.data.info.tel
        })
      }

    });
    var demo = new QQMapWX({
      key: 'QCDBZ-GZ3WI-BQDG7-5H24V-Y2HSO-I7BSG'
    });
    wx.request({
      url: con.getmap,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json",
      },
      success: function (res) {
        // console.log(name);
        lng = res.data.lng;
        lat = res.data.lat;
        that.setData({
          longitude: res.data.lng,
          latitude: res.data.lat,
          markers: [{
            longitude: res.data.lng,
            latitude: res.data.lat,
            iconPath: '../../../images/map/map.png',
            title: name,
            address: address,
            alpha: 1,
            width: 40,
            height: 40
          }],
        });
      }
    });


  },
  bindgothere: function (e) {

    wx.openLocation({
      latitude: lat,
      longitude: lng,
      name: name,
      address: address
    })
  }
});




