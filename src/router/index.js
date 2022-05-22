import { wrap } from "svelte-spa-router/wrap"
import formatRoutes from "./format"

let routes = {}
formatRoutes.forEach(item => {
  routes[item.path] = wrap({
    asyncComponent: () => import(/* @vite-ignore */item.source)
  })
})

export default routes