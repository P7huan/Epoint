module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3399ff',
        gray_primary: '#aeadad',
      },
      fontSize: {
        12: '0.75rem',
        13: '0.8125rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        30: '1.875rem',
        36: '	2.25rem',
        40: '2.5rem',
        48: '3rem',
        50: '3.125rem',
      },
    },
  },
  plugins: [],
}
