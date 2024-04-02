let paragrapElement = document.querySelector('p');

function changeParagraphText() {
    paragrapElement.textContent = 'Clicked';
    console.log('paragraph clicked')
}

paragrapElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function reterieveUserInput(event) {
    //let enteredText = inputElement.value;
    let enteredText = enter.target.value;
    //let enteredText = event.data;  ==> this is different

    console.log(enteredText);
    //console.log(event);
}

inputElement.addEventListener('input', reterieveUserInput)