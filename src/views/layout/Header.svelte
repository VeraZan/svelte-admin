<div class="header w-full h-14 fixed flex flex-row justify-between bg-gray-900">
  <div class="left w-60 h-full text-center pt-2">
    <span class="logo text-2xl text-blue-400 font-bold italic antialiased uppercase">svelte admin</span>
  </div>
  <div class="right flex flex-row items-center pr-5">
    <!-- 切换语言按钮 -->
    {#each langs as item, index}
    <button 
      on:click={changeLang(item.key)} 
      class={`text-gray-100 hover:text-blue-400 border-gray-300 hover:border-blue-400 
      border-2 h-7 p-1 text-xs 
      ${index !== langs.length -1 ? 'mr-1' : ''} 
      ${activeLang === item.key ? 'border-blue-400' : ''}`}
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
          <li class="flex py-2 px-4 hover:text-blue-400 cursor-pointer">
            <span class="w-6 my-auto text-blue-300"><User size={18} /></span>个人信息
          </li>
          <li class="flex py-2 px-4 hover:text-blue-400 cursor-pointer">
            <span class="w-6 my-auto text-blue-300"><DoorExit size={18} /></span>退出登录
          </li>
        </ul>
      </Dropdown>
    </DropdownShell>
  </div>
</div>

<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { locale, getLocaleFromNavigator } from 'svelte-i18n';
  import { DropdownShell, Button, Dropdown } from 'attractions'
  import { User, DoorExit } from 'tabler-icons-svelte';
  import { getNotificationsContext } from 'svelte-notifications';

  const { addNotification } = getNotificationsContext();
  
  let userName = '张三'

  let activeLang = getLocaleFromNavigator()

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
    activeLang = lang
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
