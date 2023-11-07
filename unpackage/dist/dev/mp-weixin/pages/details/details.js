"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
const store_index = require("../../store/index.js");
require("../../request/index.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_section2 + _easycom_uni_popup2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_popup + _easycom_uni_goods_nav)();
}
const _sfc_main = {
  __name: "details",
  setup(__props) {
    let goodsId = common_vendor.ref("");
    common_vendor.ref(0);
    let allGoodsDatas = common_vendor.ref({});
    let popup = common_vendor.ref(null);
    let name = common_vendor.ref("");
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
    let store = store_index.myStore();
    let toCarType = common_vendor.ref("");
    common_vendor.ref("");
    const getAllGoodsDatas = function() {
      let instance = getCurrentPages();
      goodsId.value = instance[1].options.id;
      console.log(goodsId.value);
      request_resInstance.getDoodsDetails(goodsId.value).then((res) => {
        allGoodsDatas.value = res.result;
      });
    };
    const open = function(val) {
      name.value = val;
      popup.value.open();
    };
    const onClick = function(e) {
      console.log(e);
    };
    const buttonClick = function(e) {
      toCarType.value = e.content.text;
      let header = common_vendor.ref({
        "Authorization": `${store.token}`
      });
      let datas = JSON.stringify({
        kuId: goodsId.value,
        count: 1
      });
      if (toCarType.value === "加入购物车") {
        request_resInstance.toCars(header.value, datas).then((res) => {
          console.log(res);
        });
      } else {
        console.log("购买");
      }
    };
    common_vendor.onMounted(() => {
      getAllGoodsDatas();
      store.getToken();
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(allGoodsDatas).mainPictures, (item, index, i0) => {
          return {
            a: item,
            b: item.index
          };
        }),
        b: common_vendor.t(common_vendor.unref(allGoodsDatas).price),
        c: common_vendor.t(common_vendor.unref(allGoodsDatas).name),
        d: common_vendor.t(common_vendor.unref(allGoodsDatas).desc),
        e: common_vendor.p({
          title: "规格",
          type: "line"
        }),
        f: common_vendor.o(($event) => open("1")),
        g: common_vendor.o(($event) => open("song")),
        h: common_vendor.o(($event) => open("sever")),
        i: common_vendor.unref(name) === "1"
      }, common_vendor.unref(name) === "1" ? {} : {}, {
        j: common_vendor.unref(name) === "song"
      }, common_vendor.unref(name) === "song" ? {} : {}, {
        k: common_vendor.unref(name) === "sever"
      }, common_vendor.unref(name) === "sever" ? {} : {}, {
        l: common_vendor.sr(popup, "4b799d2f-1", {
          "k": "popup"
        }),
        m: common_vendor.p({
          type: "bottom",
          ["mask-click"]: false,
          ["background-color"]: "#fff",
          ["is-mask-click"]: true
        }),
        n: common_vendor.p({
          title: "详情",
          type: "line"
        }),
        o: common_vendor.f((_a = common_vendor.unref(allGoodsDatas).details) == null ? void 0 : _a.pictures.slice(0, 3), (item, k0, i0) => {
          return {
            a: item,
            b: item.index
          };
        }),
        p: common_vendor.f((_b = common_vendor.unref(allGoodsDatas).details) == null ? void 0 : _b.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.index
          };
        }),
        q: common_vendor.p({
          title: "更多",
          type: "line"
        }),
        r: common_vendor.f(common_vendor.unref(allGoodsDatas).similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        s: common_vendor.o(onClick),
        t: common_vendor.o(buttonClick),
        v: common_vendor.p({
          options: common_vendor.unref(options),
          fill: true,
          ["button-group"]: common_vendor.unref(buttonGroup)
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b799d2f"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
