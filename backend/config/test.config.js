var config = {
  env: 'test',
  db: {
    mongo: {
       MONGO_HOST:  ''
      ,MONGO_PORT: '27017'
      ,MONGO_SSL: 1
      ,MONGO_DATABASE: 'gilasoftware'
      ,MONGO_USER: ''
      ,MONGO_PASSWORD: ''
      ,MONGO_AUTH_SOURCE: 'admin'
      ,MONGO_REPLICASET: ''
    }
  }, 
  server: {
    host: '0.0.0.0',
    port: 8080,
    enableDebugMode: true,
  }, 
};

module.exports = Object.freeze(config);