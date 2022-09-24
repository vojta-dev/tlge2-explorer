<script>
  import { levels, levelNumber, advancedSettings } from '../lib/stores.js';
  import Bubble from '../lib/Bubble.svelte';
  import LevelSelector from '../lib/LevelSelector.svelte';
  import RawData from '../lib/RawData.svelte';
  import LevelInfo from '../lib/LevelInfo.svelte';
  import Options from '../lib/Options.svelte';

  $: level = getLevel($levelNumber);

  const getLevel = (number) => $levels.find((level) => level.REAL_LEVEL === number);
</script>

<Options />
<LevelSelector />

<hr />

{#if level === undefined}
  <p>ERROR: Could not find this level</p>
{:else}
  <h2>Normal Mode</h2>
  <LevelInfo args={level.ARGS_EASY} typeOfLevel={level.TYPE_OF_LEVEL_EASY} textData={level.ENGLISH_EASY} />
  <Bubble textData={level.ENGLISH_EASY} typeOfLevel={level.TYPE_OF_LEVEL_EASY} args={level.ARGS_EASY} />

  <hr />

  <h2>Hard Mode</h2>
  <LevelInfo args={level.ARGS} typeOfLevel={level.TYPE_OF_LEVEL} textData={level.ENGLISH} />

  {#if level.ENGLISH !== level.ENGLISH_EASY || level.ARGS !== level.ARGS_EASY}
    <Bubble textData={level.ENGLISH} typeOfLevel={level.TYPE_OF_LEVEL} args={level.ARGS} />
  {:else}
    <p>(Same as normal mode)</p>
  {/if}

  {#if $advancedSettings}
    <hr />
    <h2>Raw Data</h2>
    {#if level !== undefined}
      <RawData {level} />
    {/if}
  {/if}
{/if}

<style>
  :global(body) {
    margin: 0;
    color: white;
    background-color: #154252;
    font-family: Roboto, system-ui, -apple-system, sans-serif;
    text-align: center;
  }

  hr {
    margin-top: 1rem;
    height: 1px;
    background-color: white;
    border: none;
  }

  h2 {
    font-weight: 300;
    font-size: 2rem;
  }
</style>
