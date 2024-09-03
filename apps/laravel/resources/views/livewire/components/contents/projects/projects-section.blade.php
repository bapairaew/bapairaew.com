<section class="container mx-auto px-2 py-8">
    <h2 class="font-black text-2xl pb-8">Projects</h2>
    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        @foreach ($projects as $project)
            <li>
                <livewire:components.contents.projects.project-card :project="$project" />
            </li>
        @endforeach
    </ul>
    <a class="w-full text-center block p-4 mt-4" href="/projects" wire:navigate>All projects →</a>
</section>
