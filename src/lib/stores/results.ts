import { writable } from "svelte/store";

type Result = {
	id: number;
	content: string;
};

export const jaccardResults = writable<Result[]>([]);
export const jaccardTime = writable(0);
export const jaccardPrecision = writable(0);
export const jaccardRecall = writable(0);
export const jaccardF1 = writable(0);

export const cosineResults = writable<Result[]>([]);
export const cosineTime = writable(0);
export const cosinePrecision = writable(0);
export const cosineRecall = writable(0);
export const cosineF1 = writable(0);

export const loadingResults = writable(false);
