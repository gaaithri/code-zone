var invite_type;
function callLetter (person){ 
    return function (invite){ 
        console.log (" Dear " , person ,"We cordially invite you to our ", invite)
    }
}
function taskStatus(callback){ 
    console.log("Status Update");
    callback()
}
studentList = ["Gigi", "Sili", "Danny", "Prince", "Ria", "Lee"]
techStuList = ["Geeky", "Neo", "Nully", "Dyni", "Java", "Scalion", "Socrco", "Zigzag"]
studentList.forEach(element => {
    sendInvite = callLetter(element)
    sendInvite("HBD")
 
}); taskStatus(function(){
    console.log("Hey done HBD Invite for class") 
}) 

studentList.forEach(element => {
    sendInvite = callLetter(element)
    sendInvite("Conf")
 
}); taskStatus(function(){
    console.log("Hey done Conf  Invite for class") 
}) 


techStuList.forEach(element => {
    sendInvite = callLetter(element)
    invite_type = "tech Segway"
    sendInvite(invite_type)
 
}); artaskStatus(function(){
    console.log("Hey done" ,invite_type ,"for class of ", techStuList.length) 
}) 


