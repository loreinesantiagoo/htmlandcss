function liHandler(eventObject) {
    console.log('li cliked', eventObject.target);
    eventObject.target.remove();
}

function clickHandler(eventObject) {
    //console.log('>button clicked:', inputElem.value);
    var task = inputElem.value;

    if (task == "") {
        return;
    }

    var liElem = document.createElement('li');
    liElem.textContent = task;
    liElem.addEventListener('click', liHandler);

    ulElem.appendChild(liElem);

    inputElem.value = "";
}

function mouseEnterHandler() {
    console.log('mouse entered');
}

function mouseLeaveHandler() {
    console.log('mouse left');
}

var ulElem = document.body.querySelector('#my-todos');

var inputElem = document.body.querySelector('#item');

var addBtnElem = document.body.querySelector('#addBtn');
addBtnElem.addEventListener('click', clickHandler);
//addBtnElem.addEventListener('mouse enter', 'mouseEnterHandler);
//addBtnElem.addEventListener('mouse leave', 'mouseEnterHandler);