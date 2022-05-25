import { wrap } from "svelte-spa-router/wrap"
import formatRoutes from "./format"

let routes = {}
formatRoutes.forEach(item => {
  if(!item.children) {
    routes[item.path] = wrap({
      asyncComponent: () => import(/* @vite-ignore */item.source)
    })
  } else {
    item.children.forEach(childrenItem => {
      routes[childrenItem.path] = wrap({
        asyncComponent: () => import(/* @vite-ignore */childrenItem.source)
      })
    })
  }  
})

export default routes