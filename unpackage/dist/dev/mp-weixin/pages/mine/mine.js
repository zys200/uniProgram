"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  _easycom_u_action_sheet2();
}
const _easycom_u_action_sheet = () => "../../uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
if (!Math) {
  _easycom_u_action_sheet();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    let list = [{ name: "选项一", subname: "选项一描述", color: "#ffaa7f", fontSize: "20" }];
    let show = common_vendor.ref(false);
    const toAddress = function() {
      common_vendor.index.navigateTo({
        url: "/pages/address/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toAddress),
        b: common_vendor.p({
          actions: common_vendor.unref(list),
          show: common_vendor.unref(show)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
