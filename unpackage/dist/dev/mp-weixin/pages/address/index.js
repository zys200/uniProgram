"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const request_resInstance = require("../../request/resInstance.js");
require("../../request/index.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let store = store_index.myStore();
    let addressData = common_vendor.ref();
    common_vendor.onMounted(() => {
      let header = {
        Authorization: store.token
      };
      request_resInstance.getAddress(header).then((res) => {
        var _a;
        addressData.value = (_a = res.result) == null ? void 0 : _a.slice(0, 2);
        store.addressDataList = res.result.slice(0, 2);
      });
    });
    const toChangeAddress = function(e) {
      let ids = e.currentTarget.id;
      common_vendor.index.navigateTo({
        url: "/pages/address/component/changeAddress?id=" + ids
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(addressData), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: common_vendor.t(item.fullLocation + item.address),
            d: common_vendor.o(toChangeAddress, item.id),
            e: item.id,
            f: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c47feaaa"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/address/index.vue"]]);
wx.createPage(MiniProgramPage);
