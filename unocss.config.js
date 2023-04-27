import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import { defineConfig } from '@unocss/vite';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      extraProperties: {
        width: '1.2em',
        height: '1.2em',
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Poppins',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        poppins: ['Poppins:300,400,500,600,700,900'],
        worksans: ['Work Sans:300,400,500,600,700,900'],
        helvetica: [
          {
            provider: 'none',
            name: 'Helvetica Neue,Helvetica,Arial,sans-serif',
          },
        ],
      },
    }),
  ],
  rules: [
    [
      'text-shadow-black',
      {
        'text-shadow':
          '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      },
    ],
    [
      'text-shadow-purple',
      {
        'text-shadow':
          '-1px -1px 0 #9895e8, 1px -1px 0 #9895e8, -1px 1px 0 #9895e8, 1px 1px 0 #9895e8',
      },
    ],
  ],
  theme: {
    colors: {
      purple: '#560b8c',
      slate: '#2c2a2e',
    },
    breakpoints: {
      sm: '640px',
      xl: '1170px',
      lg: '990px',
    },
  },
});
