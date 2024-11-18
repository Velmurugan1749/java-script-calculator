let output=document.getElementById('output');

function Clear(){

    output.value="";
}
function del(){

    output.value=output.value.slice(0,-1);
}
function display(txt){

    output.value=output.value+txt;
}
function calculate(){
    output.value=eval(output.value);
}
function cube(){
    output.value=output.value*output.value*output.value;
}
function square(){
    output.value=Math.sqrt(output.value);
}
function area(){
    output.value=output.value*output.value;
}