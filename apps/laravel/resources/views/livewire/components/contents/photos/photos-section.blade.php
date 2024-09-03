<section class="container mx-auto px-2 py-8">
    <h2 class="font-black text-2xl pb-8">Photography</h2>
    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        @foreach ($photos as $photo)
            <li>
                <livewire:components.contents.photos.photo-card :photo="$photo" />
            </li>
        @endforeach
    </ul>
    <a class="w-full text-center block p-4 mt-4" href="/photography" wire:navigate>All photography →</a>
</section>
