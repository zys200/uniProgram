"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "car",
  setup(__props) {
    let getToCar = common_vendor.ref([]);
    common_vendor.PubSub.subscribe("toCar", (name, data) => {
      console.log(name, data);
      getToCar.value = data;
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b498d100"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
