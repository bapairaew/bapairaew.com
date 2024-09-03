<x-cards.card>
    <x-images.filled-image blurDataURL="{{ $photo->blurDataURL }}" alt="{{ $photo->place }}"
        src="https://data.bapairaew.com/photos/{{ $photo->slug }}.jpeg"></x-images.filled-image>
    <div class="p-2">
        <x-cards.card-overlay-anchor :href="url('/photography/' . $photo->slug)">
            <h1 class="font-black">{{ $photo->place }}</h1>
        </x-cards.card-overlay-anchor>
        @if ($photo->date)
            <p class="text-neutral-500 text-sm">
                {{ (new DateTime(json_decode($photo->date)))->format('d M Y') }}
            </p>
        @endif
    </div>
    <x-modals.bottom-sheet>
        <div class='card-dialog-content'>
            <livewire:components.contents.photos.photo-content :photo="$photo" lazy />
        </div>
    </x-modals.bottom-sheet>
</x-cards.card>
