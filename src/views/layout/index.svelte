<script>
  // 主要处理的相关绑定
  import Router from "svelte-spa-router";
  import routes from "../../router/index.js";
  // 页面组件
  import Header from "./Header.svelte";
  import Aside from "./Aside.svelte";
  // 需要全屏展示的页面路径集合
  import { fullPageRoutes } from '../../stores/index.js'
  // 要去的页面路径
  let toRoute = ''

  const routeLoading = (event) => {
    toRoute = event.detail.route
  }
</script>

{#if $fullPageRoutes.indexOf(toRoute) === -1}
  <Header />
  <div class="w-full h-screen pt-14 flex flex-row overflow-hidden">
    <Aside name="我是侧边菜单栏" />
    <div class="flex-auto bg-gray-100 h-full p-3">
      <div class="w-full h-full bg-white p-3 overflow-auto">
        <!-- 这个是官方的链接跳转路由 -->
        <Router {routes} on:routeLoading={routeLoading}/>
      </div>    
    </div>
  </div>
{:else}
  <Router {routes} on:routeLoading={routeLoading}/>
{/if}

