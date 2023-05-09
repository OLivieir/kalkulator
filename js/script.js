function calc(){
    const buttonvalue = this.innerText;
    const result = document.querySelector("#res");

    if(buttonvalue === 'C'){
        result.value = "";
    } else if(buttonvalue === '='){
        result.value = eval(result.value)
    }else{
        result.value += buttonvalue
    }

};

const buttons = document.querySelectorAll('button');

buttons.forEach(element => {
    element.addEventListener('click', calc);
});