import axios from "axios";
import qs from 'qs';
import {ElMessage} from "element-plus";
import router from "../router";

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api/' : 'https://business.jindouyuns.com/'
//post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
//允许跨域携带cookie信息
axios.defaults.withCredentials = true;
//设置超时
axios.defaults.timeout = 60000;
axios.interceptors.request.use(
  config => {
    config.headers['x-access-token'] = sessionStorage.getItem('token')
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
);

export default {
  baseURL:axios.defaults.baseURL,
  //获取assets静态文件路径
  getAssetsFile(url:string){
    return new URL(`../assets/${url}`, import.meta.url).href;
  },
  //适配vue2.0请求
  sendAjax(data,url:string) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(data),
      })
        .then(res => {
          switch (Number(res.data.code)) {
            case 0:
            case 200://检测到新版
              resolve(res.data);
              break;
            case -100:  // 独立版登陆入口
              router.push("/");
              break;
            default:
              ElMessage({
                type:'error',
                message:res.data.msg
              })
              break;
          }
        })
        .catch(err => {
          reject(err)
        });
    })
  }
};
