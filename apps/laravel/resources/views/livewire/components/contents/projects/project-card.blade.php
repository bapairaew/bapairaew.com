<x-cards.card>
    <div class="p-4">
        <x-cards.card-overlay-anchor :href="url('/projects/' . $project->slug)">
            <h1 class="text-xl font-black pb-4">{{ $project->title }}</h1>
        </x-cards.card-overlay-anchor>
        <p class="pb-2 text-sm text-neutral-500">{{ $project->subtitle ?? '' }}</p>
        <p class="truncate text-sm text-neutral-500">
            {{ join(' · ', array_map(fn($x) => $x->text, $project->tags)) }}
        </p>
    </div>
    <x-modals.bottom-sheet>
        <div class='card-dialog-content'>
            <livewire:components.contents.projects.project-content :project="$project" lazy />
        </div>
    </x-modals.bottom-sheet>
</x-cards.card>
