import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';

//global component
import Paging from '@/components/Paging.vue';
import Table from '@/components/Table.vue';
import Image from '@/components/Image.vue';
import Editor from '@/components/Editor.vue';

import Notifications from '@kyvg/vue3-notification';

//bootstrap3(https://bootstrap-vue.org/)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

//vee-validate(https://vee-validate.logaretm.com/v4/guide/overview/)
import './utils/veevalidate';
import { setLocale } from '@vee-validate/i18n';
import { Field, Form, ErrorMessage, FieldArray } from 'vee-validate';
setLocale('ko');

//fontawesome(https://fontawesome.com/docs/web/use-with/vue/)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/utils/fontawesome';

//vuex
import { store } from '@/store/index';

//datepicker(https://vue3datepicker.com/)
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import TimePicker from '@/components/TimePicker.vue';

//vue-multiselect(https://vue-multiselect.js.org/)
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';

const app = createApp(App).use(router);

//vee-validate-component
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.component('FieldArray', FieldArray);

//global-component
app.component('Paging', Paging);
app.component('Table', Table);
app.component('TimePicker', TimePicker);
app.component('Image', Image);
app.component('Editor', Editor);

//font-awesome
app.component('FontAwesomeIcon', FontAwesomeIcon);

//date-picker
app.component('Datepicker', Datepicker);

//vue-multiselect libary
app.component('Multiselect', Multiselect);

//BootstrapVue3
app.use(BootstrapVue3);
//Notifications
app.use(Notifications);
//vuex
app.use(store);

app.mount('#app');
