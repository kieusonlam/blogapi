function includeRelation() {
    return function (hook) {
        const tags = hook.app.services.tags.Model;
        hook.params.sequelize = {
            raw: false,
            include: [{ model: tags }]
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
