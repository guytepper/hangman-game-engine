import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default {
  input: 'src/Game.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [commonjs(), buble()]
};
