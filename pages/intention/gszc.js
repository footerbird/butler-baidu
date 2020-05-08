const { Valid } = require('../../utils/util.js');
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    intention_type: 'other',
    intention_product: '公司注册',
    intention_name: '',
    intention_phone: '',
    description: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    swan.setPageInfo({
      title: '公司注册 | 外推网品牌管家',
      keywords: '公司注册,公司起名,公司核名,公司注册地址',
      description: '我们提供免费的公司起名和公司核名服务，最快三天拿到营业执照，顾问全程指导，省心省力，创业无门槛，轻松当老板。',
      image: 'https://m.waitui.com/htdocs/mobile/images/intention-banner.png'
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  intentionNameInput(e) {
    const that = this;
    that.setData({
      intention_name: e.detail.value || e.detail
    });
  },

  intentionPhoneInput(e) {
    const that = this;
    that.setData({
      intention_phone: e.detail.value || e.detail
    });
  },

  descriptionInput(e) {
    const that = this;
    that.setData({
      description: e.detail.value || e.detail
    });
  },

  reload() {
    const that = this;
    that.setData({
      intention_type: 'other',
      intention_product: '公司注册',
      intention_name: '',
      intention_phone: '',
      description: ''
    });
    that.onLoad();
  },

  submitIntention() {
    const that = this;
    if (that.data.intention_name === '') {
      Toast('请输入您的联系姓名');
      return false;
    }
    if (that.data.intention_phone === '') {
      Toast('请输入您的手机号码');
      return false;
    }
    if (!Valid.isMobile(that.data.intention_phone)) {
      Toast('手机号码格式错误');
      return false;
    }
    swan.request({
      url: 'https://m.waitui.com/api/submit_intentionAjax',
      data: {
        intention_type: that.data.intention_type,
        intention_product: that.data.intention_product,
        intention_name: that.data.intention_name,
        intention_phone: that.data.intention_phone,
        description: that.data.description
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success({ data }) {
        if (data.state === 'success') {
          Toast('提交成功');
          setTimeout(() => {
            that.reload();
          }, 2000);
        } else {
          Toast(data.msg);
        }
      }
    });
  }

});