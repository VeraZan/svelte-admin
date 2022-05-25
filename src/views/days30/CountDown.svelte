<h1 class="text-2xl">{displayedValue}</h1>
{#if countDown === 0}
  <h1 class="text-4xl text-red-500">时间到！</h1>
{:else}
  <h1 class="text-4xl text-blue-500">倒计时中......</h1>
{/if}

<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte'

  let countDown = 10
  let timer = null
  
  $: displayedValue = `00:${countDown.toString().padStart(2, '0')}`

  onMount(() => {
    timer = setInterval(() => {
      countDown -= 1
    }, 1000);
  })

  afterUpdate(() => {
    if(countDown === 0) {
      if(timer) {
        clearInterval(timer)
      }
    }
  })

  onDestroy(() => {
    if(timer) {
      clearInterval(timer)
    }
  })
</script>