
function ispisiPoruku()
{
    
    document.querySelectorAll('#forma input')
    let ime = document.querySelectorAll('#forma input')[0].value
    let email = document.querySelectorAll('#forma input')[1].value
    let message = document.querySelector('textarea').value
    confirm("You name is: " + ime + '\n' +" Your email is: " + email
    + '\n' + " Message: " + message)

}

document.getElementById('dugme').addEventListener('click',ispisiPoruku);






