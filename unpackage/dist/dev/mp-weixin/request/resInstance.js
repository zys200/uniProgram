"use strict";
const request_index = require("./index.js");
const getBanner = async function() {
  return await request_index.instance("/home/banner", "GET");
};
const getCategory = async function() {
  return await request_index.instance("/home/category/mutli", "GET");
};
const getHeat = async function() {
  return await request_index.instance("/home/hot/mutli", "GET");
};
const getRecommed = async function(pages) {
  return await request_index.instance(`/home/goods/guessLike?page=${pages}`, "GET");
};
const getPreference = async function(url) {
  return await request_index.instance(url, "GET");
};
const getCategoryMore = async function() {
  return await request_index.instance("/category/top", "GET");
};
const getDoodsDetails = async function(idd) {
  return await request_index.instance(`/goods?id=${idd}`, "GET");
};
const toCars = async function(header, datas) {
  return await request_index.instance("/member/cart", "POST", header, datas);
};
const login = async function(data) {
  return await request_index.instance("/login", "POST", data);
};
exports.getBanner = getBanner;
exports.getCategory = getCategory;
exports.getCategoryMore = getCategoryMore;
exports.getDoodsDetails = getDoodsDetails;
exports.getHeat = getHeat;
exports.getPreference = getPreference;
exports.getRecommed = getRecommed;
exports.login = login;
exports.toCars = toCars;
