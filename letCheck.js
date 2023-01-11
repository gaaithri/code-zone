let arr  ;

function fun(arr){ 
    arr.unshift(1); 
    console.log(arr);
    let newArr  = [7,8,9]; 
    arr  = newArr ; 
    console.log(arr)


}
arr  = [ 4,5 ,6 ,7 ,8 ]
console.log(arr);
fun(arr)
console.log(arr);