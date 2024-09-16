let usuario = 'lucianoseguel'
let contrasena = 'lucianoseguel#'

let inputuser = document.getElementById('floatingInput')
let inputpassword = document.getElementById('floatingPassword')

inputuser.addEventListener('input',function(){
    let user = inputuser.value
    console.log('user')
})

inputpassword.addEventListener('input',function(){
    inputpassword = document.getElementById('floatingPassword')
})
    


function verificador(){
    
    
    

    if (inputuser == usuario && inputpassword == contrasena) {
        window.location.href = 'index.html';
    }else{
        alert('no coincide')
    }
}