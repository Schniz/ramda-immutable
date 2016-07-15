## ramda-immutable

Helpers for using [ramda](ramdajs.com) with [immutable.js](https://facebook.github.io/immutable-js/)

Currently only provides lenses using the `lens` function.

## Installing

```
npm install --save ramda-immutable
```

Make sure you install `ramda` and `immutable` too cause they are peer dependencies.

## Helpers

### `lensProp` and `lensIndex`

```js
import { set } from 'ramda';
import { lensProp } from 'ramda-immutable';
import { fromJS } from 'immutable';

const feelingLens = lensProp('feeling');
const afterSet = set(
	feelingLens,
	'awesome',
	fromJS({ id: 1, feeling: 'sad' })
); // => { id: 1, feeling: 'yay!' }
```

the only difference between `lensIndex` and `lensProp` is the key type.

### `lensPath`

creating a path of lenses.

```js
import { set } from 'ramda';
import { lensPath } from 'ramda-immutable';
import { fromJS } from 'immutable';

const afterSet = set(
	lensPath([0, 'sad']),
	'awesome',
	fromJS([{ id: 1, feeling: 'sad' }, { id: 2, feeling: 'good' }]),
);
```
