'use strict';

const assert = require('assert');
const lib    = require('./index');

assert.equal(10, lib.toNumber('ZOZO'));
assert.equal('BUGA', lib.toShadok(4));

lib.shadokify();

assert.equal(10, parseInt('ZOZO', 'shadok'));
assert.equal('BUGA', (4).toString('shadok'));

lib.gibify();

assert(Number.isNaN(parseInt('ZOZO', 'shadok')));
assert.throws(() => (4).toString('shadok'), RangeError);
