'use strict';

/**
 * comap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comap.comap');
