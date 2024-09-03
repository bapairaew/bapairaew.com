@push('title')
    Photography | Dom.
@endpush
@push('description')
    Some taken (badly) photos.
@endpush

@pushOnce('styles')
    @vite('resources/views/components/cards/card-overlay-anchor.css')
@endPushOnce

@pushOnce('scripts')
    @vite('resources/views/components/cards/card-overlay-anchor.js')
@endPushOnce

<section class="container mx-auto px-4 pt-4 pb-16">
    <livewire:components.contents.photos.photos-list :photos="$this->photos" />
</section>
