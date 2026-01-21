/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '0.05em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1.05', letterSpacing: '0.05em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "cormorantgaramond",
                paragraph: "sora"
            },
            colors: {
                charcoal: '#2B2B2B',
                white: '#FFFFFF',
                'gold-accent': '#D4AF37',
                destructive: '#CC0000',
                'destructive-foreground': '#FFFFFF',
                background: '#F8F8F8',
                secondary: '#EAE0D5',
                foreground: '#2B2B2B',
                'secondary-foreground': '#2B2B2B',
                'primary-foreground': '#FFFFFF',
                primary: '#C0A062'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
