<script lang="ts">
	import {
		jaccardResults,
		jaccardTime,
		jaccardPrecision,
		jaccardRecall,
		jaccardF1,
		cosineResults,
		cosineTime,
		cosinePrecision,
		cosineRecall,
		cosineF1,
		loadingResults
	} from "$lib/stores/results";

	let userQuery = "";
	let debounceTimer: NodeJS.Timeout;

	async function fetchResults() {
		clearTimeout(debounceTimer);

		debounceTimer = setTimeout(async () => {
			console.log(userQuery);
			$loadingResults = true;
			const response = await fetch(`http://localhost:8000/${userQuery}`);
			if (response.ok === false) {
				$loadingResults = false;
				return;
			}
			const data = await response.json();
			console.log(data);

			jaccardResults.set(data.jaccard);
			$jaccardTime = data.jaccard_time;
			$jaccardPrecision = data.jaccard_precision;
			$jaccardRecall = data.jaccard_recall;
			$jaccardF1 = data.jaccard_f1_score;

			cosineResults.set(data.cosine);
			$cosineTime = data.cosine_time;
			$cosinePrecision = data.cosine_precision;
			$cosineRecall = data.cosine_recall;
			$cosineF1 = data.cosine_f1_score;

			$loadingResults = false;
		}, 500);
	}
</script>

<input
	bind:value={userQuery}
	on:input|preventDefault={fetchResults}
	class="mx-auto block h-12 w-[500px] rounded-2xl border border-surface-700 bg-surface-900 placeholder:text-surface-400"
	title="Input"
	type="text"
	placeholder="Buscar 🔎"
/>
