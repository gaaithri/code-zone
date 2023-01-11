function constfuncs() 
{
 var funcs = [];
 for(var i = 0; i < 10; i++)
 funcs[i] = function() { return i; }
 console.log(funcs, "funcs")
 return funcs;
}
var funcs = constfuncs();
console.log(typeof(funcs))
console.log(funcs[1])
console.log (funcs[5]())