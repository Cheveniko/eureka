import { writable } from "svelte/store";

type Result = {
	id: number;
	title: string;
	content: string;
};

export const results = writable<Result[]>([]);
export const loadingResults = writable(false);
