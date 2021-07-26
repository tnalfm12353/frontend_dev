// 1.
// unamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.

import unnamedFunction from './ex8.01.mjs';
import unnamedObject from './ex8.02.mjs';

// 2.
// named export는 import 대상이 다수 이기 때문에 특정 이름으로 import할 수 없다.
//   => import m from './ex8.03.mjs';  (x)
// 대신 * as ~ 를 사용할 수 있다.
//   => import * as m from './ex8.03.mjs'; (o)
import * as m from './ex8.03.mjs';

// 3.
// 특정 이름을 사용해서 구조 분해가 가능하다.
import {subtract} from './ex8.04.mjs';

// 4.
import math, {add} from './ex8.05.mjs';

console.log(unnamedFunction(100, 200), unnamedObject.add(100, 200));
console.log(m.add(100,200), subtract(200,100));
console.log(add(100, 200), math.subtract(200,100));