const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => await User.findAll(),
  },
};

module.exports = resolvers;
