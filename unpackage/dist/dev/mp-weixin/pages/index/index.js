"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
require("../../request/index.js");
if (!Array) {
  const _easycom_Testswiper2 = common_vendor.resolveComponent("Testswiper");
  const _easycom_TestRecommended2 = common_vendor.resolveComponent("TestRecommended");
  (_easycom_Testswiper2 + _easycom_TestRecommended2)();
}
const _easycom_Testswiper = () => "../../components/Testswiper/Testswiper.js";
const _easycom_TestRecommended = () => "../../components/TestRecommended/TestRecommended.js";
if (!Math) {
  (Top + _easycom_Testswiper + Categories + Heat + _easycom_TestRecommended)();
}
const Top = () => "./components/Top.js";
const Categories = () => "./components/Categories.js";
const Heat = () => "./components/Heat.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let { screenHeight, safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    let swiperDatas = common_vendor.ref([]);
    let childCategories = common_vendor.ref(null);
    let childHeats = common_vendor.ref(null);
    let recommedData = common_vendor.ref([]);
    let isFlesh = common_vendor.ref(false);
    let pages = common_vendor.ref(1);
    let goon = common_vendor.ref(0);
    let flesh = common_vendor.ref(false);
    const onRefresherrefresh = async function() {
      var _a, _b, _c, _d;
      isFlesh.value = true;
      (_a = childCategories.value) == null ? void 0 : _a.resetCategory();
      (_b = childHeats.value) == null ? void 0 : _b.resetHeat();
      await Promise.all([
        request_resInstance.getBanner(),
        request_resInstance.getRecommed(pages.value),
        (_c = childCategories.value) == null ? void 0 : _c.getCategoryData(),
        (_d = childHeats.value) == null ? void 0 : _d.getHeatData()
      ]);
      isFlesh.value = false;
    };
    const onScrolltolower = function() {
      flesh.value = true;
      if (goon.value < pages.value) {
        flesh.value = false;
        return;
      }
      request_resInstance.getRecommed(pages.value++).then((res) => {
        recommedData.value.push(...res.result.items);
        flesh.value = false;
      });
    };
    common_vendor.onMounted(() => {
      request_resInstance.getBanner().then((res) => {
        swiperDatas.value = res.result;
      });
      request_resInstance.getRecommed(pages.value).then((res) => {
        recommedData.value = [...res.result.items];
        goon.value = Math.floor(res.result.pages / 10);
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isFlesh)
      }, common_vendor.unref(isFlesh) ? {} : {}, {
        b: common_vendor.p({
          swiperDatas: common_vendor.unref(swiperDatas)
        }),
        c: common_vendor.sr(childCategories, "1cf27b2a-2", {
          "k": "childCategories"
        }),
        d: common_vendor.p({
          recommedData: common_vendor.unref(recommedData),
          flesh: common_vendor.unref(flesh)
        }),
        e: common_vendor.o(onScrolltolower),
        f: common_vendor.unref(screenHeight) - common_vendor.unref(safeAreaInsets).top - 20 + "px",
        g: common_vendor.o(onRefresherrefresh),
        h: common_vendor.unref(isFlesh)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
