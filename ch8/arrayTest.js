// push, pop, shift, unshift
const arr = ["b", "c", "d"];
arr.push("e"); // [ 'b', 'c', 'd', 'e' ]
arr.pop(); // [ 'b', 'c', 'd' ]
arr.unshift("a"); // [ 'a', 'b', 'c', 'd' ]
arr.shift(); // ['b', 'c', 'd' ]


// concat
const arr2 = [1, 2, 3];
// arr2 배열은 바뀌지 않는다.
// 배열은 한번만 분해된다.
arr2.concat(4, 5, 6); // [ 1, 2, 3, 4, 5, 6 ]
arr2.concat([4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
arr2.concat([4, 5], 6); // [ 1, 2, 3, 4, 5, 6 ]
arr2.concat([4, [5, 6]]); // [ 1, 2, 3, 4, [ 5, 6 ] ]
arr2.concat([4, 5], [6, 7]); // [ 1, 2, 3, 4, 5, 6, 7 ]


// slice
const arr3 = [1, 2, 3, 4, 5];
arr3.slice(3); // [ 4, 5 ]
arr3.slice(2, 4); // [ 3, 4 ]
arr3.slice(-2); // [ 4, 5 ]
arr3.slice(1, -2); // [ 2, 3 ]
arr3.slice(-2, -1); // [ 4 ]


// splice
const arr4 = [1, 5, 7];
// 첫번째 매개변수: 수정을 시작할 인덱스
// 두번째 매개변수: 제거할 요소 갯수
// 나머지 매개변수: 배열에 추가할 요소들
arr4.splice(1, 0, 2, 3, 4); // [ 1, 2, 3, 4, 5, 7 ]
arr4.splice(5, 0, 6); // [ 1, 2, 3, 4, 5, 6, 7 ]
arr4.splice(1, 2); // [ 1, 4, 5, 6, 7 ]
arr4.splice(2, 1, 'a', 'b'); // [ 1, 4, 'a', 'b', 6, 7 ]


// copyWithin
const arr5 = [1, 2, 3, 4];
// 첫번째 매개변수: 복사한 요소를 넣을 인덱스
// 두번째 매개변수: 복사를 시작할 인덱스
// 세번째 매개변수: 복사를 끝낼 인덱스
arr5.copyWithin(1, 2); // [ 1, 3, 4, 4 ]
arr5.copyWithin(2, 0, 2); // [ 1, 3, 1, 3 ]
arr5.copyWithin(0, -3, -1); // [ 3, 1, 1, 3 ]


// fill
const arr6 = new Array(5).fill(1); // [ 1, 1, 1, 1, 1 ]
arr6.fill("a"); // [ 'a', 'a', 'a', 'a', 'a' ]
arr6.fill("b", 1); // [ 'a', 'b', 'b', 'b', 'b' ]
arr6.fill("c", 2, 4); // [ 'a', 'b', 'c', 'c', 'b' ]
arr6.fill(5.5, -4); // [ 'a', 5.5, 5.5, 5.5, 5.5 ]
arr6.fill(0, -3, -1); // [ 'a', 5.5, 0, 0, 5.5 ]


// reverse
const arr7 = [1, 2, 3, 4, 5];
arr7.reverse(); // [ 5, 4, 3, 2, 1 ]


// sort
const arr8 = [5, 3, 2, 4, 1];
arr8.sort(); // [ 1, 2, 3, 4, 5 ]

const arr9 = [
    { name: "Suzanne" },
    { name: "Jim" },
    { name: "Trevor" },
    { name: "Amanda" }];
arr9.sort(); // arr9는 바뀌지 않는다.

// 정렬 알고리즘은 뭘 쓴거지?
// a.name, b.name이 찍히는거 가지고 유추할 수 있지 않을까?
// console.log(a.name, b.name);

// name 프로퍼티의 알파벳 순으로 정렬
arr9.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});
/*
[ { name: 'Amanda' },
  { name: 'Jim' },
  { name: 'Suzanne' },
  { name: 'Trevor' } ]
* */

// name 프로퍼티의 두 번째 글자의 알파벳 순으로 역순 정렬
arr9.sort((a, b) => {
    if (a.name < b.name) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    } else {
        return 0;
    }
});
/**
 [ { name: 'Trevor' },
   { name: 'Suzanne' },
   { name: 'Jim' },
   { name: 'Amanda' } ]
 */


// find
const arr10 = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
arr10.find(o => o.id === 5); // { id: 5, name: 'Judith' }
arr10.find(o => o.id === 2); // undefined

