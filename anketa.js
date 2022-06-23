document.querySelector('#text').addEventListener('focusout', myText);
document.querySelector('#password').addEventListener('focusout', myPass);

document.querySelector('#btn').addEventListener('click', function() {
    myText();
    myPass();
})

function myText() {
    let messege, text;
    let errElement = document.getElementById('text');
    messege = document.getElementById('err');
    text = document.getElementById('text').value;

    try {
        if (text == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'bo\'sh'
        }

        if (text.length < 3) {
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw '3 tadan ko\'p bo\'lishi kerak'
        }

        if (text.length > 0) {
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            messege.innerHTML = '';
        }
    } catch (e) {
        messege.innerHTML = 'qiymat' + e;
    }
}


function myPass() {
    let messege, pass;
    let errElement = document.getElementById('password');
    messege = document.getElementById('err2');
    pass = document.getElementById('password').value;

    try {
        if (pass == "") {
            errElement.classList.remove('valid');
            errElement.classList.add('err');
            throw 'bo\'sh'
        }
        if (pass.length > 0) {
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            messege.innerHTML = '';
        }
    } catch (e) {
        messege.innerHTML = 'qiymat' + e;
    }
}