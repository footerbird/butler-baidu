// pages/mark/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_loading: true,
    mark_category: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.load_markSort();
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
      title: '2020年最新第12版商标注册分类表 - 基于尼斯商标分类 | 外推网品牌管家',
      keywords: '商标分类,商标分类表,类似商品和服务区分表,2020最新商标分类',
      description: '2020年最新第12版商标分类表2020年04月更新,提供准确的商标注册类别信息,并及时更新商标注册数据库,查询类别精确到商标组群.查询数据为中国商标网数据,最实用商标分类表,欢迎查询商标。'
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

  load_markSort() {
    const that = this;
    swan.request({
      url: 'https://m.waitui.com/api/get_markSort',
      success({ data }) {
        that.setData({
          mark_category: data.mark_category,
          page_loading: false
        });
      }
    });
  }

});