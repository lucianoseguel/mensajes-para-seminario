let usuario = 'lucianoseguel'
let contrasena = 'lucianoseguel#'

let inputuser = document.getElementById('floatingInput')
let inputpassword = document.getElementById('floatingPassword')



let user = inputuser.addEventListener('input',function(){
    let user = inputuser.value
    console.log(user)
})



let pass = inputpassword.addEventListener('input',function(){
    let pass = inputpassword.value
    console.log(pass)    
})
    


 function verificador(event) {

    if (toString(user) ==toString(usuario) && toString(pass) == toString(contrasena)){
        event.preventDefault(); // Evita la recarga
        window.location.href = 'mensajes.html'; 
    }else{
        event.preventDefault(); // Evita la recarga
        alert("Usuario o password incorrecto")
    }
 }