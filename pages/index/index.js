// pages/index/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    home_circle: 1, // 品牌周期
    home_solution: 1 // 商标解决方案
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
      title: '品牌生活广场，传递品牌价值 | 外推网品牌管家',
      keywords: '企业品牌管理,企业品牌咨询,品牌域名购买,品牌商标转让',
      description: '杭州外推网络科技有限公司提供专业的品牌管理、咨询服务，帮助企业更好的管理自己的域名、商标等品牌资产，是专业的企业服务平台，上外推网，认准【waitui.com】。品牌管理，提升企业品牌价值；品牌推广，增加企业品牌曝光；品牌咨询，精准定位目标用户',
      image: 'https://m.waitui.com/htdocs/mobile/images/home-topic-manage.png'
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

  switchCircle(e) {
    const that = this;
    that.setData({
      home_circle: parseInt(e.currentTarget.dataset.circle)
    });
  },

  switchSolution(e) {
    const that = this;
    that.setData({
      home_solution: parseInt(e.currentTarget.dataset.solution)
    });
  }

});