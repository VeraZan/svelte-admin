<script>
  import './main.scss'
  // 主要处理的相关绑定
  import Router from "svelte-spa-router";
  import routes from "./router/index.js";
  // 页面组件
  import Header from "./views/layout/Header.svelte"
  import Aside from "./views/layout/Aside.svelte"
</script>

<Header />
<Aside name="测试组件传参" />
<!-- 这个是官方的链接跳转路由 -->
<Router {routes}/>