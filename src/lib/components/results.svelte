<script lang="ts">
	import { results, loadingResults } from "$lib/stores/results";
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
	{:else if $results.length !== 0}
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>Distancia Coseno</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>TF-IDF</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>Similitud Jaccard</Tab>
			<svelte:fragment slot="panel">
				<div class="space-y-4">
					{#each $results as result}
						{#if tabSet === 0}
							<ResultCard {...result} />
						{:else if tabSet === 1}
							<ResultCard {...result} />
						{:else if tabSet === 2}
							<ResultCard {...result} />
						{/if}
					{/each}
				</div>
			</svelte:fragment>
		</TabGroup>
	{/if}
</div>
