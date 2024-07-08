// https://nuxt.com/docs/api/configuration/nuxt-config

import Lara from "@primevue/themes/lara"

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/seo",
        "@nuxtjs/google-fonts",
        "@primevue/nuxt-module",
        "@nuxtjs/tailwindcss"
    ],
    site: {
        URL: "https://orabdillah.id",
    },
    googleFonts: {
        families: {
            Poppins: true,
            "Open Sans": true
        },
        useStylesheet: true,
        outputDir: "assets",
        stylePath: "fonts.css",
        fontsDir: "fonts"
    },
    primevue: {
        autoImport: true,
        usePrimeVue: true,
        components: {
            prefix: "Prime"
        },
        directives: {
            prefix: "prime-"
        },
        options: {
            theme: {
                preset: Lara,
                options: {
                    darkModeSelector: ".dark--mode"
                }
            },
        }
    }
})