'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://10.9.241.212/comsmonitoring-prod'
  },
  mysql: {
    host: '10.9.241.202',
    port: 3306,
    user: 'root',
    password: 'gvMw7TTcnRsTyyGxDedVwcKFd3RFds2V3WPA',
    database: 'coms_monitoring',
    connectionLimit:20
  }

};