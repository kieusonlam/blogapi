// Initializes the `postTag` service on path `/postTag`
const createService = require('./post-tag.class.js');
const hooks = require('./post-tag.hooks');
const filters = require('./post-tag.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const post = this.service('posts');
  const tag = this.service('tags');

  const options = {
    name: 'post-tag',
    paginate,
    post,
    tag
  };

  // Initialize our service with any options it requires
  app.use('/postTag', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('postTag');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
