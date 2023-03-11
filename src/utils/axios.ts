import axios from 'axios'
import { Message } from '@arco-design/web-vue';
const baseURL = import.meta.env.VITE_API_URL

// 创建请求实例
const instance = axios.create({
  baseURL,
  // 请求超时 20s
  timeout: 20 * 1000
})
// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (response) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = localstorage.getItem(token) or ###
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      Message.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      Message.error(`${error}`)
    }
    return Promise.reject(error)
  },
);
export default instance