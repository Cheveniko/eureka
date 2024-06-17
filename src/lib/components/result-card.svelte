<script lang="ts">
	export let id: number;
	export let content: string;
	export let index: number;
</script>

<div class="rounded-lg border border-surface-400 bg-secondary-900/40 p-6">
	<h2 class="text-xl font-bold"><span class="text-secondary-300">{index + 1}.</span> {id}</h2>
	<!-- <p class="text-sm text-secondary-300">Documento: {id}</p> -->
	<p class="text-sm">{content}</p>
</div>
