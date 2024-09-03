@props(['id' => ''])

<dialog id="{{ $id }}"
    class="bottom-sheet p-4 sm:px-0 m-0 mx-auto self-end container bg-white border border-neutral-900 dark:bg-neutral-800 sm:h-[95%]">
    <div class="sticky top-0 w-full pr-8 flex justify-end">
        <button class="bottom-sheet-close-button">&#x2715;</button>
    </div>
    {{ $slot }}
</dialog>
