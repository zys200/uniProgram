"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_uni_goods_nav2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_uni_goods_nav)();
}
const _sfc_main = {
  __name: "car",
  setup(__props) {
    let store = store_index.myStore();
    let getToCar = common_vendor.ref([]);
    let checkeds = common_vendor.ref([]);
    let checkboxValue1 = common_vendor.ref();
    let totalPrices = common_vendor.ref(0);
    let customButtonGroup1 = [{
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff"
    }];
    common_vendor.onMounted(() => {
      getToCar.value = store.toCarGoods;
      console.log(store.toCarGoods);
    });
    const checkboxChange = function(e) {
      console.log(e, "现在选中");
      checkeds.value = e;
      getTotalPrices();
    };
    const getTotalPrices = function() {
      let sum = 0;
      let res = getToCar.value.filter((v) => {
        return checkeds.value.includes(v.id);
      });
      res.forEach((v) => {
        sum += v.price >>> 0 * v.count;
      });
      totalPrices.value = sum;
    };
    const toChangeCount = function(ids, c) {
    };
    const buttonClick = function() {
      console.log(1);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(getToCar), (item, index, i0) => {
          return {
            a: "b498d100-1-" + i0 + ",b498d100-0",
            b: common_vendor.o(($event) => item.selected = $event, item.id),
            c: common_vendor.p({
              name: item.id,
              modelValue: item.selected
            }),
            d: item.picture,
            e: common_vendor.t(item.name),
            f: common_vendor.t(item.specs[0].valueName),
            g: common_vendor.t(item.nowPrice * item.count),
            h: common_vendor.o(($event) => toChangeCount(item.id), item.id),
            i: common_vendor.t(item.count),
            j: common_vendor.o(($event) => toChangeCount(item.id), item.id),
            k: item.id
          };
        }),
        b: common_vendor.o(checkboxChange),
        c: common_vendor.o(($event) => common_vendor.isRef(checkboxValue1) ? checkboxValue1.value = $event : checkboxValue1 = $event),
        d: common_vendor.p({
          modelValue: common_vendor.unref(checkboxValue1)
        }),
        e: common_vendor.o(getTotalPrices),
        f: common_vendor.t(common_vendor.unref(totalPrices)),
        g: common_vendor.o(buttonClick),
        h: common_vendor.p({
          fill: true,
          ["button-group"]: common_vendor.unref(customButtonGroup1)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b498d100"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
