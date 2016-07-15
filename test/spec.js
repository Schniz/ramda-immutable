// @flow

import { view, over, set } from 'ramda';
import { lensPath, lensProp, lensIndex } from '../src';
import { fromJS } from 'immutable';

function generateDeepObject(valueInsideArray) {
	return {
		coolTest: true,
		some: {
			big: {
				array: [valueInsideArray, 2, 3, 4],
			},
		},
	};
}

describe('lenses', () => {
	it('should work on a deep nested disgusting object', () => {
		const bigObject = fromJS(generateDeepObject(1));

		const firstElementInArrayLens = lensPath(['some', 'big', 'array', 0]);

		view(firstElementInArrayLens, bigObject).should.equal(1);
		set(firstElementInArrayLens, 0, bigObject).toJS().should.deep.equal(generateDeepObject(0));
		over(firstElementInArrayLens, () => 'oh yes', bigObject).toJS().should.deep.equal(generateDeepObject('oh yes'));
	});
});
