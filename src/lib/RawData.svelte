<script>
  export let level;
</script>

<table>
  {#each Object.keys(level) as key}
    <tr>
      <td>{key}</td>
      <td>{level[key]}</td>
    </tr>
  {/each}
</table>

<style>
  table,
  td {
    border: 1px solid gray;
    border-collapse: collapse;
    padding: 1rem;
    margin: auto;
  }
</style>
