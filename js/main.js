$('.sin').click(function() {
    $('.sUp').addClass('displayNone')
    $('.sIp').addClass('displayFlex')
});
$('.sup').click(function() {
    $('.sUp').removeClass('displayNone')
    $('.sIp').removeClass('displayFlex')
});
// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
(function() {
    'use strict'

    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    var forms = document.querySelectorAll('.needs-validation')

    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
/*--------------------------------------------------*/


let personArr = [];
let person = {};

$('.dataObj').find('input').blur(function() {
    person[this.name] = $(this).val();
});

$('.signInBtn').click(function(e) {
    $('.dataObj').find('input').each(function() {
        if (this.value == '') {
            e.preventDefault();

            console.log('stop');
        }



    });

    if (personArr !== '') {
        if (localStorage.length > 0 && localStorage.getItem('personArr')) {
            personArr = JSON.parse(localStorage.getItem('personArr'))
        }
        personArr.push(person)
        localStorage.setItem('personArr', JSON.stringify(personArr));
    };


    /*     console.log(person);
        console.log(personArr); */

});