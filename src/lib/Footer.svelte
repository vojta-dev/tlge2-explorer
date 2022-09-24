<script>
  export let repoName;
</script>

<footer>
  <small>
    &copy; {new Date().getFullYear()} Vojta | <a href="https://github.com/vojta-dev/{repoName}">GitHub</a>
    <slot />
  </small>
</footer>

<style>
  footer {
    margin: 1rem 0;
    text-align: center;
  }

  footer :global(a) {
    color: #92eefa;
    text-decoration: none;
  }
</style>
