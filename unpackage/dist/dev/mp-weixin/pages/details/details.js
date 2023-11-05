"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
require("../../request/index.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_popup2 + _easycom_uni_section2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_section + _easycom_uni_goods_nav)();
}
const _sfc_main = {
  __name: "details",
  setup(__props) {
    let allGoodsDatas = common_vendor.ref({});
    let popup = common_vendor.ref(null);
    let options = common_vendor.ref([{
      icon: "chat",
      text: "客服"
    }, {
      icon: "shop",
      text: "店铺",
      info: 2,
      infoBackgroundColor: "#007aff",
      infoColor: "#f5f5f5"
    }, {
      icon: "cart",
      text: "购物车",
      info: 2
    }]);
    let buttonGroup = common_vendor.ref([
      {
        text: "加入购物车",
        backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
        color: "#fff"
      },
      {
        text: "立即购买",
        backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
        color: "#fff"
      }
    ]);
    const getAllGoodsDatas = function() {
      let instance = getCurrentPages();
      request_resInstance.getDoodsDetails(instance[1].options.id).then((res) => {
        allGoodsDatas.value = res.result;
      });
    };
    const open = function(e) {
      popup.value.open();
    };
    const onClick = function(e) {
      console.log(e);
    };
    const buttonClick = function(e) {
      console.log(e);
    };
    common_vendor.onMounted(() => {
      getAllGoodsDatas();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(allGoodsDatas).mainPictures, (item, index, i0) => {
          return {
            a: item,
            b: item.index
          };
        }),
        b: common_vendor.t(common_vendor.unref(allGoodsDatas).price),
        c: common_vendor.t(common_vendor.unref(allGoodsDatas).name),
        d: common_vendor.t(common_vendor.unref(allGoodsDatas).desc),
        e: common_vendor.sr(popup, "4b799d2f-0", {
          "k": "popup"
        }),
        f: common_vendor.p({
          type: "bottom",
          ["mask-click"]: false,
          ["background-color"]: "#fff",
          ["is-mask-click"]: true
        }),
        g: common_vendor.sr(popup, "4b799d2f-1", {
          "k": "popup"
        }),
        h: common_vendor.p({
          type: "bottom",
          ["mask-click"]: false,
          ["background-color"]: "#fff",
          ["is-mask-click"]: true
        }),
        i: common_vendor.sr(popup, "4b799d2f-2", {
          "k": "popup"
        }),
        j: common_vendor.p({
          type: "bottom",
          ["mask-click"]: false,
          ["background-color"]: "#fff",
          ["is-mask-click"]: true
        }),
        k: common_vendor.o(open),
        l: common_vendor.p({
          title: "详情",
          type: "line"
        }),
        m: common_vendor.f(common_vendor.unref(allGoodsDatas).details.pictures.slice(0, 3), (item, k0, i0) => {
          return {
            a: item,
            b: item.index
          };
        }),
        n: common_vendor.f(common_vendor.unref(allGoodsDatas).details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.index
          };
        }),
        o: common_vendor.p({
          title: "更多",
          type: "line"
        }),
        p: common_vendor.f(common_vendor.unref(allGoodsDatas).similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        q: common_vendor.o(onClick),
        r: common_vendor.o(buttonClick),
        s: common_vendor.p({
          options: common_vendor.unref(options),
          fill: true,
          ["button-group"]: common_vendor.unref(buttonGroup)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b799d2f"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
