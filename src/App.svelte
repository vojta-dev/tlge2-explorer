<script>
  import Explorer from './pages/Levels.svelte';
  import Footer from './lib/Footer.svelte';
  import Search from './pages/Search.svelte';
  import { onMount } from 'svelte';
  import { DoubleBounce } from 'svelte-loading-spinners';
  import { levels } from './lib/stores.js';

  let currentPage = 'levels';
  let password = localStorage.getItem('password');
  let isLoading = true;

  $: localStorage.setItem('password', password);

  onMount(async () => {
    if (!password) {
      password = prompt(
        'if you have finished normal mode in TLGE2, you can contact me on Discord for the password - Vojta#9179\n\nPASSWORD:'
      );
    }

    const response = await fetch('/api/get-db?password=' + password);
    const data = await response.json();
    $levels = data.levels;

    if (!data.correctPassword) localStorage.removeItem('password');

    isLoading = false;
  });
</script>

<main>
  <h1>TLGE2 Explorer</h1>

  <nav>
    <button on:click={() => (currentPage = 'levels')}>Levels</button>
    <button on:click={() => (currentPage = 'search')}>Search (Beta)</button>
    <!-- <button>Solvers</button> -->
  </nav>

  <hr />

  {#if isLoading}
    <div class="loading">
      <DoubleBounce color="#1199ca" />
    </div>
  {:else if currentPage === 'levels'}
    <Explorer />
  {:else if currentPage === 'search'}
    <Search />
  {/if}

  <Footer repoName="tlge2-explorer">
    | Data from <a href="https://play.google.com/store/apps/details?id=xyz.lesecureuils.longestgameever2">TLGE2</a>
  </Footer>
</main>

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

  h1 {
    font-weight: 300;
    font-size: 3rem;
  }

  nav button {
    font-size: 1rem;
    padding: 0.5em 1em;
    user-select: none;
    min-width: 7rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  hr {
    margin-top: 1rem;
    height: 1px;
    background-color: white;
    border: none;
  }

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
</style>
