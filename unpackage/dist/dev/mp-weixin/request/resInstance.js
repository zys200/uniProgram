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
const login = async function(datas) {
  return await request_index.instance("/login", "POST", {}, datas);
};
const reLogin = async function(header, datas) {
  return await request_index.instance("/login/refresh", "PUT", header, datas);
};
const toCars = async function(header, datas) {
  return await request_index.instance("/member/cart", "POST", header, datas);
};
const getAddress = async function(header) {
  return await request_index.instance("/member/address", "GET", header);
};
exports.getAddress = getAddress;
exports.getBanner = getBanner;
exports.getCategory = getCategory;
exports.getCategoryMore = getCategoryMore;
exports.getDoodsDetails = getDoodsDetails;
exports.getHeat = getHeat;
exports.getPreference = getPreference;
exports.getRecommed = getRecommed;
exports.login = login;
exports.reLogin = reLogin;
exports.toCars = toCars;
