import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Ensure Koa trusts proxy headers (fixes HTTPS/secure cookie issues on Render)
    strapi.server.app.proxy = true;
  },

  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
