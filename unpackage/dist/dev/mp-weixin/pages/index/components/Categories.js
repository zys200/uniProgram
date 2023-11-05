"use strict";
const common_vendor = require("../../../common/vendor.js");
const request_resInstance = require("../../../request/resInstance.js");
require("../../../request/index.js");
const _sfc_main = {
  __name: "Categories",
  setup(__props, { expose }) {
    let categotyData = common_vendor.ref([]);
    const getCategoryData = function() {
      request_resInstance.getCategory().then((res) => {
        categotyData.value = res.result;
      });
    };
    const resetCategory = function() {
      categotyData.value = [];
    };
    common_vendor.onMounted(() => {
      getCategoryData();
    });
    expose({
      resetCategory,
      getCategoryData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(categotyData), (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-75541714"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/index/components/Categories.vue"]]);
wx.createComponent(Component);
