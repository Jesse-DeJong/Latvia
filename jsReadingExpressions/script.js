2 == '2'; // true
2 === 2; // true
2 === '2'; //false
'2' + 3 == 23; // true
'2' + 3 === 5; // false
10 % 3; // 1
10 % 3 === 1; // true
(100 % 7) % 5; // 2 (the remainder of 2/5 is still 2, no floats)
(100 % 7) % 5 !== 0; // true
(100 % 7) % 9 == 2; // true
!(10 % 2); // false (inverse of resolving to true is false)
!!!!((10 % 7) % 3); // false (remainder 3, remainder 0, which resolves to false, !t !f !t !f, eventually resolving to false)
10 % 3 === -1 % 2;  // false
(892783 != '89278' + 3) == 0; // true
true && false; // false
false || true; // true
true || false; // true
true || false; // true
true || false + true; // true
true * false && false + true; // false --- 0
10 && 123 && -1 && 3; // 3, since its last?
10 && 123 && 0 && 3; // 0, since its zero?
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; // 0
// ( truthy && (truthy || falsy) && NaN ) 
// NaN
// 23 / 23 -1 = 23/23=1 and then -1 = 0
// NaN || 0
// 0 

3 && 'Calum' && ('' || 26); // 26, cuz last?
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog')); // CatDog, cuz last?
// truthy && truthy && (falsy || 0 || (truthy && truthy + truthy))
// last is returned.