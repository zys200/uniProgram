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
    let types = common_vendor.ref(0);
    let hestsDataList = common_vendor.ref("");
    let hestsDataLists = common_vendor.ref([]);
    let values = common_vendor.ref([]);
    let current = common_vendor.ref(0);
    let getGoods = common_vendor.ref([]);
    let urls = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站全买", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    const onClickItem = function(e) {
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
            hestsDataList.value = res.result.bannerPicture;
            hestsDataLists.value = res.result.subTypes.map((v2) => {
              return {
                id: v2.id,
                title: v2.title,
                goodsItems: v2.goodsItems
              };
            });
            hestsDataLists.value.forEach((v2) => {
              values.value.push(v2.title);
            });
          });
          return;
        }
      });
    });
    common_vendor.watch(current, (newVal) => {
      return getGoods.value = hestsDataLists.value[newVal].goodsItems;
    }, { deep: true });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(hestsDataList),
        b: common_vendor.o(onClickItem),
        c: common_vendor.p({
          activeColor: "#d9b",
          current: common_vendor.unref(current),
          values: common_vendor.unref(values),
          styleType: "text"
        }),
        d: common_vendor.f(common_vendor.unref(getGoods).items, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.desc),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        e: common_vendor.unref(current)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c1189d14"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/hests/hests.vue"]]);
wx.createPage(MiniProgramPage);
