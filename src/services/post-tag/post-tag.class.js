/* eslint-disable no-unused-vars */
const errors = require('feathers-errors');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    return Promise.resolve([]);
  }

  get (id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create (data, params) {
    // if (Array.isArray(data)) {
    //   return Promise.all(data.map(current => this.create(current)));
    // }

    // return Promise.resolve(data);

    if (isNaN(data.postsId)) {
      return Promise.reject(new errors.BadRequest({errors: {postsId: 'Expected number'}}));
    } else if (isNaN(data.tagsId)) {
      return Promise.reject(new errors.BadRequest({errors: {tagsId: 'Expected number'}}));
    } else if (typeof data.relation !== "boolean") {
      return Promise.reject(new errors.BadRequest({errors: {tagsId: 'Expected boolean'}}));
    }

    if (data.relation) {
      return this.options.post
      .get(data.postsId)
      .then(post  =>
        this.options.tag.get(data.tagsId)
          .then(tag => tag.addPosts(post))
      );
    } else {
      return this.options.post
      .get(data.postsId)
      .then(post  =>
        this.options.tag.get(data.tagsId)
          .then(tag => tag.removePosts(post))
      );
    }
    
  }

  update (id, data, params) {
    return Promise.resolve(data);
  }

  patch (id, data, params) {
    return Promise.resolve(data);
  }

  remove (id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
