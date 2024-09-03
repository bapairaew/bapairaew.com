@push('title')
    {{ $post->title }}
@endpush
@push('description')
    {{ $post->description }}
@endpush

<livewire:components.contents.posts.post-content :post="$post" />
