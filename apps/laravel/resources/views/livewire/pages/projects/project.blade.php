@push('title')
    {{ $project->title }}
@endpush
@push('description')
    {{ $project->description }}
@endpush

<livewire:components.contents.projects.project-content :project="$project" />
