"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
const _sfc_main = {
  __name: "car",
  setup(__props) {
    let store = store_index.myStore();
    let getToCar = common_vendor.ref([]);
    common_vendor.ref("");
    common_vendor.ref([]);
    let cheakedAll = common_vendor.ref(true);
    let customButtonGroup1 = [{
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff"
    }];
    common_vendor.onMounted(() => {
      getToCar.value = store.toCarGoods;
      console.log(store.toCarGoods);
    });
    const cheakAll = function(e) {
      cheakedAll.value = !cheakedAll.value;
    };
    const checkboxChange = function(e) {
      console.log(e);
    };
    const toChangeCount = function(ids, c) {
    };
    const buttonClick = function() {
      console.log(1);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(cheakedAll),
        b: common_vendor.o(cheakAll),
        c: common_vendor.f(common_vendor.unref(getToCar), (item, k0, i0) => {
          return {
            a: item.selected,
            b: item.selected,
            c: item.picture,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.specs[0].valueName),
            f: common_vendor.t(item.nowPrice * item.count),
            g: common_vendor.o(($event) => toChangeCount(item.id), item.id),
            h: common_vendor.t(item.count),
            i: common_vendor.o(($event) => toChangeCount(item.id), item.id),
            j: item.id,
            k: item.id,
            l: item.id
          };
        }),
        d: common_vendor.o(checkboxChange),
        e: common_vendor.o(buttonClick),
        f: common_vendor.p({
          fill: true,
          ["button-group"]: common_vendor.unref(customButtonGroup1)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b498d100"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
