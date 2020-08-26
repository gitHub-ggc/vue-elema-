import Vue from "vue";
import vant from "vant";
import 'vant/lib/index.css';
import { Tabbar, TabbarItem,} from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem)
Vue.use(vant)

export default vant;