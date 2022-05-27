<div class="aside w-60 h-screen bg-gray-900 overflow-auto">
  <Accordion class="w-full h-full" let:closeOtherPanels>
    {#each paths as item}
      <AccordionSection 
        on:panel-open={closeOtherPanels} 
        open={openSection ? item.name === openSection.name : false}
      >
        <div slot="handle" let:toggle>
          <span on:click={toggle} class="flex flex-row text-gray-50 py-2 px-3 cursor-pointer">
            {#if item.children}
            <span class="icon w-6 text-blue-300 m-auto">
              <svelte:component this={components[item.meta.icon]}  size={20} />
            </span>
            <span class="name flex-auto truncate">{$_('menu.'+ item.name+'.title', { default: item.meta.name })}</span>
            <span class="text-gray-500 float-right w-5 pt-1"><ChevronRight size={18} /></span>
            {:else}
            <a 
              href={handlePath(item)} 
              use:link 
              use:active={{ path: handleActivePath(item.path), className: 'text-blue-400' }}
              class="flex flex-row w-full hover:text-blue-400"
            >
              <span class="icon w-6 text-blue-300 m-auto">
                <svelte:component this={components[item.meta.icon]}  size={20} />
              </span>
              <span class="name flex-auto truncate">{$_('menu.'+ item.name+'.title', { default: item.meta.name })}</span>          
            </a>
            {/if}
          </span>
        </div>
        {#if item.children}
        <ul>
          {#each item.children as m}
          <li class="text-gray-300 px-9 py-1">
            <a 
              href={handlePath(m)} 
              use:link 
              use:active={{ path: handleActivePath(m.path), className: 'text-blue-400' }}
              class="block hover:text-blue-400 truncate"
            >
              {$_('menu.'+ m.name+'.title', { default: m.meta.name })}
            </a>
          </li>
          {/each}
        </ul>
        {/if}
      </AccordionSection>     
    {/each}
  </Accordion>
</div>

<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { Accordion, AccordionSection } from 'attractions'
  import { ChevronRight, Home, List, Album } from 'tabler-icons-svelte'
  import { link, location } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import { parse } from 'regexparam';
  import formatPaths from '../../router/format';

  let paths = formatPaths.filter(item => {
    return item.children || item.path.indexOf('/') !== -1;
  })

  // 获取App.svelte传入的name值
  export let name = ''
  console.log(name)

  $: components = {
    Home, List, Album
  }

  let openSection = {}

  onMount(() => {
    openSection = formatPaths.find(item => {
      return fitOpen(item.children)
    })
  })

  // 子路由中匹配当前浏览器访问路径
  const fitOpen = (children) => {
    if(!children) {
      return false
    } else {
      const fitPath = children.find(m => {
        return parse(m.path).pattern.test($location);
      })
      return fitPath ? true : false
    }
  }

  // 处理路径
  const handlePath = (data) => {
    let path = data.path
    if(data.params) {
      for(let key in data.params) {
        path = path.replace(':' + key, data.params[key])
      }
    }
    if(data.query) {
      let queryArr = []
      for(let key in data.query) {
        queryArr.push(`${key}=${data.query[key]}`)
      }
      path = path + '?' + queryArr.join('&')
    }
    return path
  }

  // 处理高亮匹配路径
  const handleActivePath = (path) => {
    if(path.indexOf(':') !== -1) {
      let replacedPath = `${path}/`.replace(/:[^:|/]{0,}\//g, `*/`)
      return replacedPath.slice(0, replacedPath.length - 1)
    } else {
      return path
    }
  }
</script>
