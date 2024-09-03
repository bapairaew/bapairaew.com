@props(['id' => '', 'href' => '', 'class' => ''])

<a id="{{ $id }}" href="{{ $href }}"
    class="card-overlay-anchor no-underline before:content-[''] before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:absolute {{ $class }}">
    {{ $slot }}
</a>
