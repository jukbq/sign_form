$('.sun').click(function() {
    $('.signUpForm').addClass('displayNone')
    $('.signInForm').addClass('displayFlex')
});
$('.sin').click(function() {
    $('.signUpForm').removeClass('displayNone')
    $('.signInForm').removeClass('displayFlex')
});


/*--------------------------------------------------*/


let personArr = [];
let person = {};
let x = []

$('.signUpForm').find('input').blur(function() {
    if (this.name == 'email') {
        this.value = this.value.toLowerCase();
        person[this.name] = $(this).val();
    }
    person[this.name] = $(this).val();

});

$('.supBtn').click(function(e) {
    e.preventDefault();
    $.each(person, function(key, value) {
        x.push(value)
    });
    if (x.length < 4) {

        x = []
    }
    if (x.length == 4) {
        if (personArr !== '') {
            if (localStorage.length > 0 && localStorage.getItem('personArr')) {
                personArr = JSON.parse(localStorage.getItem('personArr'))
            }

            personArr.push(person)
            localStorage.setItem('personArr', JSON.stringify(personArr));
        }
    }
    /* console.log(JSON.parse(localStorage.getItem('personArr')));
    console.log(x); */



});