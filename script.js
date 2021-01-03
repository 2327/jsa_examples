    /*
    a.  Имя содержит только буквы.
    b.  Телефон имеет вид +7(000)000-0000.
    c.  E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
    d.  Текст произвольный.
    e.  Если одно из полей не прошло валидацию, необходимо выделить это поле красной
        рамкой и сообщить пользователю об ошибке.
        onsubmit="return validateForm()"
        onclick="validateForm()"
    */
    'use strict';

    let regexp_name = /^\w+$/;
    let regexp_phone = /^(\+\d{1,3})?\(?\d{3}\)?(-\d{2}){2}/;
    let regexp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    const inputs = document.querySelectorAll('input');
    console.log(inputs);

    inputs.forEach(function (highlightInput) {
        input.addEventListener('click', function (event) {
            handleClick(event);
        })
    });

    function handleClick(clickedButtonEvent) {

    }

    function validateForm() {
        var name = document.forms["form"]["name"].value;
        var phone = document.forms["form"]["phone"].value;
        var email = document.forms["form"]["email"].value;


        if (name == "") {
            alert("Name must be filled out");
            return false;
        } else {
            console.log(regexp_name.test(name));
            card.img.style.display = 'none';
//            input.name.style.display = 'none';
        }

        if (phone == "") {
            alert("Phone must be filled out");
            return false;
        } else {
            console.log('phone: ' + phone);
            console.log(regexp_phone.test(phone));
        }

        if (email == "") {
            alert("Email must be filled out");
            return false;
        } else {
            console.log(regexp_email.test(email));
        }

    }
