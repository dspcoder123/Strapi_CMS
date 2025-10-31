export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      key: 'strapi.sid',
      secure: true,        // Send cookies only over HTTPS
      sameSite: 'none',    // Support cross-site cookies
      proxy: true,         // Trust the proxy (like Render)
    },
  },
  'strapi::favicon',
  'strapi::public',
];
