'use strict';

const GA   = 0;
const BU   = 1;
const ZO   = 2;
const MEU  = 3;
const BASE = 4;

const parseInt = Number.parseInt;
const toString = Number.prototype.toString;

exports.toNumber = n => parseInt(n
  .split('GA').join(GA)
  .split('BU').join(BU)
  .split('ZO').join(ZO)
  .split('MEU').join(MEU),
  BASE
);

exports.toShadok = n => n
  .toString(BASE)
  .split(GA).join('GA')
  .split(BU).join('BU')
  .split(ZO).join('ZO')
  .split(MEU).join('MEU');

// Je pompe donc je suis
exports.shadokify = () => {
  global.parseInt = Number.parseInt = (n, radix) =>
    radix === 'shadok' ? exports.toNumber(n) : parseInt(n, radix);

  Number.prototype.toString = function (base) {
    return base === 'shadok' ? exports.toShadok(this) : toString.call(this, base);
  };
};

// Tout avantage a ses inconvénients et réciproquement
exports.gibify = () => {
  global.parseInt = Number.parseInt = parseInt;
  Number.prototype.toString = toString;
};
