const liveServer = require('live-server');

const params = {
    port: process.env.PORT || 3000,
    host: 'localhost',
    open: true,
    logLevel: 2
};
liveServer.start(params);
