// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const posts = sequelizeClient.define('posts', {
    title: {
      type: Sequelize.STRING,
      required: true
    },
    content: {
      type: Sequelize.TEXT,
      required: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  posts.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    posts.belongsToMany(models.tags, {
      through: 'posts_tags',
      foreignKey: 'postsId'
    })
  };

  return posts;
};
