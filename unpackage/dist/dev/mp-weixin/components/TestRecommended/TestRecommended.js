"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "TestRecommended",
  props: ["recommedData", "flesh"],
  setup(__props) {
    const props = __props;
    const toDetials = function(e) {
      common_vendor.index.navigateTo({
        url: "/pages/details/details?id=" + e.currentTarget.id
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(props).recommedData, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.desc),
            c: common_vendor.t(item.price),
            d: item.index,
            e: item.id,
            f: common_vendor.o(toDetials, item.index)
          };
        }),
        b: common_vendor.unref(props).flesh
      }, common_vendor.unref(props).flesh ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c25d2715"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/components/TestRecommended/TestRecommended.vue"]]);
wx.createComponent(Component);
