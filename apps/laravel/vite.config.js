import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/views/components/contents/hero/hero-section.css",
                "resources/views/components/modals/bottom-sheet.css",
                "resources/views/components/modals/bottom-sheet.js",
                "resources/views/livewire/components/navigations/root-navigation.css",
                "resources/views/livewire/components/navigations/root-navigation.js",
                "resources/views/components/cards/card-overlay-anchor.js",
                "resources/views/components/cards/card-overlay-anchor.css",
            ],
            refresh: true,
        }),
    ],
});
