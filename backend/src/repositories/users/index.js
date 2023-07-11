const usersModel = require("../../models/users");

const repository = {
    list: async () => {
      try {
        let users = await usersModel.users.find().sort("name");
  
        return {
          code: 200,
          data: users,
          error: false
        };
      } catch (ex) {
        return {
          code: ex.code,
          error: true,
          message: ex.message
        };
      }
    }
};

module.exports = repository;