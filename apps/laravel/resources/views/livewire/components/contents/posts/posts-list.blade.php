<div>
    <h1 class="text-3xl font-black px-4 py-4">Posts</h1>
    <ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-3">
        @foreach ($posts as $post)
            <li>
                <livewire:components.contents.posts.post-card :post="$post" />
            </li>
        @endforeach
    </ul>
</div>
