const notificationTypesModel = require("../../models/notificationtypes");

const repository = {
    list: async () => {
      try {
        let notificationTypes = await notificationTypesModel.notificationTypes.find().sort("name");
  
        return {
          code: 200,
          data: notificationTypes,
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