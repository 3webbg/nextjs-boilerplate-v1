import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#150050',
        base: '#F4F4F4',
      },

      fontFamily: {
        montserrat: ['var(--montserrat)', 'sans-serif'],
      },
      screens: {
        xs: '450px',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '0rem',
      },
      center: true,
      screens: {
        sm: '1140px',
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
      addBase,
      addComponents,
      addUtilities,
      addVariant,
      config,
      corePlugins,
      e,
      matchComponents,
      matchVariant,
    }) {
      // You can all custom utilities that utilize the theme properties, like colors, sizes, etc.
      matchUtilities(
        {
          square: (value: any) => {
            return {
              width: value,
              height: value,
              minWidth: value,
              minHeight: value,
            }
          },
        },
        // Default values.
        // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc.
        // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          circle: (value: any) => {
            return {
              width: value,
              height: value,
              minWidth: value,
              minHeight: value,
              borderRadius: '9999px',
            }
          },
        },
        { values: theme('spacing') }
      )

      // You can also add classes that show up in the intellisense
      addComponents({
        '.display-1': {
          fontSize: '64px',
          lineHeight: '74px',
          letterSpacing: '-0.89px',
          fontWeight: '700',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.display-main': {
          fontSize: '46px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '108%',
          letterSpacing: '-4px',
          // You can add media queries here
          '@screen xl': {
            fontSize: '72px',
          },
        },
        '.headline-h1': {
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '115%',
          letterSpacing: '-2px',
        },
        '.headline-h2': {
          fontSize: '32px',

          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '115%',
          letterSpacing: '-2px',
        },
        '.headline-h3': {
          fontSize: '28px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '130%',
          letterSpacing: '-1px',
        },
        '.headline-h4': {
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '140%',
          letterSpacing: '-0.5px',
        },
        '.headline-h5': {
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '140%',
          letterSpacing: '-0.5px',
        },
        '.body': {
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
        },
        '.no-scroll': {
          msOverflowStyle: 'none',
          /* Internet Explorer 10+ */
          scrollbarWidth: 'none',
          /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
}
export default config
