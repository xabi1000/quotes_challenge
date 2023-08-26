<script>
  import { index } from '../stores/store.js';
  export let name, profession, sentence;

  const getSentenceLength = (num) => {
    return sentence.filter((_, i) => i <= num);
  };

  const next = () => {
    sentence.length - 1 > $index ? index.plus() : $index;
  };
  const prev = () => {
    $index > 0 ? index.minus() : $index;
  };
</script>

<section>
  <div class="container">
    <div class="wrapper">
      <div class="banner-image">{sentence[$index]}</div>
      <h1>
        {name.toUpperCase()}
      </h1>
      <p>{profession}</p>
    </div>
    <div class="button-wrapper">
      <button on:click={prev} class="btn outline"
        >Prev Qoute</button
      >
      <button on:click={next} class="btn outline"
        >Next Qoute</button
      >
    </div>
  </div>

  <h3 class="quote_length">
    {`${$index + 1}/${sentence.length}`}
  </h3>

  <ul>
    {#each getSentenceLength($index) as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>

<style>
  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 2em;
  }
  .container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.25);
    border-radius: 11px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 38px;
    filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 361px;
    width: 20%;
    max-width: 451px;
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }

  .banner-image {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    display: grid;
    place-items: center;
    padding: 1em 1.5em;
    font-size: 1.2em;
    height: 300px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.255);
  }

  h1 {
    font-family: 'Righteous', sans-serif;
    color: rgba(255, 255, 255, 0.98);
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 0.8rem;
    line-height: 150%;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .button-wrapper {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    width: 100%;
  }

  .btn {
    border: none;
    padding: 0.7em 1.1em;
    border-radius: 24px;
    font-size: 12px;
    font-size: 0.8rem;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .outline {
    background: transparent;
    color: rgba(0, 212, 255, 0.9);
    border: 1px solid rgba(0, 212, 255, 0.6);
    transition: all 0.3s ease;
  }

  .outline:hover {
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
  }

  .quote_length {
    align-self: center;
    font-size: clamp(1.5rem, 5vw, 3rem);
  }

  ul {
    min-width: 361px;
    max-width: 451px;
    width: 20%;
    min-height: 471px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 3rem;
    font-size: 1.3rem;
    border: 1px solid currentColor;
    padding: 0.5rem;
    border-radius: 11px;
    box-shadow: 0px -1px 7px 2px #ff6347;
  }
</style>
