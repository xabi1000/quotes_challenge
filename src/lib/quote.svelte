<script>
  import data from '../data/data.json';
  import { index } from '../stores/store';
  import RandomBtn from './random_btn.svelte';
  import CardQuote from './card_quote.svelte';

  let figure;
  function getRandomIndex() {
    index.reset();
    const randomIndex = Math.floor(
      Math.random() * data.length + 1 - 1
    );
    figure = data[randomIndex];
  }
</script>

<RandomBtn on:click={() => getRandomIndex()} />

<div class="quotes">
  {#if figure}
    <CardQuote {...figure} />
  {/if}
</div>
