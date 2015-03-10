'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://10.9.210.30/hackathon'
  },

  seedDB: true,

  mysql: {
  	host: '10.9.210.31',
  	port: 3306,
  	user: 'root',
  	password: 'HFc9Vbx6uaZDAybsxKKjsaQYGcc2cpmNsskv',
  	database: 'hackathon',
  	connectionLimit: 3
  }
};
