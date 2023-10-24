
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button ");
const specialChars = ["%" , "*" , "/" , "-" , "+" , "="];
let output = "";






//  define function to calculate based  on  button clicked
const calculate = (btnValue) => {
    if(btnValue === "="  && output !==  ""){
        //  if output has '%' , replace with '/100' before evaluating
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = "";
    }else if( btnValue  === "DEL"){
        //  if del button is clicked , remove the last character from output
        output = output.toString().slice(0,-1);
    }
    else {
        //  if output  is empty and button is specialChars then return 
        if(output === ""  && specialChars.includes(btnValue))
            return ;
            output +=  btnValue; 
    }
    display.value = output;
}


//  add event listener to buttons 
buttons.forEach( (button) => {
    // button click linster cels calculate() with value as argument 
    button.addEventListener("click" , (e) => calculate(e.target.dataset.value));

} ) ;


















