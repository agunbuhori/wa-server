const sulla = require('sulla-hotfix');
const trigger = require('./trigger');

require('dotenv').config();

function start(client) {
    client.onMessage(message => {
        if (process.env.MODE === 'prod')
            trigger(message);
        else
            client.sendText(message.from, "WA server is working :)");
    });
}

function createSession(session) {
    sulla.create(session).then(client => {
        start(client);
        
        const CONFIG = {
            "HTTP TRIGGER": process.env.HTTP_TRIGGER,
            "REQUIRED CODE": process.env.REQUIRED_CODE,
        };

        console.log(`Whatsapp server ${session} is working, trigger server : ${JSON.stringify(CONFIG)}`);
    });
}

if (process.env.SESSION_1)
    createSession(process.env.SESSION_1);
    
if (process.env.SESSION_2)
    createSession(process.env.SESSION_2);

if (process.env.SESSION_3)
    createSession(process.env.SESSION_3);

if (process.env.SESSION_4)
    createSession(process.env.SESSION_4);
