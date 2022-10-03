const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {
        name: '',
        email: '',
        accessToken: '',
      },
    };
  },
  getters: {
    getUserInfo() {
      return user.state().userInfo;
    },
  },
  mutations: {},
  actions: {},
};

export { user };
