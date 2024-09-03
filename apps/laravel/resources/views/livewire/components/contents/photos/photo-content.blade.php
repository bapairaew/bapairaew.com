<div class="container mx-auto px-4 pt-4 pb-16">
    <x-images.filled-image blurDataURL="{{ $photo->blurDataURL }}" alt="{{ $photo->place }}"
        src="https://data.bapairaew.com/photos/{{ $photo->slug }}.jpeg"></x-images.filled-image>
    <h1 class="mt-8 text-xl font-black">{{ $photo->place }}</h1>
    <dl class="grid grid-cols-2 gap-2 mt-4">
        @if ($photo->date)
            <div>
                <dt class="text-sm text-neutral-500">Date</dt>
                <dd>
                    {{ (new DateTime(json_decode($photo->date)))->format('d M Y') }}</dd>
            </div>
        @endif
        <div>
            <dt class="text-sm text-neutral-500">Camera</dt>
            <dd>{{ $photo->camera }}</dd>
        </div>
        <div>
            <dt class="text-sm text-neutral-500">Aperture</dt>
            <dd>ƒ / {{ $photo->fnumber }}</dd>
        </div>
        <div>
            <dt class="text-sm text-neutral-500">Exposure Time</dt>
            <dd>1 / {{ number_format(1 / $photo->exposureTime, 0) }}</dd>
        </div>
        <div>
            <dt class="text-sm text-neutral-500">Focal Length</dt>
            <dd>{{ number_format($photo->focalLength, 1) }} mm</dd>
        </div>
        <div>
            <dt class="text-sm text-neutral-500">ISO</dt>
            <dd>{{ $photo->iso }}</dd>
        </div>
    </dl>
</div>
