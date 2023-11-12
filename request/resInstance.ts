import instance from './index'

//以下是首页和Hests
export const getBanner = async function () {
	return await instance('/home/banner', 'GET',)
}

export const getCategory = async function () {
	return await instance('/home/category/mutli', 'GET')
}

export const getHeat = async function () {
	return await instance('/home/hot/mutli', 'GET')
}

export const getRecommed = async function (pages : Number) {
	return await instance(`/home/goods/guessLike?page=${pages}`, 'GET')
}

export const getPreference = async function (url : string) {
	return await instance(url, 'GET')
}

//details
export const getCategoryMore = async function () {
	return await instance('/category/top', 'GET')
}

export const getDoodsDetails = async function (idd : string) {
	return await instance(`/goods?id=${idd}`, 'GET')
}

//login
export const login = async function (datas : Object | string) {
	return await instance('/login', 'POST', {}, datas)
}

export const testLogin = async function (data : Object) {
	return await instance('/login/wxMin/simple', 'POST', {}, data)
}

export const wxLogin = async function (data : Object) {
	return await instance('/login/wxMin', 'POST', {}, data)
}

export const reLogin = async function (header : Object, datas : Object) {
	return await instance('/login/refresh', 'PUT', header, datas)
}

//加入购物车
export const toCars = async function (header : Object, datas : Object) {
	return await instance('/member/cart', 'POST', header, datas)
}

export const changeCars = async function (skuId : String, header : Object, datas : Object) {
	return await instance(`/member/cart/?skuId=${skuId}`, 'PUT', header, datas)
}