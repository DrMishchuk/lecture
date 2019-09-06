// let age = 12;
// function a(){
//   return 15;
// }
// function b(){
//   return a()+1;
// }
// function c(){
//   return b()+1;
// }
//
//
// console.log(c());;
let collectons1 = Array(1, 3, 5, 10);
let collectons2 = ['f', 'g', 'h', 'j'];

console.log(collectons2);
let iter = collectons2[Symbol.iterator]();
for (var i = 0; i < collectons2.length+1; i++) {
  console.log(iter.next().value);
}

collectons1.forEach(function(el, index, collectons1){
  console.log('element =', el, 'index =', index);
});
