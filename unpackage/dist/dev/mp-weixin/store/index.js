"use strict";
const common_vendor = require("../common/vendor.js");
const myStore = common_vendor.defineStore("main", () => {
  let token = common_vendor.ref("");
  const getToken = function() {
    common_vendor.index.getStorage({
      key: "userInfos",
      success(res) {
        token.value = res.data;
      }
    });
  };
  return {
    token,
    getToken
  };
});
exports.myStore = myStore;
