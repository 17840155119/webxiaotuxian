import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner () {
// 获取banner
  const bannerList = ref([])
// action 获取导航数据的方法
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
  }
  onMounted(() => getBanner() )

  return {
    bannerList
  }
}
