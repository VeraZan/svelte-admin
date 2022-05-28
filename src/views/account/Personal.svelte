<script>
  import './Personal.scss'
  import { FormField, TextField, RadioGroup } from 'attractions'
  import { User } from 'tabler-icons-svelte'

  let roles = [
    { value: 'admin', label: '管理员' },
    { value: 'visitor', label: '游客' }
  ]
  let infos = {
    userId: '001',
    userName: '张三',
    role: 'admin'
  }
</script>

<div class="personal-container">
  <FormField class="form-field-fit" name="用户名" help="不可修改">
    <TextField bind:value={infos.userName} name="userName" withItem readonly>
      <span class="item"><User size="18" /></span>
    </TextField>
  </FormField>
  <FormField class="form-field-fit" name="角色" required>
    <RadioGroup items={roles} bind:value={infos.role} name="roles" class="flex" />
  </FormField>
</div>