"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
require("../../request/index.js");
if (!Math) {
  Testswiper();
}
const Testswiper = () => "../../components/Testswiper/Testswiper.js";
const _sfc_main = {
  __name: "more",
  setup(__props) {
    let txtValue = common_vendor.ref("");
    let categoryDataLeft = common_vendor.ref([]);
    let ids = common_vendor.ref("");
    let thisIds = common_vendor.ref();
    let bannerDatas = common_vendor.ref([]);
    let categotyDataRight = common_vendor.ref([]);
    let newCategory = common_vendor.ref([]);
    let errs = common_vendor.ref(false);
    const scrollInto = function(e) {
      ids.value = e.currentTarget.id;
      thisIds.value = e.currentTarget.id.slice(1) >>> 0;
    };
    common_vendor.onMounted(() => {
      request_resInstance.getBanner().then((res) => {
        bannerDatas.value = res.result;
      });
      request_resInstance.getCategory().then((res) => {
        categoryDataLeft.value = res.result;
      });
      request_resInstance.getCategoryMore().then((res) => {
        categotyDataRight.value = res.result;
        res.result.forEach((v) => {
          if (v.id >>> 0 === thisIds.value) {
            newCategory.value = v.children;
            return;
          }
        });
      });
    });
    common_vendor.watch(thisIds, (newVal) => {
      if (newVal) {
        categotyDataRight.value.map((v) => {
          if (v.id >>> 0 === newVal) {
            newCategory.value = v.children;
            return;
          }
        });
        return;
      } else {
        newCategory.value = [];
        errs.value = true;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(txtValue),
        b: common_vendor.o(($event) => common_vendor.isRef(txtValue) ? txtValue.value = $event.detail.value : txtValue = $event.detail.value),
        c: common_vendor.f(common_vendor.unref(categoryDataLeft), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: "a" + item.id,
            d: common_vendor.o(scrollInto, item.id)
          };
        }),
        d: common_vendor.unref(ids),
        e: common_vendor.p({
          swiperDatas: common_vendor.unref(bannerDatas)
        }),
        f: common_vendor.f(common_vendor.unref(newCategory), (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: item.index
          };
        }),
        g: common_vendor.unref(errs)
      }, common_vendor.unref(errs) ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ac368486"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/more/more.vue"]]);
wx.createPage(MiniProgramPage);
