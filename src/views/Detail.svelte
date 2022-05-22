<p>The current page is: <b>{$location}</b></p>
<p>The querystring is: <b>{$querystring}</b></p>
<p>Your id is: <b>{params.id}</b> </p>
<script>
import { location, querystring } from 'svelte-spa-router'
// You need to define the component prop "params"
export let params = {}
</script>