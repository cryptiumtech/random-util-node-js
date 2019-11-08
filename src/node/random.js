/*
This library is expected to run in a NodeJS environment,
so use NodeJS crypto library to generate random numbers.
*/
const crypto = require('crypto');

function randomBuffer(lengthBytes) {
    const buffer = Buffer.alloc(lengthBytes);
    crypto.randomFillSync(buffer);
    return buffer;
}

function randomHex(lengthBytes) {
    return randomBuffer(lengthBytes).toString('hex');
}
function randomBase64(lengthBytes) {
    return randomBuffer(lengthBytes).toString('base64');
}

export { randomHex, randomBase64 };