arr10.find((element, index, arr) => {
    // console.log('element: ', element);
    // console.log('index: ', index);
    // console.log('arr: ', arr);
});


// some
const arr11 = [9, 5, 7, 12, 15, 17];
arr11.some(x => x%2 === 0); // true
arr11.some(x => Number.isInteger(Math.sqrt(x))); // false


// every
const arr12 = [4, 6, 16, 36];
arr12.every(x => x%2 === 0); // true
arr12.every(x => Number.isInteger(Math.sqrt(x))); // false


// map
const cart = [ { name: "Wdget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name); // [ 'Wdget', 'Gadget' ]
const prices = cart.map(x => x.price); // [ 9.95, 22.95 ]
const discountPrices = prices.map(x => x*0.8); // [ 7.96, 18.36 ]

const cart2 = names.map((x, i) => ({ name: x, price: prices[i]}));
/*
[ { name: 'Wdget', price: 9.95 },
  { name: 'Gadget', price: 22.95 } ]
*/


// filter
const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 1; value <= 13; value++) {
        cards.push({suit, value});
    }
}
// console.log(cards);

// value가 2인 카드
const valueIs2 = cards.filter(c => c.value === 2);
/*
 [ { suit: 'H', value: 2 },
   { suit: 'C', value: 2 },
   { suit: 'D', value: 2 },
   { suit: 'S', value: 2 } ]
**/

const daimonds = cards.filter(c => c.suit === 'D');
/*
[ { suit: 'D', value: 1 },
  { suit: 'D', value: 2 },
  { suit: 'D', value: 3 },
  { suit: 'D', value: 4 },
  { suit: 'D', value: 5 },
  { suit: 'D', value: 6 },
  { suit: 'D', value: 7 },
  { suit: 'D', value: 8 },
  { suit: 'D', value: 9 },
  { suit: 'D', value: 10 },
  { suit: 'D', value: 11 },
  { suit: 'D', value: 12 },
  { suit: 'D', value: 13 } ]
*/

// 킹, 퀸, 주니어
const kqj = cards.filter(c => c.value > 10);
/*
[ { suit: 'H', value: 11 },
  { suit: 'H', value: 12 },
  { suit: 'H', value: 13 },
  { suit: 'C', value: 11 },
  { suit: 'C', value: 12 },
  { suit: 'C', value: 13 },
  { suit: 'D', value: 11 },
  { suit: 'D', value: 12 },
  { suit: 'D', value: 13 },
  { suit: 'S', value: 11 },
  { suit: 'S', value: 12 },
  { suit: 'S', value: 13 } ]
 */

// 하트의 킹, 퀸, 주니어
const kqjOfHeart = cards.filter(c => c.value > 10 && c.suit === 'H');
/*
[ { suit: 'H', value: 11 },
  { suit: 'H', value: 12 },
  { suit: 'H', value: 13 } ]
 */

function cardToString(c) {
    const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1:'A', 11: 'J', 12: 'Q', 13: 'K'};
    for (let i = 2; i <= 10; i++) {
        values[i] = i;
    }

    return values[c.value] + suits[c.suit];
}

const jqkOfHeart = cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString); // [ 'J♥', 'Q♥', 'K♥' ]


// reduce
// 첫번째 매개변수: accumulator(어큐뮬레이터), 줄어드는 배열
// 두번째 매개변수: 현재 배열 요소
// 세번째 매개변수: 인덱스
// 네번째 매개변수: 배열 그 자체

const arr13 = [5, 7, 2, 4];
const sum = arr13.reduce((a, x) => a += x, 0); // 18

const arr14 = [5, 7, 2, 4];
const sum2 = arr14.reduce((a, x) => a += x); // 18

const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
    if (!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});
/*
{ B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Joker' ] }
 */

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
// 도널드 커누스(Donald Knuth)가 분산 계산을 위해 만든 알고리즘입니다.
// [컴퓨터 프로그래밍의 예술: 준수치적 알고리즘(개정 3판)]
const stats = data.reduce((a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    a.M2 += delta * (x - a.mean);
    return a;
}, {N: 0, mean: 0, M2: 0});

if (stats.N > 2) {
    stats.variance = stats.M2 / (stats.N - 1);
    stats.stdev = Math.sqrt(stats.variance);
}
/*
{ N: 7,
  mean: 6.828571428571428,
  M2: 63.41428571428572,
  variance: 10.56904761904762,
  stdev: 3.2510071699471257 }
 */

const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
// Beachball Aardvark Xylophone November Chocolate Uniform

const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
// <ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>