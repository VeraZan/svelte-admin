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
<div class="w-full h-screen pt-14 flex flex-row overflow-hidden">
  <Aside name="我是侧边菜单栏" />
  <div class="flex-auto bg-gray-100 h-full p-3">
    <div class="w-full h-full bg-white p-3 overflow-auto">
      <!-- 这个是官方的链接跳转路由 -->
      <Router {routes}/>
    </div>    
  </div>
</div>
