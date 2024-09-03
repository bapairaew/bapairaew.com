<div class="prose lg:prose-md dark:prose-invert mx-auto">
    <span class="block pt-8 text-sm text-neutral-500 font-normal">
        {{ $this->tagsListText }}
    </span>
    <h1 class="pt-4 m-0">{{ $project->title }}</h1>
    <span class="block pt-2 text-lg">{{ $project->subtitle ?? '' }}</span>
    <span class="block pt-4 text-sm text-neutral-500 font-normal">
        {{ $this->techStack }}
    </span>
    <div class="pt-4">
        {!! $this->mkd->text($project->content) !!}
    </div>
</div>
