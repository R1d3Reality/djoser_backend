const {slugify} = require("strapi-plugin-slugify/server/services/slug-service");

const {meilisearch} = require ('strapi-plugin-slugify/server/services/slug-service');

module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          field: "slug",
          references: "title",
        },
        comap: {
          field: "slug",
          references: "name"
        },
        paint: {
          field: "slug",
          references: "name"
        }
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: "http://localhost:7700",
      // Your master key or private key
      apiKey: "masterKey",
    }
  },
});
