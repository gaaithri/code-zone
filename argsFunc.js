const add = x => x+x
function argChecks (num = 4 , val = add(num), resp = num*2) { 
    console.log(num ,val , resp )


}
argChecks()
argChecks(5)