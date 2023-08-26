import { writable } from 'svelte/store';

function getIndex() {
  const { update, subscribe, set } = writable(0);
  return {
    subscribe,
    plus: () => update((index) => index + 1),

    minus: () => update((index) => index - 1),

    reset: () => set(0),
  };
}

export const index = getIndex();
