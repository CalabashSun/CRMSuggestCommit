import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import {post,fetch} from './api/http'
import {encodeUnicode} from './utils/encodeToGb2312'
import App from './App.vue'
import router from "./router";

const app = createApp(App)
app.use(router)

app.use(ElementPlus)
app.config.globalProperties.$post=post
app.config.globalProperties.$fetch=fetch
app.config.globalProperties.$encodeUnicode=encodeUnicode;

app.mount('#app')
