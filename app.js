// //* even though this is assigned on an earlier line than the declaration, that declaration is hoisted because it is declared with `var`
// //* this error shows up: "Uncaught ReferenceError: Cannot access 'name' before initialization"  this makes sense because let is not hoisted, even if it needed to hoise only a few lines

// var name;

// setName();
// function setName() {
//   //*I think this will log name as expected, because name is declared globally, and reinforced by var being hoisted
//   //* this logged as expected - also, functions are hoisted, so even though we call the function before declaring, it will still work

//   name = `Eric`;
//   console.log(name);
// }

// console.log("some text"); //* first - this is first because it is called before anything else

// let avg = findAvg(2, 2); // this will not hoist because it is declared with let

// console.log("some text", avg); //* third - this is logged last

// function findAvg(a, b) {
//   // this WILL hoist since it is a function

//   console.log("some text"); //* second -- the function is called from line 17, logs this to the console second, then returns `answer` which is then stored in `avg`

//   var answer = (a + b) / 2; // this WILL hoist because it is declared with let

//   return answer;
// }

//**********************************************************Now that we have exercised hoisting, let's practice scoping.********************************************************** */
