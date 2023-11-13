"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/more/more.js";
  "./pages/car/car.js";
  "./pages/mine/mine.js";
  "./pages/hests/hests.js";
  "./pages/details/details.js";
  "./pages/login/login.js";
  "./pages/order/index.js";
  "./pages/address/index.js";
  "./pages/address/component/changeAddress.js";
}
const _sfc_main = {};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张东宇/Desktop/Hbuilder/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia()).use(common_vendor.uviewPlus);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
