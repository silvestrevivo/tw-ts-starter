import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $types: 'src/types/',
      $blocks: 'src/blocks/',
      $actions: 'src/actions/',
      $utils: 'src/utils/',
      $stores: 'src/stores/',
      $icons: 'src/icons/',
    },
  },
};

export default config;
