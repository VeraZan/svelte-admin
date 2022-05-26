import formatRoutes from "./format"

const libs = import.meta.globEager('../views/**')

let routes = {}
formatRoutes.forEach(item => {
  if(!item.children) {
    routes[item.path] = libs[item.source].default
  } else {
    item.children.forEach(childrenItem => {
      routes[childrenItem.path] = libs[childrenItem.source].default
    })
  }  
})

export default routes