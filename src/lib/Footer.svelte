<script>
  export let repoName;
  export let fields = [];
</script>

<footer>
  <small>
    &copy; {new Date().getFullYear()} Vojta | <a href="https://github.com/vojta-dev/{repoName}">GitHub</a>
    {#each fields as field}
      <a href={field[1]}>{field[0]}</a>
    {/each}
  </small>
</footer>

<style>
  footer {
    margin: 1rem 0;
    text-align: center;
  }

  footer a {
    color: #92eefa;
    text-decoration: none;
  }
</style>
