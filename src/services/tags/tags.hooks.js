function includeRelation() {
    return function (hook) {
        const posts = hook.app.services.posts.Model;
        hook.params.sequelize = {
            raw: false,
            include: [{ model: posts }]
        };
        return Promise.resolve(hook);
    };
}

module.exports = {
  before: {
    all: [includeRelation()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
