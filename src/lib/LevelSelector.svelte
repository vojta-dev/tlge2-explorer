<script>
  import { levelNumber, MAX_LEVEL_NUMBER } from './stores.js';
</script>

<button on:click={() => ($levelNumber = Math.floor(Math.random() * $MAX_LEVEL_NUMBER) + 1)}>Random</button>
<div>
  <button on:click={() => $levelNumber--}>Prev</button>
  <input type="number" bind:value={$levelNumber} aria-label="Level number" />
  <button on:click={() => $levelNumber++}>Next</button>
</div>

<style>
  div {
    margin: 4px;
  }

  button,
  input {
    font-size: 1rem;
    padding: 0.5em 1em;
    user-select: none;
    width: 7rem;
    box-sizing: border-box;
  }

  input {
    /* width: 5em; */
    text-align: center;
  }

  /* https://stackoverflow.com/a/23715905 */
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
</style>
