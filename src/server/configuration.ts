import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';

export default createConfiguration({
  imports: [Koa, hooks()],
  importConfigs: [
    {
      default: { keys: 'session_keys' },
    },
  ],

  // onReady: async (container, app) => {
  //   console.log('Ready', app.getApplicationContext());
  // },
  // onConfigLoad(container, app) {
  //   console.log('Config Loaded');
  // },
  // onServerReady: server => {
  //   console.log('Server Ready');
  // },
  // onStop(container, app) {
  //   console.log('Stop');
  // },
});
