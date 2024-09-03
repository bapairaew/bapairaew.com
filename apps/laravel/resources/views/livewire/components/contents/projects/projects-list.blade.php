<div>
    <h1 class="text-3xl font-black px-4 py-4">Projects</h1>
    <ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
        @foreach ($projects as $project)
            <li>
                <livewire:components.contents.projects.project-card :project="$project" />
            </li>
        @endforeach
    </ul>
</div>
