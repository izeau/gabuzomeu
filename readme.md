# GABUZOMEU

![package version](https://img.shields.io/npm/v/gabuzomeu.svg)
![npm monthly downloads](https://img.shields.io/npm/dm/gabuzomeu.svg)
![package license](https://img.shields.io/npm/l/gabuzomeu.svg)
![Travis](https://img.shields.io/travis/izeau/gabuzomeu.svg)


## Convert a human number to a shadok number

```js
gabuzomeu.toNumber('ZOZO'); // 10
```

## Convert a shadok number to a human number

```js
gabuzomeu.toShadok(10); // 'ZOZO'
```

## Override parseInt and Number.prototype.toString

```js
gabuzomeu.shadokify(); // Run once

parseInt('ZOZO', 'shadok'); // 10
(10).toString('shadok'); // 'ZOZO'

// Rollback with:
gabuzomeu.gibify();
```

## Why?

Why *not*?