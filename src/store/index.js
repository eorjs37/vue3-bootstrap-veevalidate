import { createStore } from 'vuex';
import { commonCode } from '@/store/modules/commonCode';
import { user } from '@/store/modules/userInfo';
const store = createStore({
  modules: {
    commonCode: commonCode,
    user: user,
  },
});

export { store };
