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

//一下是more
export const getCategoryMore = async function () {
	return await instance('/category/top', 'GET')
}

export const getDoodsDetails = async function (idd : string) {
	return await instance(`/goods?id=${idd}`, 'GET')
}