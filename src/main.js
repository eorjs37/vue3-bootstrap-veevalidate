import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';
import Paging from '@/components/Paging.vue';
import Table from '@/components/Table.vue';
import Notifications from '@kyvg/vue3-notification';

//bootstrap3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

//vee-validate
import './utils/veevalidate';
import { setLocale } from '@vee-validate/i18n';
import { Field, Form, ErrorMessage, FieldArray } from 'vee-validate';
setLocale('ko');

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/utils/fontawesome';

const app = createApp(App).use(router);

//vee-validate-component
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.component('FieldArray', FieldArray);

//global-component
app.component('Paging', Paging);
app.component('Table', Table);

//font-awesome
app.component('FontAwesomeIcon', FontAwesomeIcon);

//BootstrapVue3
app.use(BootstrapVue3);
//Notifications
app.use(Notifications);
app.mount('#app');
