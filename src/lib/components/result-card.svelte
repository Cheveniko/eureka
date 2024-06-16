<script lang="ts">
	export let id: number;
	export let title: string;
	export let content: string;
</script>

<div class="rounded-lg border border-surface-400 bg-secondary-900/40 p-6">
	<h2 class="text-xl font-bold">{title}</h2>
	<p class="text-sm text-secondary-300">Documento: {id}</p>
	<p>{content}</p>
</div>
