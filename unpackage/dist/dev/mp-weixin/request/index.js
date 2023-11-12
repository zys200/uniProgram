"use strict";
const common_vendor = require("../common/vendor.js");
function instance(url, method, header, data) {
  return new Promise((resolve, rej) => {
    common_vendor.index.request({
      url: "https://pcapi-xiaotuxian-front-devtest.itheima.net" + url,
      timeout: 7e3,
      method,
      data,
      header: {
        "source-client": "miniapp",
        ...header
      },
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        rej(err);
      }
    });
  });
}
exports.instance = instance;
