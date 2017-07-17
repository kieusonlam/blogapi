const users = require('./users/users.service.js');
const posts = require('./posts/posts.service.js');
const tags = require('./tags/tags.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(posts);
  app.configure(tags);
};
