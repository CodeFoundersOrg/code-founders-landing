import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: './node_modules/@divriots/rev/drawer/rev-drawer.js',
  output: {
    file: './src/components/rev-drawer-prebundled.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [
    nodeResolve()
  ]
}