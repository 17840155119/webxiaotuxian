// 定义了一个名为getCategoryAPI的函数通过调用httpInstance函数并传递一个对象作为参数来发送HTTP请求。
// 该对象具有一个url属性，值为'home/category/head'。最终，该函数返回了httpInstance函数的返回值。
// 简而言之，这段代码的作用是调用httpInstance函数向指定的URL发送HTTP请求，并返回请求的结果。
import httpInstance from "@/utils/http"

export  function getCategoryAPI(){
  return httpInstance({
    url: 'home/category/head'
    })
}