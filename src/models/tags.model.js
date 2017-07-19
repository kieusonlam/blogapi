// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tags = sequelizeClient.define('tags', {
    name: {
      type: Sequelize.STRING,
      required: true
    },
    description: {
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

  tags.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    tags.belongsToMany(models.posts, {
      through: 'postTag',
      foreignKey: 'tagsId'
    })
  };

  return tags;
};
