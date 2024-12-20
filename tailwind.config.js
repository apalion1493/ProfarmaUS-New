const options = require('./config'); //options from config.js

const allPlugins = {
  typography: require('@tailwindcss/typography'),
  forms: require('@tailwindcss/forms'),
  containerQueries: require('@tailwindcss/container-queries'),
};

const plugins = Object.keys(allPlugins)
  .filter(k => options.plugins[k])
  .map(k => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  darkMode: 'class',
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100%',
      '100-auto': '100% auto',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    fontSize: {
      none: ['0px', '0px'],
      base: ['18px', '130%'],
      h1: ['72px', '100%'],
      h2: ['52px', '120%'],
      "h2-5": ['48px', '120%'],
      h3: ['40px', '130%'],
      h4: ['32px', '130%'],
      h5: ['30px', '130%'],
      h1Mob: ['56px', '120%'],
      h2Mob: ['30px', '120%'],
      Top1: ['24px', '130%'],
      Top2: ['22px', '130%'],
      Top3: ['20px', '130%'],
      Top4: ['36px', '100%'],
      Top5: ['32px', '120%'],
      body: ['16px', '130%'],
      body2: ['14px', '120%'],
      body3: ['8px', '120%'],
      body4: ['12px', '120%'],
    },
    screens: {
      '2xl': { max: '1549px' },
      xl: { max: '1344px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      sm2: { max: '480px' },
      sm3: { max: '360px' },

      minsm: { min: '640px' },
      minmd: { min: '768px' },
      minlg: { min: '1024px' },
      minxl: { min: '1345px' },
      min2xl: { min: '1550px' },
    },
    container: {
      center: true,
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      lineHeight: {
        '100': '100%',
      },
      boxShadow: {
        '3xl': '0px 2px 12px 0px rgba(27, 60, 116, 0.08)',
        '4xl': '0px 0px 10px 0px rgba(27, 60, 116, 0.08)',
        '5xl': '0px 0px 15px 0px rgba(27, 60, 116, 0.15)',
        '6xl': '0px 8px 124px -40px rgba(27, 60, 116, 0.15)',
        '7xl': '0px 0px 20px 8px rgba(27, 60, 116, 0.10);',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '20px',
        '7xl': '8px',
      },
      colors: {
        transparent: 'transparent',
        pageBg: '#FBFBFB',
        DarkBlue10: '#2490EB1A',
        DarkBlue20: '#1B3C7433',
        DarkBlue30: '#1B3C744D',
        DarkBlue100: '#1B3C74',
        DarkBlue50: '#05093E80',
        DarkBlue80: '#1B3C74CC',
        LightBlue100: '#2490EB',
        LightBlue30: '#2490EB4D',
        LightBlue10: '#2490EB1A',
        LightBlue80: '#2490EBCC',
        'Text-color': '#646E8C',
        Yellow: '#FFA729',
        White2: '#F2F6F9',
        Error: '#F25F5F',
      },
      letterSpacing: {
        '018': '-0.18px',
      },
      padding: {
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        '1/24': '4.166667%',
        '2/24': '8.333333%',
        '3/24': '12.5%',
        '4/24': '16.666667%',
        '5/24': '20.833333%',
        '6/24': '25%',
        '7/24': '29.166667%',
        '8/24': '33.333333%',
        '2.5': '10px',
      },
    },
  },
  plugins: plugins,
};
