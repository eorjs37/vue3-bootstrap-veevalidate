let mainAPi = '';
let carrotApi = '';

if (location.origin.includes('local')) {
  mainAPi = 'https://biggunsite.co.kr';
  carrotApi = 'https://www.carrotenglish.kr';
} else {
  mainAPi = 'https://biggunsite.co.kr';
  carrotApi = 'https://www.carrotenglish.kr';
}

export { mainAPi, carrotApi };
