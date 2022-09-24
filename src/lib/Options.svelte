<script>
  import { advancedSettings } from '../lib/stores.js';

  let checked = localStorage.getItem('advanced') === '1';

  $: localStorage.setItem('advanced', checked ? '1' : '0');

  $: $advancedSettings = checked;
</script>

<div>
  <label>Advanced <input type="checkbox" bind:checked /></label>
</div>

<style>
  div {
    margin-bottom: 1rem;
  }
</style>
