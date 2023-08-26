<script>
  import Quote from './lib/quote.svelte';
</script>

<main>
  <h1>Epic Phrases</h1>
  <h2>
    Wealthy and famous individuals often make nonsensical
    statements. <br />
    <span>But sometimes they say really nice things</span>
  </h2>
  <Quote />
</main>

<style>
  h1,
  h2 {
    margin: 0;
    text-align: center;
  }
  h1 {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      135deg,
      #f2c511,
      #8e43ad
    );
    font-size: clamp(3rem, 7vw, 4rem);
  }
  h2 {
    font-size: clamp(1rem, 5vw, 2rem);
  }
  h2 span {
    color: #ff6347;
    position: relative;
  }
</style>
