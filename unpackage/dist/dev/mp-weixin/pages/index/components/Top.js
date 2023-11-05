"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "Top",
  setup(__props) {
    let { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(safeAreaInsets).top + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fed98ed5"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/index/components/Top.vue"]]);
wx.createComponent(Component);
