@push('title')
    Dom.
@endpush
@push('description')
    Some random website.
@endpush

@pushOnce('styles')
    @vite('resources/views/components/contents/hero/hero-section.css')
    @vite('resources/views/components/cards/card-overlay-anchor.css')
@endPushOnce

@pushOnce('scripts')
    @vite('resources/views/components/cards/card-overlay-anchor.js')
@endPushOnce

<div>
    <x-contents.hero.hero-section />
    <livewire:components.contents.projects.projects-section lazy />
    <livewire:components.contents.posts.posts-section lazy />
    <livewire:components.contents.photos.photos-section lazy />
</div>
