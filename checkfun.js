    function outerFun(){
        console.log(arguments);
        console.log("print")
        let innerFun = ()=>{
            console.log(arguments);
        }
        
        innerFun("Hello","Coder")
        console.log("called inner")
    }
    outerFun("Welcome","to","Scaler","Academy");