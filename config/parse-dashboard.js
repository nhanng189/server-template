'use strict';

const parseServerOptions = require('./parse-server');

const parseDashboardOption = {
    allowInsecureHTTP: true,
    mountPath: '/dashboard',
    apps: [
        {
            serverURL: 'http://localhost:1337/api',
            appId: parseServerOptions.appId,
            masterKey: parseServerOptions.masterKey,
            javascriptKey: parseServerOptions.javascriptKey,
            restKey: parseServerOptions.restAPIKey,
            clientKey: parseServerOptions.clientKey,
            appName: 'Server',
            appNameForURL: 'server'
        }
    ],
    users: [
        {
            user: 'server_dev',
            pass: '$2y$12$Is.vML4V3w/xqM8GmAbyJ.GrMB10tXJwkjEb/knMr3gkV/8gw8i7e' // serverdev123
        }
    ],
    useEncryptedPasswords: true // @link: https://bcrypt-generator.com
}

module.exports = parseDashboardOption;