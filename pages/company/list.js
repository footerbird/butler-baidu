// pages/company/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company_list: [],
    company_page: 1, // 10条一页，每次加载10条
    company_loading: false,
    company_finished: false,
    company_refreshing: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.load_companyAjax();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    swan.setPageInfo({
      title: '企业名录 - 企业工商信息一手掌握 | 外推网品牌管家',
      keywords: '企业列表,企业名录,工商信息,企业百科',
      description: '外推网为您提供全国企业信息查询，包括企业工商信息查询，信用信息查询，经营状况查询等相关信息。查企业，查老板，查关系就上外推网!'
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
  onPullDownRefresh: function () {
    const that = this;
    that.setData({
      company_page: 1,
      company_loading: false,
      company_finished: false,
      company_refreshing: true
    });
    that.load_companyAjax();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this;
    that.load_companyAjax();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  load_companyAjax() {
    const that = this;
    if (that.data.company_finished) return;
    if (that.data.company_loading) return;
    that.setData({
      company_loading: true
    });
    swan.request({
      url: 'https://m.waitui.com/api/get_companyAjax',
      data: {
        page: that.data.company_page
      },
      success({ data }) {
        // 清空列表数据
        if (that.data.company_refreshing) {
          that.setData({
            company_list: [],
            company_refreshing: false
          });
          swan.stopPullDownRefresh();
        }
        that.setData({
          company_list: that.data.company_list.concat(data.company_list),
          company_page: that.data.company_page + 1,
          company_loading: false
        });
        // 数据全部加载完成
        if (data.company_list.length < 10) {
          that.setData({
            company_finished: true
          });
        }
      }
    });
  }

});