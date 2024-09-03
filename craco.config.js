const path = require('path');

module.exports = {
  babel: {
    plugins: [
      // Add your Babel plugins here
    ],
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
      mode: 'file',
    },
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: {
      // Custom ESLint configuration
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      // Add more aliases
    },
    plugins: [
      // Add Webpack plugins
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3100',
        changeOrigin: true,
      },
    },
  },
};
