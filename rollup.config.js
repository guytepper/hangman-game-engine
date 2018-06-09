import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/Game.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [commonjs()]
};
