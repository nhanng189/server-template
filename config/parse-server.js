'use strict';
const _ = require('lodash');

const parseServerOption = {
    databaseURI: 'mongodb://localhost:27017/serverdb',
    cloud: './cloud/main.js',
    appId: 'serverAppId',
    masterKey: 'serverMasterKey', // Add your master key here. Keep it secret!
    serverURL: 'http://localhost:1337/api', // Public URL to your server http://
    publicServerURL: 'http://localhost:1337/api', // Public URL to your server https://
    restAPIKey: 'serverRestAPIKey',
    clientKey: 'serverClientKey', //  Key for iOS, MacOS, tvOS clients
    javascriptKey: 'serverJavascriptKey',
    maxUploadSize: '10mb',
    sessionLength:  31536000, // Defaults to 31536000 seconds (1 year)
    allowClientClassCreation: false,
};

module.exports = parseServerOption;