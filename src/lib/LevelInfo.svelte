<script>
  export let args;
  export let typeOfLevel;
  export let textData;

  $: argsArray = args.split('##');
  $: textDataArray = textData.split('##');
</script>

<h3>
  to complete:
  {#if typeOfLevel === '' || typeOfLevel === 'speak'}
    click on the text
  {:else if typeOfLevel === 'click'}
    {#if args.includes('##')}
      click {argsArray[0]} times in {argsArray[1]} seconds ({Math.round(argsArray[0] / argsArray[1])} CPS)
    {:else}
      click {args} times
    {/if}
  {:else if typeOfLevel === 'clickinterval'}
    click {argsArray[0].replace('clicks=', '')} times every {argsArray[1].replace('clickIntervalDuration=', '')} seconds
  {:else if typeOfLevel === 'question'}
    {#if args !== ''}
      answer <i>{argsArray[0].replaceAll('¦var', 'NUMBER')}</i>
    {:else}
      copy the text from question
    {/if}
  {:else if typeOfLevel === 'wait'}
    wait for {args} seconds
  {:else if typeOfLevel === 'flyingStuff'}
    catch {argsArray[0].replace('objects=', '')} objects
  {:else if typeOfLevel === 'movingButton'}
    hold your finger on the object for {argsArray[0]} seconds
  {:else if typeOfLevel === 'taquin'}
    solve the {argsArray[0].replace('xSize=', '')}x{argsArray[1].replace('ySize=', '')} 15-puzzle
  {:else if typeOfLevel === 'buttonschoice'}
    click on the button
  {:else if typeOfLevel === 'bomberman'}
    bomberman ._.
  {:else if typeOfLevel === 'simon'}
    memorize a {argsArray[0].replace('length=', '')}-long sequence
  {:else if typeOfLevel === 'multipleButtons'}
    click on buttons
  {:else if typeOfLevel === 'youTubeQuestion'}
    answer <i>{args || textDataArray[2]}</i>
  {:else if typeOfLevel === 'move'}
    move {args} km ({args * 1000} m)
  {:else if typeOfLevel === 'moveToCoordinates'}
    move {argsArray[0]} km ({argsArray[0] * 1000} m) {[
      'north',
      'northeast',
      'east',
      'southeast',
      'south',
      'southwest',
      'west',
      'northwest',
    ][argsArray[1] / 45]}
  {:else if typeOfLevel === 'moreOrLess'}
    guess a random number from {argsArray[0]} to {argsArray[1]}
  {:else if typeOfLevel === 'flappyBird'}
    flappy bird .__.
  {/if}
</h3>
