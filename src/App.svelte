<script>
  import { levelNumber, advancedSettings } from './lib/stores.js';
  import Bubble from './lib/Bubble.svelte';
  import LevelSelector from './lib/LevelSelector.svelte';
  import RawData from './lib/RawData.svelte';
  import LevelInfo from './lib/LevelInfo.svelte';
  import { onMount } from 'svelte';
  import { DoubleBounce } from 'svelte-loading-spinners';
  import Footer from './lib/Footer.svelte';
  import Options from './lib/Options.svelte';

  let password = localStorage.getItem('password');
  let levels = [];
  let isLoading = true;

  $: level = getLevel($levelNumber);
  $: localStorage.setItem('password', password);

  onMount(async () => {
    if (!password) {
      password = prompt(
        'if you have finished normal mode in TLGE2 you can contact me on Discord for the password - Vojta#9179\n\nPASSWORD:'
      );
    }

    const response = await fetch('/api/get-db?password=' + password);
    const data = await response.json();
    levels = data.levels;

    if (!data.correctPassword) localStorage.removeItem('password');

    level = getLevel($levelNumber);

    isLoading = false;
  });

  const getLevel = (number) => levels.find((level) => level.REAL_LEVEL === number);
</script>

<main>
  <h1>TLGE2 Explorer</h1>

  <Options />
  <LevelSelector />

  <hr />

  {#if isLoading}
    <div class="loading">
      <DoubleBounce color="#1199ca" />
    </div>
  {:else if level === undefined}
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
</main>

<Footer repoName="tlge2-explorer" />

<style>
  :global(body) {
    margin: 0;
    color: white;
    background-color: #154252;
    font-family: Roboto, system-ui, -apple-system, sans-serif;
    text-align: center;
  }

  main {
    margin: auto;
    width: 90vw;
    padding-left: calc(100vw - 100%); /* https://stackoverflow.com/a/30293718 */
  }

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  hr {
    margin-top: 1rem;
    height: 1px;
    background-color: white;
    border: none;
  }

  h1 {
    font-weight: 300;
    font-size: 3rem;
  }

  h2 {
    font-weight: 300;
    font-size: 2rem;
  }
</style>
