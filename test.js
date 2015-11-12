import * as fs from 'fs';

export function* gen() {
  yield 1;
}

for (let n of gen()) {
  console.log(n);
}
