<script>
  import { afterUpdate, beforeUpdate, onMount } from 'svelte';
  import { levelNumber } from '../../lib/stores.js';

  export let text;

  export let correct = false;
  export let incorrectText = '';
  export let incorrectButtonText = '';

  export let type = '';
  export let args = '';

  let clickCounter;

  onMount(() => {
    if (type === 'click') clickCounter = args.split('##')[0];
  });

  function handleClick() {
    if (!correct) return alert(`${incorrectText}\n\n(${incorrectButtonText})`);

    if (type === '') {
      $levelNumber++;
    } else if (type === 'click') {
      clickCounter--;
      if (clickCounter < 1) {
        $levelNumber++;
      }
    }
  }
</script>

<button on:click={handleClick} class:correct>
  {text}
  {#if type === 'click'} <br /> ({clickCounter}) {/if}
</button>

<style>
  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    border: 2px solid gray;
    cursor: pointer;
  }

  .correct {
    background-color: lightgreen;
  }
</style>
