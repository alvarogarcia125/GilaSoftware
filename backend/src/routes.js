const express = require('express');
const router = express.Router();

module.exports = () => {
    
    const indexRouter = express.Router();
    indexRouter.get('/', (req, res) => {
        res.json({ response: 'API is working properly.' });
    });

    //Controllers
    const requestsRouter = express.Router();
    const messageCategoriesController = require('./controllers/messagecategories');
    const notificationTypesController = require('./controllers/notificationtypes');
    const usersController = require('./controllers/users');
    const logsController = require('./controllers/logs');

    //Message Categories
    requestsRouter.get('/messagecategories', messageCategoriesController.list);

    //Notification Types
    requestsRouter.get('/notificationtypes', notificationTypesController.list);

    //Users
    requestsRouter.get('/users', usersController.list);

    //Logs
    requestsRouter.get('/logs', logsController.list);
    requestsRouter.post('/logs', logsController.insert);

    router.use('/', indexRouter);
    router.use('/', requestsRouter);

    return router;
};