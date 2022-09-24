<script>
  import Bubble from '../lib/Bubble.svelte';
  import { levels } from '../lib/stores.js';

  let query = '';
  let regexQuery;
  let error = false;

  $: {
    try {
      regexQuery = new RegExp(query, 'gi');
      error = false;
    } catch {
      error = true;
    }
  }

  $: results = $levels
    .filter((level) => level.ENGLISH_EASY.toLowerCase().includes(query.toLowerCase()))
    .map((level) => {
      const highlightedText = level.ENGLISH_EASY?.replaceAll(regexQuery, '<span class="highlight">$&</span>');
      return { ...level, ENGLISH_EASY: highlightedText };
    });
</script>

<textarea bind:value={query} placeholder="Search..." />

{#if error}
  <div class="info">There was an error with your query - your probably used some special characters</div>
{:else if query.length > 0}
  <div class="info">Found {results.length} level{results.length === 1 ? '' : 's'}</div>

  <div class="results">
    {#each results.slice(0, 50) as result}
      <b>Level {result.REAL_LEVEL}</b>
      <Bubble textData={result.ENGLISH_EASY} typeOfLevel={result.TYPE_OF_LEVEL_EASY} args={result.ARGS_EASY} />
    {/each}
  </div>
{/if}

<style>
  textarea {
    font-size: 1rem;
    padding: 0.5em;
    font-family: inherit;
    user-select: none;
  }

  .info {
    margin: 1.5rem 0;
    font-size: 1.25rem;
  }

  .results {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .results :global(.highlight) {
    background-color: yellow;
  }
</style>
