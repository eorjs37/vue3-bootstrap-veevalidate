import { configure, defineRule } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import ko from '@vee-validate/i18n/dist/locale/ko.json';

// Install all rules
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

/* custom rules */
/**
 *
 * @description : 파일 사이즈 체크
 */
defineRule('filecheck', (value, _, { field }) => {
  if (!value) {
    return `${field}항목은 필수항목입니다.`;
  } else if (typeof value === 'object') {
    //MB 기준으로 계산한다. 1MB = 1024 ** 2
    const oneMb = 1024 ** 2;
    const limitMb = 5 * oneMb; //5MB

    const { size } = value;

    if (size > limitMb) {
      return `${field}항목은 5MB이하만 가능합니다.`;
    }
  }
  return true;
});

configure({
  generateMessage: localize({
    en: {
      messages: en.messages,
    },
    ko: {
      messages: ko.messages,
    },
  }),
});
