<script lang="ts">
	import { results, loadingResults } from "$lib/stores/results";

	let userQuery = "";
	let debounceTimer: NodeJS.Timeout;

	async function fetchResults() {
		clearTimeout(debounceTimer);

		debounceTimer = setTimeout(async () => {
			console.log(userQuery);
			$loadingResults = true;
			const response = await fetch(`http://localhost:8000/${userQuery}`, {
				headers: { "Access-Control-Allow-Origin": "*" }
			});
			const data = await response.json();
			console.log(data);
			results.set(data.best_titles_cos);
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
