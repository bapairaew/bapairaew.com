<section class="container mx-auto px-2 py-8">
    <h2 class="font-black text-2xl pb-8">Posts</h2>
    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        @foreach ($posts as $post)
            <li>
                <livewire:components.contents.posts.post-card :post="$post" />
            </li>
        @endforeach
    </ul>
    <a class="w-full text-center block p-4 mt-4" href="/posts" wire:navigate>All posts →</a>
</section>
