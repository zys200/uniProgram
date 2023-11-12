"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_action_sheet2 + _easycom_u_button2)();
}
const _easycom_u_action_sheet = () => "../../uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_action_sheet + _easycom_u_button)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    const eventChannel = page.getOpenerEventChannel();
    let store = store_index.myStore();
    let nowGoodes = common_vendor.ref([]);
    let list = common_vendor.ref([{
      name: "选项一",
      subname: "选项一描述",
      color: "#ffaa7f",
      fontSize: "20"
    }, {
      name: "选项2",
      subname: "选项一描述",
      color: "#ffaa7f",
      fontSize: "20"
    }]);
    let title = "one";
    let show = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      eventChannel.on("goodes", (data) => {
        let datas = [];
        data.data.forEach((v, index) => {
          if (index % 2 !== 0) {
            datas.push(v);
          }
        });
        store.toCarGoods.forEach((v) => {
          if (datas.some((e) => e === v.id)) {
            nowGoodes.value.push(v);
          }
        });
      });
    });
    const isShow = function() {
      show.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(nowGoodes), (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: item.id
          };
        }),
        b: common_vendor.p({
          actions: common_vendor.unref(list),
          title: common_vendor.unref(title),
          show: common_vendor.unref(show),
          safeAreaInsetBottom: true,
          closeOnClickOverlay: false
        }),
        c: common_vendor.o(isShow),
        d: common_vendor.t()
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17a44f9d"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/order/index.vue"]]);
wx.createPage(MiniProgramPage);
