const request = require('request');
require('dotenv').config();

function errorHandler() {
    
}

module.exports =  ({from, body}) => {
    if (body.match(process.env.REQUIRED_CODE)) {
        request(process.env.HTTP_TRIGGER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": process.env.AUTHORIZATION
            },
            body: JSON.stringify({from, body})
        }, (error, response, result) => {
            console.log(error, response, result);
        });
    }
}

