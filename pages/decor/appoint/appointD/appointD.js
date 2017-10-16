var con = require("../../../../utils/data.js");
var app = getApp();
var id, openid, stat, arr, filName, arrName, isChose, dArr, mArr, more;
Page({
  data: {
    pre: '',
    picker: '',
    date: '2017-6-01',
  },
  onLoad: function (options) {
    var that = this;
    id = options.id;
    wx.request({
      url: con.hospital_getpre,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, preid: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        //正则判断
        var zz = res.data.info.forms.text;

        arr = [];
        arrName = [];
        isChose;
        for (var i in zz) {
          var lz = zz[i].field_match;
          filName = zz[i].fieldname;
          // console.log(filName);
          isChose = zz[i].is_empty;
          arrName.push(filName);
          arr.push(lz);
        };
        //多选框
        more = res.data.info.forms.checkbox;
        mArr = [];
        for (var i in more) {
          dArr = more[i].fieldname;
          mArr.push(dArr);
          console.log(mArr);
        }

        wx.getStorage({
          key: 'openid',
          success: function (res) {
            // console.log(res.data);
            openid = res.data;
          },
        })
        that.setData({
          pre: res.data.info.forms.text,
          picker: res.data.info.forms.date,
          radio: res.data.info.forms.radio,
          checkbox: res.data.info.forms.checkbox,
          textarea: res.data.info.forms.textarea,
        })
      }
    });
  },

  bindFormSubmit: function (e) {

    // b = aArr[i].is_empty;
    // var cao = new RegExp(kArr[i]);
    // if (b == 1) {
    //   if (!cao.test(e.detail.value[vArr[i]])) {
    //     console.log(11111);
    //     wx.showToast({
    //       title: '您的输入格式有误，请重新输入！',
    //       mask: false,
    //       success: function (res) { },
    //     })
    //     return false;
    //   }


    for (var i in arr) {
      // console.log(arr[i]);
      var reg = new RegExp(arr[i]);
      for (var j in arrName) {
        // console.log(e.detail.value[arrName[j]]);

        if (i == j) {
          console.log(e.detail.value[arrName[j]]);
          console.log(reg);
          if (isChose == 1) {
            if (reg.test(e.detail.value[arrName[j]])) {

            } else {
              wx.showToast({
                title: '输入内容不正确',
                mask: false,
                success: function () {

                }
              })
              return false;
            }
          }
        }
      }
    };
    //多选框
    var string = e.detail.value;
    for (var i in more) {
      console.log(mArr[i]);
      if (isChose == 1) {
        if (string[mArr[i]].length < 1) {
          console.log(22222);
          wx.showToast({
            title: '多选请至少选择一个选项！',
            mask: false,
            success: function (res) { },
          })
          return false;
        }
      }
    }
    // var string = e.detail.value;
    // for (var i in string) {
    //   if (!string.hasOwnProperty(i)) {
    //     return;
    //   } else if (string[i].length <= 0) {
    //     ok = 0;
    //     wx.showToast({
    //       title: '提交失败,请输入完整',
    //       mask: false,
    //       success: function (res) { },
    //     });
    //     return false;
    //   }
    // }

    var ok = 1;

    if (ok == 1) {
      wx.request({
        url: con.hospital_postprerecord,
        method: 'POST',
        data: { wxappid: con.wyy_user_wxappid, preid: id, openid: openid, record: JSON.stringify(e.detail.value) },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          // console.log(res.data);
          stat = res.data.status;
          if (stat == 1) {
            wx.showToast({
              title: '提交成功!',
              mask: false,
              success: function (res) { },
            });
          }
        }
      });
    }
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

})