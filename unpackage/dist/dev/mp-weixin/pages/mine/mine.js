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
    let isLog = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      common_vendor.index.getStorage({
        key: "userInfos",
        success() {
          isLog.value = true;
        }
      });
    });
    const toAddress = function() {
      common_vendor.index.navigateTo({
        url: "/pages/address/index"
      });
    };
    const outLogin = function() {
      common_vendor.index.removeStorageSync("userInfos");
      isLog.value = false;
    };
    const toLog = function() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isLog)
      }, common_vendor.unref(isLog) ? {
        b: common_vendor.o(toAddress),
        c: common_vendor.o(outLogin),
        d: common_vendor.p({
          actions: common_vendor.unref(list),
          show: common_vendor.unref(show)
        })
      } : {
        e: common_vendor.o(toLog)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
