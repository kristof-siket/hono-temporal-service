// @ts-check
import node from '@prisma/composer/node';
import { compute } from '@prisma/composer-prisma-cloud';

export default compute({
  name: 'app',
  deps: {},
  // `dir` resolves against this file's directory (src/): the tsconfig emits the
  // build to src/dist, where the compiled service.mjs sits beside index.js, so
  // the tree is copied verbatim and the app's './service.mjs' import resolves.
  build: node({
    module: import.meta.url,
    dir: 'dist',
    entry: 'index.js',
    dependencies: 'external',
  }),
});
