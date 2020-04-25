const expect = require('chai').expect;

function requestValidator(obj) {
    let patternUri = /^[.a-zA-z0-9*]+$/gm;
    let patternMessage = /^[^<>\\&'"]+$/gm;
    let validMEthds = ['GET', 'POST', 'DELETE', 'CONNECT']
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (!obj.method || !validMEthds.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }
    if (!obj.uri || !obj.uri.match(patternUri)) {
        throw new Error(`Invalid request header: Invalid URI`)
    }
    if (!obj.version || !validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`)
    }
    if (obj.hasOwnProperty('message')) {
        if (obj.message.length !== 0) {
            if (!obj.message.match(patternMessage)) {
                throw new Error(`Invalid request header: Invalid Message`)
            }
        }
    }
    if (!obj.hasOwnProperty('message')) {
        throw new Error(`Invalid request header: Invalid Message`)
    }
    return obj
}