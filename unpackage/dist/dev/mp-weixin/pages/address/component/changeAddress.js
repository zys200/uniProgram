"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_index = require("../../../store/index.js");
if (!Array) {
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_u__input2 + _easycom_u_form_item2 + _easycom_u_form2 + _easycom_u_button2 + _easycom_u_picker2)();
}
const _easycom_u__input = () => "../../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_u_button = () => "../../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_picker = () => "../../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (_easycom_u__input + _easycom_u_form_item + _easycom_u_form + _easycom_u_button + _easycom_u_picker)();
}
const _sfc_main = {
  __name: "changeAddress",
  setup(__props) {
    let currentP = getCurrentPages();
    let store = store_index.myStore();
    let formaddress = common_vendor.ref(null);
    let modelFrom = common_vendor.ref({
      addressInfo: {
        nikename: "",
        phoneNum: "",
        city: "",
        details: ""
      }
    });
    let rules = {
      "addressInfo.nikename": {
        type: "string",
        required: true,
        trigger: ["blur", "change"]
      },
      "addressInfo.phoneNum": {
        type: "number",
        required: true,
        len: 11,
        message: "请填写正确的手机号",
        trigger: ["blur", "change"]
      },
      "addressInfo.city": {
        type: "string",
        required: true,
        trigger: ["blur", "change"]
      },
      "addressInfo.details": {
        type: "string",
        required: true,
        trigger: ["blur", "change"]
      }
    };
    let pishow = common_vendor.ref(false);
    let columns = common_vendor.reactive([
      ["中国"],
      ["深圳", "厦门", "上海", "拉萨"]
    ]);
    const getNowAddress = function() {
      let id = currentP[2].options.id;
      let res = store.addressDataList.find((v) => v.id === id);
      console.log(res.receiver);
      modelFrom.value.addressInfo.nikename = res.receiver;
    };
    const changeHandler = (e) => {
      const { value } = e;
      modelFrom.value.addressInfo.city = value.toString();
    };
    const confirm = function() {
      pishow.value = false;
    };
    const submit = function() {
      formaddress.value.validate().then((res, rej) => {
        console.log("tongguo");
      }, (rej) => {
        console.log("weitonguo");
        common_vendor.index.showToast({
          title: "校验未通过",
          icon: "error"
        });
      });
    };
    common_vendor.onMounted(() => {
      getNowAddress();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(modelFrom).addressInfo.nikename = $event),
        b: common_vendor.p({
          border: "none",
          modelValue: common_vendor.unref(modelFrom).addressInfo.nikename
        }),
        c: common_vendor.sr("item1", "ac28a024-1,ac28a024-0"),
        d: common_vendor.p({
          label: "姓名",
          prop: "addressInfo.nikename",
          borderBottom: true
        }),
        e: common_vendor.o(($event) => common_vendor.unref(modelFrom).addressInfo.phoneNum = $event),
        f: common_vendor.p({
          border: "none",
          modelValue: common_vendor.unref(modelFrom).addressInfo.phoneNum
        }),
        g: common_vendor.sr("item2", "ac28a024-3,ac28a024-0"),
        h: common_vendor.p({
          label: "电话",
          prop: "addressInfo.phoneNum",
          borderBottom: true
        }),
        i: common_vendor.o(($event) => common_vendor.unref(modelFrom).addressInfo.city = $event),
        j: common_vendor.p({
          border: "none",
          modelValue: common_vendor.unref(modelFrom).addressInfo.city
        }),
        k: common_vendor.sr("item3", "ac28a024-5,ac28a024-0"),
        l: common_vendor.o(($event) => common_vendor.isRef(pishow) ? pishow.value = true : pishow = true),
        m: common_vendor.p({
          label: "省份",
          prop: "addressInfo.city",
          borderBottom: true
        }),
        n: common_vendor.o(($event) => common_vendor.unref(modelFrom).addressInfo.details = $event),
        o: common_vendor.p({
          border: "none",
          modelValue: common_vendor.unref(modelFrom).addressInfo.details
        }),
        p: common_vendor.sr("item4", "ac28a024-7,ac28a024-0"),
        q: common_vendor.p({
          label: "详细",
          prop: "addressInfo.dsc",
          borderBottom: true
        }),
        r: common_vendor.sr(formaddress, "ac28a024-0", {
          "k": "formaddress"
        }),
        s: common_vendor.p({
          model: common_vendor.unref(modelFrom),
          rules: common_vendor.unref(rules)
        }),
        t: common_vendor.o(submit),
        v: common_vendor.sr("uPicker", "ac28a024-10"),
        w: common_vendor.o(confirm),
        x: common_vendor.o(changeHandler),
        y: common_vendor.p({
          show: common_vendor.unref(pishow),
          columns: common_vendor.unref(columns)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ac28a024"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/address/component/changeAddress.vue"]]);
wx.createPage(MiniProgramPage);
