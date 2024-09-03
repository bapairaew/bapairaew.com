@props(['src', 'alt', 'blurDataURL' => null])

<div class="aspect-[4/3] relative">
    <div class="overflow-hidden flex items-center m-0">
        <img class="min-h-full object-cover w-full h-full absolute top-0" loading="lazy" src="{{ $src }}"
            alt="{{ $alt }}" style="background-image: url({{ $blurDataURL }})" />
    </div>
</div>
