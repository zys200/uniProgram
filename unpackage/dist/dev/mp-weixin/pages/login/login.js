"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
const store_index = require("../../store/index.js");
require("../../request/index.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let store = store_index.myStore();
    let header = common_vendor.ref({
      Authorization: `${store.token}`
    });
    let userInfo = common_vendor.ref({
      account: "13123456789",
      password: "123456"
    });
    common_vendor.ref({
      phoneNumber: "13123456789"
    });
    common_vendor.ref({
      code: "",
      encryptedData: "",
      iv: ""
    });
    let reUserInfo = common_vendor.ref({
      account: "13123456789",
      id: ""
    });
    const tologin = function() {
      if (!userInfo.value) {
        console.log("请输入账号密码");
        return;
      }
      request_resInstance.login(userInfo.value).then((res) => {
        if (res.code === "1") {
          console.log("登录成功,准备跳转!");
          common_vendor.index.showToast({
            icon: "success",
            title: "登录成功!"
          });
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
          common_vendor.index.setStorage({
            key: "userInfos",
            data: res.result.token
          });
          return;
        } else if (res.code === "10017") {
          common_vendor.index.showToast({
            title: "账号或密码错误",
            icon: "error"
          });
          return;
        } else if (res.code === "17001") {
          console.log("账号不存在");
          return;
        } else if (res.code === "401") {
          request_resInstance.reLogin(header.value, reUserInfo.value).then((res2) => {
            console.log(res2);
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userInfo).account,
        b: common_vendor.o(($event) => common_vendor.unref(userInfo).account = $event.detail.value),
        c: common_vendor.unref(userInfo).password,
        d: common_vendor.o(($event) => common_vendor.unref(userInfo).password = $event.detail.value),
        e: common_vendor.o(tologin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
