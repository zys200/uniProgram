"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_form2 + _easycom_u_picker2)();
}
const _easycom_u_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_u_picker = () => "../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_form + _easycom_u_picker)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    const eventChannel = page.getOpenerEventChannel();
    let store = store_index.myStore();
    let nowGoodes = common_vendor.ref([]);
    let pishow = common_vendor.ref(false);
    let modelFrom = common_vendor.ref({
      userInfo: {
        address: ""
      }
    });
    let nowAddress = common_vendor.ref([
      []
    ]);
    let rules = {
      "userInfo.address": {
        type: "string",
        required: true,
        message: "请选择地址",
        trigger: ["blur", "change"]
      }
    };
    common_vendor.onMounted(() => {
      var _a;
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
      (_a = store.addressDataList) == null ? void 0 : _a.forEach((v) => {
        nowAddress.value[0].push(v.fullLocation);
      });
    });
    const confirm = function(e) {
      let { value } = e;
      modelFrom.value.userInfo.address = value[0];
      pishow.value = false;
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
        b: common_vendor.o(($event) => common_vendor.unref(modelFrom).userInfo.address = $event),
        c: common_vendor.p({
          placeholder: "请选择地址",
          disabled: true,
          border: "none",
          modelValue: common_vendor.unref(modelFrom).userInfo.address
        }),
        d: common_vendor.o(($event) => common_vendor.isRef(pishow) ? pishow.value = true : pishow = true),
        e: common_vendor.p({
          label: "地址",
          prop: "userInfo.address"
        }),
        f: common_vendor.sr("form1", "17a44f9d-0"),
        g: common_vendor.p({
          ["label-position"]: "left",
          model: common_vendor.unref(modelFrom),
          rules: common_vendor.unref(rules)
        }),
        h: common_vendor.o(confirm),
        i: common_vendor.p({
          show: common_vendor.unref(pishow),
          columns: common_vendor.unref(nowAddress)
        }),
        j: common_vendor.t()
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17a44f9d"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/order/index.vue"]]);
wx.createPage(MiniProgramPage);
