<script>
  import { levelNumber } from '../../lib/stores.js';

  export let correctValue;
  export let incorrectText;
  export let incorrectButtonText;

  let value = correctValue;

  function handleClick() {
    if (value === correctValue) $levelNumber++;
    else alert(`${incorrectText}\n\n(${incorrectButtonText})`);
  }
</script>

<input type="text" bind:value />
<button on:click={handleClick}>Confirm</button>
