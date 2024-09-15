// Funciones principales para maestras de seminario


const maestras = [

    //Lideres y empleados
    //NOMBRE, TELEFONO , ROL , BARRIO, XMENSAJE
    
    ["Luciano",5492615894553,"Administrativo de instituto", "Instituto",'Mensaje'],
    ["Fabiana",5492615893612,"Supervisora de seminario",'Mendoza','Mensaje'],
    ["Micaela",5492615893612,"Maestra de Seminario",'Mendoza','Mensaje']


]

 //ejecuta la tabla constantemente


let mensaje = document.getElementById('mensaje')
let textarray = [] //Este es el texto que escribimos que quedara en un array para reutilizarlo


//--------------------------Texto y como funciona----------------------------------




mensaje.addEventListener('input', function() {
    // Obtenemos el valor del textarea
    const texto = mensaje.value;
    
    // Dividimos el texto usando un delimitador (por ejemplo, espacio)
    const newarraytext = texto.split(" ");
    
    // Limpiamos la consola antes de imprimir los nuevos resultados
    
    // Imprimimos el array dividido en la consola
    
    textarray =  newarraytext  

   


    

   

    
}); 



setInterval(table,100)


setInterval(console.clear,5000)



//-------------------------------Tabla de maestras de seminario----------------------------


// Seleccionamos el elemento donde vamos a mostrar la lista







function table(){

let maestrasTableBody = document.querySelector('#maestrasTable tbody');
maestrasTableBody.innerHTML = '';//para que no se multipliquen las celdas




// Bucle "for" para recorrer el array maestras
for (let i = 0; i < maestras.length; i++) {
    // Creamos una nueva fila (tr)
    let row = document.createElement('tr');
    let mensaje_final = [];
    mensaje_final = (textarray.slice());
    
    let newfrase = nuevotexto(mensaje_final,maestras[i])
    console.log(newfrase)
   
  
   
    
    // Bucle interno para agregar cada dato (nombre, teléfono, rol, ubicación) en una celda (td)
    for (let j = 0; j < maestras[i].length; j++) {
        // Creamos una celda (td) y asignamos el dato correspondiente
        let cell = document.createElement('td');
        
        if (maestras[i][j] == maestras[i][4]){
            
         
           
            maestras[i][j] = newfrase.join(' ');
            
            }

        
       

       
       


         cell.textContent = maestras[i][j];


         
            
            
        
        





        // Añadimos la celda a la fila
        row.appendChild(cell);
    }

    // Añadimos la fila completa al cuerpo de la tabla
    maestrasTableBody.appendChild(row);
 
   
}
}

// -----------Frase ---------------------------

function nuevotexto(array,datos) {
   
   
    for (let k = 0 ; k < array.length ; k++){
           
            
            
        
        if ((array[k]) == '(nombre)'){
            
            array[k] = datos[0]

            
            
        }else if ((array[k]) == '(barrio)'){
            
            array[k] = datos[3]




            
            
        }

        



    } 

    
    return (array)

}



//--------------------FUNCIONES UTILES----------------------


function copytext(text){ //Funcion del boton que copia el numero
    navigator.clipboard.writeText(text);
    
}

