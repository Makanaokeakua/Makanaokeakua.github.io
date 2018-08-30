var output = document.getElementById("calculation");

function c(val){
    output.value=val;
}
function v(val){
    try{
        output.value+=val;
    }
    catch(e){
        alert(e.message)
    }
    
}
function Calculate(val){
    try{
        c(eval(output.value));
    }
    catch(e){
        c('Error');
    }
}
