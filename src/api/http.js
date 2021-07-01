import axios from 'axios';
import qs from 'qs'

axios.defaults.baseURL="https://wx.dongdongmm.com/xwx/"
//http request 拦截器
axios.interceptors.request.use(
  config => {
    if(config.headers.dataType&&config.headers.dataType==="json"){
    }else{
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
}
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
}
