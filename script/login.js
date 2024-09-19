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
    


function verificador(){
    
    
    

    if (toString(user)  == usuario && toString(pass) == contrasena) {
        window.location.href = 'index.html';
    }else{
        alert('no coincide')
    }
}

