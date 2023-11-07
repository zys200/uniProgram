"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
require("../../request/index.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  _easycom_uni_segmented_control2();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  _easycom_uni_segmented_control();
}
const _sfc_main = {
  __name: "hests",
  setup(__props) {
    let urls = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站全买", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    let types = common_vendor.ref();
    let hestsBannerList = common_vendor.ref([]);
    let hestsDataList = common_vendor.ref([]);
    let values = common_vendor.ref([]);
    let current = common_vendor.ref(true);
    let getGoods = common_vendor.ref([]);
    const onClickItem = async function(e) {
      var _a;
      getGoods.value = (_a = hestsDataList.value[0]) == null ? void 0 : _a.goodsItems;
      if (current.value !== e.currentIndex) {
        current.value = e.currentIndex;
      }
    };
    common_vendor.onMounted(() => {
      let instance = getCurrentPages();
      types.value = instance[1].options.id;
      urls.map((v) => {
        if (v.type == types.value) {
          request_resInstance.getPreference(v.url).then((res) => {
            hestsBannerList.value = res.result.bannerPicture;
            hestsDataList.value = res.result.subTypes.map((v2) => {
              values.value.push(v2.title);
              return {
                id: v2.id,
                title: v2.title,
                goodsItems: v2.goodsItems
              };
            });
          });
          return;
        }
      });
      onClickItem(0);
    });
    common_vendor.watch(current, (newVal) => {
      return getGoods.value = hestsDataList.value[newVal].goodsItems;
    });
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.unref(hestsBannerList),
        b: common_vendor.o(onClickItem),
        c: common_vendor.p({
          activeColor: "#d9b",
          current: common_vendor.unref(current),
          values: common_vendor.unref(values),
          styleType: "text"
        }),
        d: common_vendor.f((_a = common_vendor.unref(getGoods)) == null ? void 0 : _a.items, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.desc),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        e: common_vendor.unref(current) === 0 ? true : common_vendor.unref(current)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c1189d14"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/hests/hests.vue"]]);
wx.createPage(MiniProgramPage);
