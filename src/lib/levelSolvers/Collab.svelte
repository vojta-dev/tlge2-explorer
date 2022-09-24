<script>
  import MD5 from 'crypto-js/md5';

  export let args;

  let pseudo = '';

  $: code = MD5(pseudo.toLowerCase() + args);
</script>

<div>
  <input bind:value={pseudo} placeholder="input your pseudo" />
  <div>answer <i>{code}</i></div>
</div>
