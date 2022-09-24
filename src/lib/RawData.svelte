<script>
  export let level;

  const KEYS = [
    ['TYPE_OF_LEVEL_EASY', 'ARGS_EASY', 'ENGLISH_EASY'],
    ['TYPE_OF_LEVEL', 'ARGS', 'ENGLISH'],
  ];
</script>

<table>
  {#each KEYS as table, i}
    {#each table as key, j}
      <tr>
        {#if j === 0}
          <td rowspan="3" class="nowrap">{i === 0 ? 'NORMAL' : 'HARD'}</td>
        {/if}
        <td class="nowrap">{key.replaceAll('_', ' ').replace('EASY', '')}</td>
        {#if level[key] !== ''}
          <td>{level[key]}</td>
        {:else}
          <td>-</td>
        {/if}
      </tr>
    {/each}
  {/each}
</table>

<style>
  table,
  td {
    border: 1px solid gray;
    border-collapse: collapse;
    padding: 1rem;
    margin: auto;
    text-align: initial;
  }

  .nowrap {
    white-space: nowrap;
    text-align: center;
  }
</style>
