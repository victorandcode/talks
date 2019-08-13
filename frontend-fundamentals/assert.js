module.exports.assert = (actual, expected) =>
    actual === expected
        ? console.log('All good')
        : console.error(`Test failed: expected ${expected} but got ${actual}`);
