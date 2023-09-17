import httpInstance from "@/utils/http"

// 获取banner的接口
export function getBannerAPI( params = {} ){
  const { distributionSite = '1'} = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}export const findNewAPI = () =>
 */
export function findNewAPI(){
  return httpInstance({
    url:'/home/new'
  })
}
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}