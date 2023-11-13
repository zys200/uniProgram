"use strict";
const common_vendor = require("../common/vendor.js");
const myStore = common_vendor.defineStore("main", () => {
  let token = common_vendor.ref("");
  let reID = common_vendor.ref("");
  let toCarGoods = common_vendor.ref([]);
  let addressDataList = common_vendor.ref([]);
  const getToken = function() {
    common_vendor.index.getStorage({
      key: "userInfos",
      success(res) {
        token.value = res.data;
      }
    });
  };
  const addGoods = function(val) {
    const index = toCarGoods.value.findIndex((v) => v.id === val.id);
    if (index !== -1) {
      toCarGoods.value[index] = val;
    } else {
      toCarGoods.value.push(val);
    }
  };
  return {
    token,
    reID,
    toCarGoods,
    addressDataList,
    getToken,
    addGoods
  };
});
exports.myStore = myStore;
