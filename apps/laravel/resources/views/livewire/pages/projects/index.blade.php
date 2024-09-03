@push('title')
    Projects | Dom.
@endpush
@push('description')
    (Almost) every Dom's software projects.
@endpush

@pushOnce('styles')
    @vite('resources/views/components/cards/card-overlay-anchor.css')
@endPushOnce

@pushOnce('scripts')
    @vite('resources/views/components/cards/card-overlay-anchor.js')
@endPushOnce

<section class="container mx-auto px-4 pt-4 pb-16">
    <livewire:components.contents.projects.projects-list :projects="$this->projects" />
</section>
