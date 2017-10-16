//app.js
var con = require("utils/data.js");
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success:function(o){
          // console.log(o);
          wx.getUserInfo({
            success:function(res){
            // console.log(res);
            wx.request({
              url: con.index_slogin,
              data: {
                code: o.code,
                wxappid: con.wyy_user_wxappid,
                nickname: res.userInfo.nickName,
                 pic: res.userInfo.avatarUrl
              },
              method:'POST',
              header:{
                'content-type': 'application/x-www-form-urlencoded'
              },
              success:function(res){
                // console.log(res.data.openid);
                wx.setStorage({
                  key: 'openid',
                  data: res.data.openid,
                })  
              }
            })
            }
          })
        }
      })

    }
  },

  globalData: {
    userInfo: null
  }
})
