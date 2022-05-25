<div class="header w-full h-14 fixed flex flex-row justify-between bg-gray-900">
  <div class="left w-60 h-full text-center pt-2">
    <span class="logo text-2xl text-blue-400 font-bold italic antialiased uppercase">svelte admin</span>
  </div>
  <div class="right pr-5">
    <DropdownShell let:toggle>
      <Button on:click={toggle}>
        <span class="text-gray-100">登录用户：{userName}</span>
      </Button>
      <Dropdown right class="rounded">
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
  import { DropdownShell, Button, Dropdown } from 'attractions'
  import { User, DoorExit } from 'tabler-icons-svelte'

  let userName = '张三'
</script>
