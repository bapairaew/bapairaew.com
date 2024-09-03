<x-cards.card>
    <div class="p-4 flex flex-col h-full">
        <x-cards.card-overlay-anchor :href="url('/posts/' . $post->slug)">
            <h1 class="text-xl font-black pb-4">{{ $post->title }}</h1>
        </x-cards.card-overlay-anchor>
        <p class="pb-4 flex-grow">{{ $post->description ?? '' }}</p>
        <div class="flex justify-between w-full text-neutral-500 text-sm">
            <p>{{ (new DateTime(json_decode($post->publishedTime)))->format('d M Y') }}</p>
            <span>Read more →</span>
        </div>
    </div>
    <x-modals.bottom-sheet>
        <div class='card-dialog-content'>
            <livewire:components.contents.posts.post-content :post="$post" lazy />
        </div>
    </x-modals.bottom-sheet>
</x-cards.card>
