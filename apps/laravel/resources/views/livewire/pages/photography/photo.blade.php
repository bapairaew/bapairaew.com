@push('title')
    {{ $photo->place }}
@endpush
@push('description')
    {{ implode(
        ' · ',
        array_filter([$photo->place, $photo->date ? date('d M Y', strtotime($photo->date)) : null, $photo->camera]),
    ) }}
@endpush

<livewire:components.contents.photos.photo-content :photo="$photo" />
