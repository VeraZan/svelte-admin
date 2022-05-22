<ul class="aside w-52 h-auto">
  {#each paths as item, index}
    <li><span class="font-bold">{index}：</span><a href={item.path} use:link>{item.name}</a></li>
  {/each}
</ul>

<script>
  import { link } from 'svelte-spa-router';
  let paths = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'about',
      path: '/about'
    },
    {
      name: 'detail',
      path: '/about/12?order=1'
    }
  ]

  // 获取App.svelte传入的name值
  export let name = ''
  console.log(name)
</script>

<style lang="scss">
  .aside {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    > li {
      padding: 5px;
    }
  }
</style>
