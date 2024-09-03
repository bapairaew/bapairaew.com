<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>@stack('title', 'Dom.')</title>
    <meta name="description" content="@stack('description', 'Some random website.')">
    @vite('resources/css/app.css')
    @vite('resources/views/livewire/components/navigations/root-navigation.css')
    @vite('resources/views/components/modals/bottom-sheet.css')
    @stack('styles')
</head>

<body>
    <livewire:components.navigations.root-navigation></livewire:components.navigations.root-navigation>
    {{ $slot }}
    <footer class="flex text-neutral-500 justify-end container mx-auto p-4">
        © @php echo date("Y"); @endphp Dom.
    </footer>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    @vite('resources/views/livewire/components/navigations/root-navigation.js')
    @vite('resources/views/components/modals/bottom-sheet.js')
    @stack('scripts')
</body>

</html>
