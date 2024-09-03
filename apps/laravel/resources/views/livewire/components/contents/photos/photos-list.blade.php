<div>
    <h1 class="text-3xl font-black px-4 py-4">Photography</h1>
    <ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
        @foreach ($photos as $photo)
            <li>
                <livewire:components.contents.photos.photo-card :photo="$photo" />
            </li>
        @endforeach
    </ul>
</div>
