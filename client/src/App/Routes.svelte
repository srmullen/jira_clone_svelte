<script>
  import { Router, Route } from 'svelte-routing';
  import Redirect from '../shared/Redirect.svelte';
  import Project from '../Project/Project.svelte';
  import Authenticate from '../Auth/Authenticate.svelte';
</script>

<Router>
  <Redirect path="/" to="/project" />
  <Route path="/authenticate">
    <Authenticate />
  </Route>
  <Route path="/project">
    <Project />
  </Route>
  <Route>
    <h1>404</h1>
  </Route>
</Router>