"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Testswiper",
  props: ["swiperDatas"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.f((_a = common_vendor.unref(props)) == null ? void 0 : _a.swiperDatas, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-74fbd399"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/components/Testswiper/Testswiper.vue"]]);
wx.createComponent(Component);
