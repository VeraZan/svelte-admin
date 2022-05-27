import { init, addMessages, getLocaleFromNavigator } from 'svelte-i18n';

import en from './en.json';
import zh_CN from './zh_CN.json';

addMessages('en', en)
addMessages('zh-CN', zh_CN)

init({
  fallbackLocale: 'zh-CN',
  initialLocale: getLocaleFromNavigator()
});