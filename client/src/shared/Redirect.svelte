<script>
  import { Route, navigate } from 'svelte-routing';
  import Redirect from './_redirect.svelte';
  
  export let path;
  export let to;

  let  match = false;

  $: if (match) {
    console.log('navigating');
    navigate(to, { replace: false });
  }
</script>

<Route {path}>
  <Redirect {to} />
</Route>