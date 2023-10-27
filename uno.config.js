// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
    shortcuts: {
        responsive: "px-15 max-w-1440px w-full mx-auto max-md:px-8 max-sm:px-4",
    },
    theme: {
        colors: {
            // ...
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: "google",
            fonts: {
                poppins: "Poppins:600,500,300",
            },
        }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
});
