// pages/reg/reg.js
Page({
  data: {
    companyName: '',
    phoneNumber: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindNameInput: function (e) {
    var name = e.detail.value
    this.setData({
      companyName: name
    })
  },
  bindPhoneInput: function (e) {
    var phone = e.detail.value
    this.setData({
      phoneNumber: phone
    })
  },
  tapOk: function () {
    // if (this.data.companyName == '') {
    //   wx.showToast({ title: "请输入工厂名称" });
    //   return
    // }
    // if (this.data.phoneNumber == '') {
    //   wx.showToast({ title: "请输入手机号码" });
    //   return
    // }
    wx.switchTab({
      url: '../main/main'
    })
  },
})