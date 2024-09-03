<div class="prose lg:prose-md dark:prose-invert mx-auto">
    <h1 class="pt-8 m-0">{{ $post->title }}</h1>
    <span class="block pt-8 text-md text-neutral-500">
        {{ (new DateTime(json_decode($post->publishedTime)))->format('d M Y') }}
        ·
        {{ $post->keywords }}
    </span>
    <div class="pt-4">
        {!! $this->mkd->text($post->content) !!}
    </div>
</div>
