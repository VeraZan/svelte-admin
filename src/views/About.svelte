<script>
  import { DatePicker, StarRating, FormField, TextField, Switch, Table, Button } from 'attractions'
  let rating = 3
  let happy = false

  const headers = [
    { text: 'First Name', value: 'firstName' },
    { text: 'Last Name', value: 'lastName' },
    { text: 'Age', value: 'age' },
    { text: '操作', value: 'operate', align: 'end' },
  ];
  const items = [
    { firstName: 'John', lastName: 'Doe', age: 694 },
    { firstName: 'Leo', lastName: 'Tolstoy', age: new Date().getFullYear() - 1828 },
    { firstName: 'فلان', lastName: 'الفلاني', age: 42 },
    { firstName: 'Иван', lastName: 'Иванов', age: 69 },
  ];
</script>

<style lang="scss">
.about-container {
  margin: 20px auto;
  width: 80%;
}
</style>

<div class="about-container">
  <FormField
    name="Main field"
    help="Write this and not that."
    required
  >
    <!-- <TextField /> -->
    <TextField outline label="标识" withItem itemRight>
      <span class="item">@</span>
    </TextField>
  </FormField>
  <FormField
    name="Secondary field"
    optional
  >
    <DatePicker format="%Y/%m/%d" />
  </FormField>
  <FormField
    name="Third field"
  >
    <StarRating name="rate" bind:value={rating} />
  </FormField>
  <FormField
    name="Happiness"
    errors={[happy && 'Not happy enough']}
  >
    <Switch bind:value={happy} />
  </FormField>

  <Table {headers} {items}>
    <div slot="header-item" let:header>
      {#if header.value !== 'operate'}
        {header.text}
      {:else}
        <span style="color: chocolate;">{header.text}</span>
      {/if}
    </div>
    <div slot="item" let:header let:item>
      {#if header.value !== 'operate'}
        {item[header.value]}
      {:else}
        <Button outline small on:click={() => { alert(JSON.stringify(item)) }}>详情</Button>
      {/if}
    </div>
  </Table>
</div>