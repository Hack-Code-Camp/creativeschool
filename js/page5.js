const form = document.querySelector('.jsapp');
const input = document.querySelector('.applying');
const div = document.querySelectorAll('.form-row');
const textinput = document.getElementsByClassName('inputt');




input.addEventListener('click', function(e){

    e.preventDefault();

    if(textinput.value ==''){
        form.innerHTML = '<h2>pls fill in all fields</h2>';
    }
});