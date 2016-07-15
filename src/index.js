// @flow

import { lens, compose } from 'ramda';

type Lens = Function;
type Key = any;
type Path = Array<Key>;

export const lensProp : (key : Key) => Lens = key => {
	return lens(
		obj => obj.get(key),
		(val, obj) => obj.set(key, val),
	);
};

export const lensIndex : (key : number) => Lens = lensProp;

export const lensPath : (path : Path) => Lens = path => {
	const lenses = path.map(lensProp);
	return compose(...lenses);
};
