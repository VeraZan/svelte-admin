<div class="aside w-60 h-screen bg-gray-900 overflow-auto">
  <Accordion class="w-full h-full" let:closeOtherPanels>
    {#each paths as item}
      <AccordionSection on:panel-open={closeOtherPanels}>
        <div slot="handle" let:toggle>
          <span on:click={toggle} class="flex flex-row text-gray-50 py-2 px-3 cursor-pointer">
            {#if item.children}
            <span class="icon w-6 text-blue-300 m-auto">
              <svelte:component this={components[item.meta.icon]}  size={20} />
            </span>
            <span class="name flex-auto truncate">{item.meta.name}</span>
            <span class="text-gray-500 float-right w-5 pt-1"><ChevronRight size={18} /></span>
            {:else}
            <a href={handlePath(item)} use:link class="flex flex-row w-full hover:text-blue-400">
              <span class="icon w-6 text-blue-300 m-auto">
                <svelte:component this={components[item.meta.icon]}  size={20} />
              </span>
              <span class="name flex-auto truncate">{item.meta.name}</span>          
            </a>
            {/if}
          </span>
        </div>
        {#if item.children}
        <ul>
          {#each item.children as m}
          <li class="text-gray-300 px-9 py-1">
            <a href={handlePath(m)} use:link class="block hover:text-blue-400 truncate">{m.meta.name}</a>
          </li>
          {/each}
        </ul>
        {/if}
      </AccordionSection>     
    {/each}
  </Accordion>
</div>

<script>
  import { Accordion, AccordionSection } from 'attractions'
  import { ChevronRight, Home, List, Album } from 'tabler-icons-svelte'
  import formatPaths from '../../router/format';
  import { link } from 'svelte-spa-router';
  let paths = formatPaths.filter(item => {
    return item.children || item.path.indexOf('/') !== -1;
  })
  // 获取App.svelte传入的name值
  export let name = ''
  console.log(name)

  $: components = {
    Home, List, Album
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
</script>
