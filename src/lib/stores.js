import { readable, writable } from 'svelte/store';

export let levels = writable([]);
export let levelNumber = writable(1);
export let advancedSettings = writable(true);

export const MAX_LEVEL_NUMBER = readable(4541);
