const logsModel = require("../../models/logs");
const usersModel = require("../../models/users");

const repository = {
    list: async () => {
      try {
        let logs = await logsModel.find().sort({ "createdat": -1 });
  
        return {
          code: 200,
          data: logs,
          error: false
        };
      } catch (ex) {
        return {
          code: ex.code,
          error: true,
          errorMessage: ex.message
        };
      }
    },

    insert: async (log) => {
      try {
        let users = await usersModel.users.find({'subscribed': { $in: log.category } });
        let logs = [];
        let responseMessage;

        users.forEach(function (user) {
          user.channels.forEach(function(channel) { 
            logs.push({
              "subscriber": user,
              "createdat": new Date(),
              "category": log.category,
              "notificationtype": channel,
              "message": log.message
            });
          });
        }); 

        if (logs.length > 0) {
          await logsModel.insertMany(logs);
          responseMessage = "Logs inserted successfully.";
        }
        else {
          responseMessage = "There is no users subscribed to the selected category.";
        }

        return {
          code: 200,
          message: responseMessage,
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