// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: ["pages/index/index", "pages/order/order"],
  window: {
    backgroundTextStyle: "light",
    // navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "远方",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7f8389",
    selectedColor: "#5495e6",
    borderStyle: "black",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/images/index-unselected.png",
        selectedIconPath: "assets/images/index-selected.png",
      },
      {
        pagePath: "pages/order/order",
        text: "订单",
        iconPath: "assets/images/order-unselected.png",
        selectedIconPath: "assets/images/order-selected.png",
      },
    ],
  },
});
