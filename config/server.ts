export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RENDER_EXTERNAL_URL', 'https://strapi-cms-ri6l.onrender.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
