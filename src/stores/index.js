import { readable } from 'svelte/store';

// 需要全屏展示的页面路径集合
export const fullPageRoutes = readable(['/', '*'])