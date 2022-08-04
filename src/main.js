import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";

//bootstrap3
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

//vee-validate
import "./utils/veevalidate";
import { setLocale } from "@vee-validate/i18n";
import { Field, Form, ErrorMessage, FieldArray } from "vee-validate";
setLocale("en");

const app = createApp(App).use(router);

app.component("Field", Field);
app.component("Form", Form);
app.component("ErrorMessage", ErrorMessage);
app.component("FieldArray", FieldArray);

app.use(BootstrapVue3);
app.mount("#app");
