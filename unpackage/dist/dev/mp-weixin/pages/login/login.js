"use strict";
const common_vendor = require("../../common/vendor.js");
const request_resInstance = require("../../request/resInstance.js");
require("../../request/index.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let userInfo = common_vendor.ref({
      account: "13123456789",
      password: "123456"
    });
    const tologin = function() {
      if (!userInfo.value) {
        console.log("请输入账号密码");
        return;
      }
      let agms = JSON.stringify(userInfo.value);
      request_resInstance.login(agms).then((res) => {
        console.log(res);
        if (res.code === "1") {
          console.log("登录成功,准备跳转!");
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
        }
      });
    };
    const orderLogin = function() {
      common_vendor.index.showToast({
        title: "暂时没更多登录方式",
        icon: "exception"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userInfo).account,
        b: common_vendor.o(($event) => common_vendor.unref(userInfo).account = $event.detail.value),
        c: common_vendor.unref(userInfo).password,
        d: common_vendor.o(($event) => common_vendor.unref(userInfo).password = $event.detail.value),
        e: common_vendor.o(tologin),
        f: common_vendor.o(orderLogin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/张东宇/Desktop/Hbuilder/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
