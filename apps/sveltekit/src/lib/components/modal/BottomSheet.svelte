<script lang="ts">
	import Portal from './Portal.svelte';

	let dialog: HTMLDialogElement;
	export let open = false;
	export let onclose: (() => void) | undefined;

	$: if (dialog != null && open && !dialog.open) {
		dialog.showModal();
	} else if (dialog != null && !open && dialog.open) {
		dialog.close();
	}

	function close(e?: MouseEvent) {
		e?.stopPropagation();
		dialog.close();
		onclose?.();
	}

	function onclick(e: MouseEvent) {
		const rect = dialog.getBoundingClientRect();
		const isInDialog =
			rect.top <= e.clientY &&
			e.clientY <= rect.top + rect.height &&
			rect.left <= e.clientX &&
			e.clientX <= rect.left + rect.width;

		if (!isInDialog) {
			close();
		}
	}

	function dialogOnclose() {
		close();
	}
</script>

<Portal target="body">
	<dialog
		class="bottom-sheet p-4 sm:px-0 m-0 sm:mx-auto self-end container bg-white border border-neutral-900 dark:bg-neutral-800 sm:h-[95%]"
		bind:this={dialog}
		{onclick}
		onclose={dialogOnclose}
	>
		<div class="sticky top-0 w-full pr-8 flex justify-end">
			<button onclick={close}>&#x2715;</button>
		</div>
		<slot />
	</dialog>
</Portal>

<style>
	dialog:modal {
		max-width: 100vw;
		@screen sm {
			max-width: revert;
		}
	}
	dialog::backdrop {
		@apply bg-black bg-opacity-50 backdrop-blur;
	}

	dialog {
		animation: slide-down 200ms ease-out;
	}

	dialog[open] {
		animation: slide-up 200ms ease-out;
	}

	dialog[open]::backdrop {
		animation: backdrop-fade-in 200ms ease-out forwards;
	}

	@keyframes slide-up {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes slide-down {
		from {
			display: block;
		}
		to {
			transform: translate(0%, 100%);
			display: none;
		}
	}
	@keyframes backdrop-fade-in {
		0% {
			background-color: rgb(0 0 0 / 0%);
		}

		100% {
			background-color: rgb(0 0 0 / 25%);
		}
	}
</style>
