<script>
  import './main.scss'
  // 提示插件
  import Notifications from 'svelte-notifications';
  // 布局组件
  import Layout from './views/layout/index.svelte'
  // 国际化
  import "./i18n"
</script>

<Notifications>
  <Layout />
</Notifications>
