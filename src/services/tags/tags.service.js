// Initializes the `tags` service on path `/tags`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tags.model');
const hooks = require('./tags.hooks');
const filters = require('./tags.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tags',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tags', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tags');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
