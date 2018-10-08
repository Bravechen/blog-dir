import tempGear from './internal/tempGear.js';
import map from './operator/map.js';
import filter from './operator/filter.js';
import revers from './operator/revers.js';
import value from './operator/value.js';
import tap from './operator/tap.js';
import identity from './operator/identity.js';

let gear = {};

gear.map = map;
gear.filter = filter;
gear.revers = revers;
gear.tap = tap;
gear.identity = identity;
gear.value = value;

tempGear.__tempGear__ = tempGear.combineChainable(gear, tempGear.creatTempGear());

function createGear(data) {
  let obj = Object.assign({}, tempGear.__tempGear__);
  obj.__value__ = data;
  return obj;
}

export {
  createGear
};