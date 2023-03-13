// rollup.config.js
export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    external: ['paystack'] // Add the external module here
  }
  