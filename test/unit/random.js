const { expect } = require('chai');
const { randomHex, randomBase64 } = require('../../dist/index.umd.js');

describe('randomHex', function () {
    it('empty', function () {
        const text = randomHex(0);
        expect(text).to.exist;
        expect(text.length).to.equal(0);
    });
    it('one-block', function () {
        const text = randomHex(1);
        expect(text).to.exist;
        expect(text.length).to.equal(2);
    });
});
describe('randomBase64', function () {
    it('empty', function () {
        const text = randomBase64(0);
        expect(text).to.exist;
        expect(text.length).to.equal(0);
    });
    it('one-block', function () {
        const text = randomBase64(3);
        expect(text).to.exist;
        expect(text.length).to.equal(4);
    });
});
