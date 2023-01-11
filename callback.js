function nameMe(callback){ 
    console.log("hey We are Calling back")
    callback()
}

nameMe(function(){ 
    let i = 89
    console.log("We are the Yins", i)

})

nameMe(function(){ 
    console.log("We are the Yangs")
})

nameMe(function(){ 
    console.log("We can be anyone")
})


nameMe(function() { 
    console.log("and  Guess  we got the Callbacks better than before")
})