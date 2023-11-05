"use strict";
const common_vendor = require("../common/vendor.js");
function instance(url, method, data) {
  return new Promise((reslove, rej) => {
    common_vendor.index.request({
      url: "https://pcapi-xiaotuxian-front-devtest.itheima.net" + url,
      timeout: 7e3,
      method,
      data: {
        data
      },
      header: {
        "source-client": "miniapp"
        // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
      },
      success(res) {
        reslove(res.data);
      },
      fail(err) {
        rej(err);
      }
    });
  });
}
exports.instance = instance;
