const arr = [61, 22 , 38];

const [firstNumber, secondNumber] = [1, 2, 3];



function enterElement(){
    const arr = [];

    const valElement = document.querySelector('.js-code-input');
    arr.push(valElement.value);
    valElement.value = '';
    arr.forEach((val, index) => {
        html = `<p>${val}</p>`;
        document.querySelector('.js-code-enter').innerHTML += html;
    })
}


addListen = (event) =>{
    if (event.key === 'Enter')
    {
        enterElement();
    }
}

document.body.addEventListener('keydown', addListen)

document.body.addEventListener('click', enterElement);
