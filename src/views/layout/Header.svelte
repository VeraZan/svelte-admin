<div class="header w-full h-14 fixed flex flex-row justify-between bg-gray-900">
  <div class="left w-60 h-full text-center pt-2">
    <span class="logo text-2xl text-blue-400 font-bold italic antialiased uppercase">svelte admin</span>
  </div>
  <div class="right flex flex-row items-center pr-5">
    <!-- 切换语言按钮 -->
    {#each langs as item, index}
    <button 
      on:click={changeLang(item.key)} 
      class={`hover:text-blue-500 hover:border-blue-500 
      border-2 h-7 p-1 text-xs 
      ${index !== langs.length -1 ? 'mr-1' : ''} 
      ${$locale === item.key ? 'text-blue-400 border-blue-400' : 'text-gray-100 border-gray-300'}`}
    >
      {item.name}
    </button> 
    {/each}
    <!-- 登录用户管理 -->
    <DropdownShell let:toggle>
      <Button on:click={toggle}>
        <span class="text-gray-100">登录用户：{userName}</span>
      </Button>
      <Dropdown right>
        <ul>
          <li class="py-2 px-4 hover:text-blue-400 cursor-pointer">
            <a href={'/personal'} use:link class="flex">
              <span class="w-6 my-auto text-blue-300"><User size={18} /></span>个人信息
            </a>
          </li>
          <li class="flex py-2 px-4 hover:text-blue-400 cursor-pointer">
            <a on:click|preventDefault={() => replace('/')} href class="flex">
              <span class="w-6 my-auto text-blue-300"><DoorExit size={18} /></span>退出登录
            </a>
          </li>
        </ul>
      </Dropdown>
    </DropdownShell>
  </div>
</div>

<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { locale, getLocaleFromNavigator } from 'svelte-i18n';
  import { link, replace } from 'svelte-spa-router';
  import { DropdownShell, Button, Dropdown } from 'attractions'
  import { User, DoorExit } from 'tabler-icons-svelte';
  import { getNotificationsContext } from 'svelte-notifications';

  const { addNotification } = getNotificationsContext();
  
  let userName = '张三'

  const langs = [
    {
      key: 'en',
      name: 'EN'
    },
    {
      key: 'zh-CN',
      name: '中文'
    }
  ]

  const dispatch = createEventDispatcher()

  const unsuscribeLangChange = locale.subscribe(lang => {
    if (lang) {
      dispatch('language-change', lang)
    }
  })

  const changeLang = lang => () => {
    locale.set(lang)
    addNotification({
      text: '作者很懒，只翻译了左侧菜单栏',
      type: 'warning',
      position: 'top-center',
      removeAfter: 2000
    })
  }

  onDestroy(() => {
    unsuscribeLangChange()
  })
</script>
