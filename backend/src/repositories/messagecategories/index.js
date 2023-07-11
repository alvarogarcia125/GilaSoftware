const messageCategoriesModel = require("../../models/messagecategories");

const repository = {
    list: async () => {
      try {
        let messageCategories = await messageCategoriesModel.messageCategories.find().sort("name");
  
        return {
          code: 200,
          data: messageCategories,
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