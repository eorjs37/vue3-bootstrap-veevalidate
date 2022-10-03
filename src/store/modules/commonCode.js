import _ from 'lodash';
const commonCode = {
  namespaced: true,
  state() {
    return {
      countryCode: [
        { value: 'KR', text: '대한민국' },
        { value: 'US', text: '미국' },
      ],
    };
  },
  getters: {
    /**
     * @description : 선택 포함
     */
    getCountryCode() {
      const cloneCountryCode = _.cloneDeep(commonCode.state().countryCode);
      cloneCountryCode.unshift({
        value: '',
        text: '-선택-',
      });
      return cloneCountryCode;
    },
    /**
     * @description : 전체 포함
     */
    getAllCountryCode() {
      const cloneCountryCode = _.cloneDeep(commonCode.state().countryCode);
      cloneCountryCode.unshift({
        value: '',
        text: '-전체-',
      });
      return cloneCountryCode;
    },
  },
  mutations: {},
  actions: {},
};

export { commonCode };
