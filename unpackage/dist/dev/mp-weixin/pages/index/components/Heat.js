"use strict";
const common_vendor = require("../../../common/vendor.js");
const request_resInstance = require("../../../request/resInstance.js");
require("../../../request/index.js");
const _sfc_main = {
  __name: "Heat",
  setup(__props, { expose }) {
    let heatData = common_vendor.ref([]);
    let toType = common_vendor.ref(-1);
    const getHeatData = function() {
      request_resInstance.getHeat().then((res) => {
        heatData.value = res.result;
      });
    };
    const resetHeat = function() {
      heatData.value = [];
    };
    common_vendor.onMounted(() => {
      getHeatData();
    });
    expose({
      resetHeat,
      getHeatData
    });
    const onChangeType = function(e) {
      toType.value = e.currentTarget.dataset.types;
      common_vendor.index.navigateTo({
        url: "/pages/hests/hests?id=" + toType.value
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(heatData), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.alt),
            c: common_vendor.f(item.pictures, (i, k1, i1) => {
              return {
                a: i,
                b: i.index
              };
            }),
            d: item.type,
            e: common_vendor.o(onChangeType, item.id),
            f: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5b7d3556"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/index/components/Heat.vue"]]);
wx.createComponent(Component);
