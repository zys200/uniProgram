"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
const store_index = require("../../store/index.js");
require("../../request/index.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_section2 + _easycom_uni_goods_nav2 + _easycom_uni_popup2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_goods_nav + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "details",
  setup(__props) {
    let goodsId = common_vendor.ref("");
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
    let chooses = common_vendor.ref("");
    common_vendor.ref([]);
    let goods = common_vendor.ref({});
    let goodsSpecs = common_vendor.ref([]);
    let goodsSkus = common_vendor.ref([]);
    let goodsCategoty = common_vendor.ref([]);
    let dynamicGoods = common_vendor.ref([
      { name1: "", pic: "" },
      { name2: "" }
    ]);
    let count = common_vendor.ref(0);
    let realyId = common_vendor.ref("");
    const getAllGoodsDatas = function() {
      let instance = getCurrentPages();
      goodsId.value = instance[1].options.id;
      request_resInstance.getDoodsDetails(goodsId.value).then((res) => {
        allGoodsDatas.value = res.result;
      });
    };
    const findGoods = function() {
      goodsSpecs.value.forEach((v) => {
        goodsCategoty.value.push({
          id: v.id,
          name: v.name,
          valuse: v.values
        });
      });
    };
    const getGood = function() {
      request_resInstance.getDoodsDetails(goodsId.value).then((res) => {
        goodsSkus.value = res.result.skus;
        goods.value = res.result.skus[0];
        goodsSpecs.value = res.result.specs;
        findGoods();
      });
    };
    const realyGoods = function(e) {
      e.target.id;
      let ix = e.currentTarget.dataset.index >>> 0;
      let i = e.currentTarget.dataset.index2 >>> 0;
      if (ix == 0) {
        dynamicGoods.value[0].name1 = goodsSpecs.value[0].values[i].name;
        dynamicGoods.value[0].pic = goodsSpecs.value[0].values[i].picture;
      } else if (ix == 1) {
        dynamicGoods.value[1].name2 = goodsSpecs.value[1].values[i].name;
      }
    };
    const toComputed = function(c) {
      if (c === "ad") {
        count.value += 1;
        return;
      } else if (c === "j" && count.value !== 0) {
        count.value -= 1;
        return;
      } else {
        count.value = 0;
        return;
      }
    };
    const realyID = function() {
      if (dynamicGoods.value[0].name1 !== "") {
        goodsSkus.value.forEach((v) => {
          console.log(dynamicGoods.value);
          if (v.specs[0].valueName === dynamicGoods.value[0].name1 && count.value !== 0) {
            realyId.value = v.id;
            return;
          } else {
            common_vendor.index.showToast({
              icon: "error",
              title: "失败了！！"
            });
            return;
          }
        });
      } else {
        common_vendor.index.showToast({
          icon: "error",
          title: "请选择商品!"
        });
      }
    };
    const open = function(val) {
      name.value = val;
      getGood();
      popup.value.open();
    };
    const onClick = function(e) {
      console.log(e);
    };
    const buttonClick = function(e) {
      realyID();
      toCarType.value = e.content.text;
      let header = common_vendor.ref({
        "Authorization": `${store.token}`
      });
      let datas = JSON.stringify({
        skuId: realyId.value,
        count: count.value
      });
      if (toCarType.value === "加入购物车") {
        request_resInstance.toCars(header.value, datas).then((res) => {
          console.log(res.result);
          common_vendor.PubSub.publish("toCar", res.result);
          common_vendor.index.showToast({
            icon: "success",
            title: "好的,已添加到购物车"
          });
        });
      } else {
        console.log("购买");
      }
      while (popup.value.close()) {
        dynamicGoods.value = [{ name1: "", pic: "" }, { name2: "" }];
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
        f: common_vendor.t(common_vendor.unref(chooses)),
        g: common_vendor.o(($event) => open("1")),
        h: common_vendor.o(($event) => open("song")),
        i: common_vendor.o(($event) => open("sever")),
        j: common_vendor.unref(name) === "1"
      }, common_vendor.unref(name) === "1" ? {
        k: common_vendor.unref(goods).picture,
        l: common_vendor.t(common_vendor.unref(goods).price * common_vendor.unref(count)),
        m: common_vendor.t(common_vendor.unref(goods).inventory),
        n: common_vendor.t(common_vendor.unref(dynamicGoods)[0].name1),
        o: common_vendor.t(common_vendor.unref(dynamicGoods)[1].name2),
        p: common_vendor.f(common_vendor.unref(goods).specs, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(common_vendor.unref(goodsCategoty)[index].valuse, (i, d, i1) => {
              return {
                a: common_vendor.t(i.name),
                b: i.d,
                c: d,
                d: common_vendor.o(realyGoods, i.d)
              };
            }),
            c: index,
            d: common_vendor.unref(goodsCategoty)[index].id,
            e: item.index
          };
        }),
        q: common_vendor.o(($event) => toComputed("j")),
        r: common_vendor.t(common_vendor.unref(count)),
        s: common_vendor.o(($event) => toComputed("ad")),
        t: common_vendor.o(buttonClick),
        v: common_vendor.p({
          fill: true,
          ["button-group"]: common_vendor.unref(buttonGroup)
        })
      } : {}, {
        w: common_vendor.unref(name) === "song"
      }, common_vendor.unref(name) === "song" ? {} : {}, {
        x: common_vendor.unref(name) === "sever"
      }, common_vendor.unref(name) === "sever" ? {} : {}, {
        y: common_vendor.sr(popup, "4b799d2f-1", {
          "k": "popup"
        }),
        z: common_vendor.p({
          type: "bottom",
          ["mask-click"]: false,
          ["background-color"]: "#fff",
          ["is-mask-click"]: true
        }),
        A: common_vendor.p({
          title: "详情",
          type: "line"
        }),
        B: common_vendor.f((_a = common_vendor.unref(allGoodsDatas).details) == null ? void 0 : _a.pictures.slice(0, 3), (item, k0, i0) => {
          return {
            a: item,
            b: item.index
          };
        }),
        C: common_vendor.f((_b = common_vendor.unref(allGoodsDatas).details) == null ? void 0 : _b.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.index
          };
        }),
        D: common_vendor.p({
          title: "更多",
          type: "line"
        }),
        E: common_vendor.f(common_vendor.unref(allGoodsDatas).similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        F: common_vendor.o(onClick),
        G: common_vendor.o(buttonClick),
        H: common_vendor.p({
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
