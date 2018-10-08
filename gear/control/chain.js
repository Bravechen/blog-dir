import { createGear } from '../gear.js';

function chain(data) {
  if(!data) {
    return;
  }
  let obj = createGear(data);
  obj.__chain__ = true;
  return obj;
}

export default chain;