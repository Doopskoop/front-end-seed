import { createSpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';
import OMT from '@surma/rollup-plugin-off-main-thread';
import merge from "deepmerge";

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const config = createSpaConfig({ injectServiceWorker: true, developmentMode: process.env.ROLLUP_WATCH === 'true',});
// TODO: Add copying manifest.json
export default merge(config, {
  input: './src/index.html',
  plugins: [
    copy({
      targets: [{src: 'assets/**/*', dest: '/dist'}],
      flatten: false,
    }),
    OMT(),
  ]
});
