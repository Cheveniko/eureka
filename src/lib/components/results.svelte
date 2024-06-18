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
	import { TabGroup, Tab } from "@skeletonlabs/skeleton";
	import { ConicGradient } from "@skeletonlabs/skeleton";
	import type { ConicStop } from "@skeletonlabs/skeleton";
	import ResultCard from "$lib/components/result-card.svelte";

	let tabSet = 0;
	const conicStops: ConicStop[] = [
		{ color: "transparent", start: 0, end: 25 },
		{ color: "rgb(var(--color-secondary-600))", start: 75, end: 100 }
	];
</script>

<div class="pt-4">
	{#if $loadingResults}
		<ConicGradient stops={conicStops} spin width="w-16" regionCaption="text-sm"
			>Buscando</ConicGradient
		>
	{:else if $jaccardResults.length !== 0}
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>Distancia Coseno (TF-IDF)</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>Similitud Jaccard (BoW)</Tab>
			<svelte:fragment slot="panel">
				<div class="space-y-4">
					{#if tabSet === 0}
						<div class="flex items-center justify-between text-sm">
							<p class="text-success-500">
								{$cosineResults.length} resultados obtenidos en {$cosineTime} ms
							</p>
							<p class="text-secondary-500">
								Precision: <span class="font-semibold"> {$cosinePrecision.toFixed(2)}</span>
								Recall: <span class="font-semibold"> {$cosineRecall.toFixed(2)}</span>
								F1 Score: <span class="font-semibold"> {$cosineF1.toFixed(2)}</span>
							</p>
						</div>
						{#each $cosineResults as cosine, index}
							<ResultCard {...cosine} {index} />
						{/each}
					{:else if tabSet === 1}
						<div class="flex items-center justify-between text-sm">
							<p class="text-success-500">
								{$jaccardResults.length} resultados obtenidos en {$jaccardTime} ms
							</p>
							<p class="text-secondary-500">
								Precision: <span class="font-semibold"> {$jaccardPrecision.toFixed(2)}</span>
								Recall: <span class="font-semibold"> {$jaccardRecall.toFixed(2)}</span>
								F1 Score: <span class="font-semibold"> {$jaccardF1.toFixed(2)}</span>
							</p>
						</div>
						{#each $jaccardResults as jaccard, index}
							<ResultCard {...jaccard} {index} />
						{/each}
					{/if}
				</div>
			</svelte:fragment>
		</TabGroup>
	{/if}
</div>
