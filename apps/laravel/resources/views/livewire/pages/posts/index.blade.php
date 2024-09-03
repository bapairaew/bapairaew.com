@push('title')
    Posts | Dom.
@endpush
@push('description')
    Some (random) thoughts on things.
@endpush

@pushOnce('styles')
    @vite('resources/views/components/cards/card-overlay-anchor.css')
@endPushOnce

@pushOnce('scripts')
    @vite('resources/views/components/cards/card-overlay-anchor.js')
@endPushOnce

<section class="container mx-auto px-4 pt-4 pb-16">
    <livewire:components.contents.posts.posts-list :posts="$this->posts" />
</section>
