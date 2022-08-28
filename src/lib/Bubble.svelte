<script>
  import Button from './bubble/Button.svelte';
  import Input from './bubble/Input.svelte';
  import Text from './bubble/Text.svelte';

  export let textData;
  export let typeOfLevel;
  export let args;

  $: sections = textData.replaceAll(new RegExp('@vibrate\\[.{1,9}\\]', 'mg'), '').split('##');
</script>

<div>
  {#if typeOfLevel === 'click'}
    <Text text={sections[0]} />
    <Button text={sections[1]} correct={true} type={typeOfLevel} {args} />
  {:else if typeOfLevel === 'question'}
    {#if !textData.includes('¦')}
      <Text text={sections[0]} />
      <Input correctValue={args} incorrectText={sections[1]} incorrectButtonText={sections[2]} />
    {:else}
      <Text text={sections[0]} />
      <input />
    {/if}
  {:else if typeOfLevel === 'wait'}
    <Text text={sections[0]} />
    <Button text={sections[1]} correct={true} />
  {:else}
    <Text text={sections[0]} />
  {/if}
</div>

<style>
  div {
    border: 2px solid gray;
    border-radius: 16px;
    background-color: white;
    color: black;
    width: fit-content;
    margin: auto;
    padding: 1rem;
    max-width: 1000px;
    white-space: pre-wrap;
  }
</style>
