import { _carrotaxios } from '@/utils/carrotapiaxios';

const getBanner = () => {
  return _carrotaxios.get('/rest_free/phone/getBanner_home', {
    params: {
      page: 1,
      category: '이벤트',
    },
  });
};

export { getBanner };
