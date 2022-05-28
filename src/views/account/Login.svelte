<script>
  import { TextField } from 'attractions'
  import { User, Lock } from 'tabler-icons-svelte'
  import { replace } from 'svelte-spa-router'

  let form = {
    userName: '张三',
    password: '123456'
  }

  const submit = () => {
    replace('/home')
  }
</script>

<div class="login-container w-full h-full flex flex-col justify-center items-center bg-gray-900">
  <p class="text-center text-4xl text-blue-400 font-bold italic antialiased uppercase mb-4">svelte admin</p>
  <div class="form-box w-1/4 px-6 py-8 rounded-md shadow-md bg-gradient-to-r from-white via-white to-blue-100 opacity-85">   
    <TextField bind:value={form.userName} outline label="用户" withItem class="mb-6">
      <span class="item"><User size="18" /></span>
    </TextField>
    <TextField bind:value={form.password} type="password" outline label="密码" withItem class="mb-6">
      <span class="item"><Lock size="18" /></span>
    </TextField>
    <button 
      on:click={submit}
      class="w-full py-2 text-blue-400 hover:text-white hover:bg-blue-400 border-2 border-blue-400 text-center font-extrabold rounded-lg"
    >
      登 录
    </button>
  </div>
</div>