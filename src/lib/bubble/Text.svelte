<script>
  export let text;
</script>

<p>{@html text.replaceAll('¦var', 'NUMBER')}</p>

<style>
  big {
    font-size: inherit;
    font-weight: bold;
  }
</style>
