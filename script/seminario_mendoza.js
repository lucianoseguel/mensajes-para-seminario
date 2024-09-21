// Funciones principales para maestras de seminario

const validado = sessionStorage.getItem("validado");

if (validado === null) {

    
    window.location.href = 'index.html';

} else {
    console.log('Adentro')
}



//ARRAY GLOBAL DE LAS MAEASTRAS 
const todaslasestacas = [
    // Mendoza
    ["Luciano", 5492615894553, "Administrativo de instituto", "Instituto", "Mensaje","Enviar Mensaje"],
    ["Fabiana", 5492615893612, "Supervisora de seminario", "Mendoza", "Mensaje", "Enviar mensaje"],
    ["Micaela", 5492615893612, "Maestra de Seminario", "Mendoza", "Mensaje", "Enviar mensaje"],
    ["Jose", 5492614184609, "Maestro de seminario", "La Favorita", "Mensaje", "Enviar mensaje"],
    ["Norma", 5492616121128, "Maestra de seminario", "San Miguel", "Mensaje", "Enviar mensaje"],
    ["Elina", 5492615387347, "Maestra de seminario", "Plumerillo 2", "Mensaje", "Enviar mensaje"],
    ["Ivana", 5492612527277, "Maestra de seminario", "Cementista", "Mensaje", "Enviar mensaje"],
    ["Juli", 5492613355469, "Maestra de seminario", "Las Heras", "Mensaje", "Enviar mensaje"],
    
    // Godoy Cruz
    ["Gime", 5492613361430, "Maestra de seminario", "Luján", "Mensaje", "Enviar mensaje"],
    ["Keyla", 5492616801581, "Maestra de seminario", "Uspallata", "Mensaje", "Enviar mensaje"],
    ["Paula", 5492612412255, "Maestra de seminario", "Carrodilla", "Mensaje", "Enviar mensaje"],
    ["Joaquin", 5492615167812, "Maestro de seminario", "Estanzuela", "Mensaje", "Enviar mensaje"],
    ["Azul", 5492612501013, "Maestra de seminario", "Villa del Parque", "Mensaje", "Enviar mensaje"],
    ["Elaine", 5492612538765, "Maestra de seminario", "Godoy Cruz Centro", "Mensaje", "Enviar mensaje"],
    ["Florencia", 5492617129411, "Maestra de seminario", "Ugarteche", "Mensaje", "Enviar mensaje"],
    ["Juana", 5492615603162, "Maestra de seminario", "Sarmiento", "Mensaje", "Enviar mensaje"],

    // Guaymallén
    ["Jesica", 5492612156642, "Maestra de seminario", "Santa Ana", "Mensaje", "Enviar mensaje"],
    ["Cristina", 5492617218601, "Maestra de seminario", "Santa Ana", "Mensaje", "Enviar mensaje"],
    ["Sandra", 5492614704959, "Maestra de seminario", "Dorrego", "Mensaje", "Enviar mensaje"],
    ["Blanca", 5493425605624, "Maestra de seminario", "Dorrego", "Mensaje", "Enviar mensaje"],
    ["Ybet", 5492613462444, "Maestra de seminario", "San José", "Mensaje", "Enviar mensaje"],
    ["Ainoa", 5492616703080, "Maestra de seminario", "Guaymallén", "Mensaje", "Enviar mensaje"],
    ["Gimena", 5492615562473, "Maestra de seminario", "Rodeo de la Cruz", "Mensaje", "Enviar mensaje"],
    ["Bélen", 5492634400023, "Maestra de seminario", "Lavalle", "Mensaje", "Enviar mensaje"],
    ["Nilda", 5492615160565, "Maestra de seminario", "Colonia Segovia", "Mensaje", "Enviar mensaje"],
    ["Sandra", 5492614858811, "Maestra de seminario", "Bermejo", "Mensaje", "Enviar mensaje"],

    // Maipú
    ["Lorena", 5492612446796, "Maestra de seminario", "Maipú", "Mensaje", "Enviar mensaje"],
    ["Pedro", 5492616420680, "Maestro de seminario", "La Gloria", "Mensaje", "Enviar mensaje"],
    ["Jaqueline", 5492614674618, "Maestra de seminario", "Unimev", "Mensaje", "Enviar mensaje"],
    ["Mariana", 5492616240069, "Maestra de seminario", "Rodeo del Medio", "Mensaje", "Enviar mensaje"],
    ["Abi", 5492613030235, "Maestra de seminario", "Colonia Bombal", "Mensaje", "Enviar mensaje"],
    ["Natali", 5492613077580, "Maestra de seminario", "Gutiérrez", "Mensaje", "Enviar mensaje"],

    // San Rafael
    ["Iris", 5492604012741, "Maestra de seminario", "Malargüe", "Mensaje", "Enviar mensaje"],
    ["Debora", 5492604327074, "Maestra de seminario", "San Rafael 1", "Mensaje", "Enviar mensaje"],
    ["Laura", 5492604031633, "Maestra de seminario", "Parque el Molino", "Mensaje", "Enviar mensaje"],
    ["Tatiana", 5492625439070, "Maestra de seminario", "Rama 2 de Alvear", "Mensaje", "Enviar mensaje"],
    ["Olga", 5492604202856, "Maestra de seminario", "San Rafael 2", "Mensaje", "Enviar mensaje"],
    ["Lorena", 5492994684539, "Maestra de seminario", "Salto las Rosas", "Mensaje", "Enviar mensaje"],
    ["Loana", 5492604003165, "Maestra de seminario", "Mitre", "Mensaje", "Enviar mensaje"],
    ["Maria Luisa", 5492625637468, "Maestra de seminario", "Pellegrini", "Mensaje", "Enviar mensaje"],
    ["Fanny", 5492974234490, "Maestra de seminario", "Ballofet", "Mensaje", "Enviar mensaje"],
    ["Micaela", 5492625635945, "Maestra de seminario", "Pacífico", "Mensaje", "Enviar mensaje"],
    ["Maria", 5492604271102, "Maestra de seminario", "San Rafael 3", "Mensaje", "Enviar mensaje"]
];

const maestras_mendoza = [

    // Líderes y empleados
    // NOMBRE, TELÉFONO, ROL, BARRIO, XMENSAJE, ENVIAR MENSAJE
    
    ["Luciano", 5492615894553, "Administrativo de instituto", "Instituto", "Mensaje", "Enviar mensaje"],
    ["Fabiana", 5492615893612, "Supervisora de seminario", "Mendoza", "Mensaje", "Enviar mensaje"],
    ["Micaela", 5492615893612, "Maestra de Seminario", "Mendoza", "Mensaje", "Enviar mensaje"],
    ["Jose", 5492614184609, "Maestro de seminario", "La Favorita", "Mensaje", "Enviar mensaje"],
    ["Norma", 5492616121128, "Maestra de seminario", "San Miguel", "Mensaje", "Enviar mensaje"],
    ["Elina", 5492615387347, "Maestra de seminario", "Plumerillo 2", "Mensaje", "Enviar mensaje"],
    ["Ivana", 5492612527277, "Maestra de seminario", "Cementista", "Mensaje", "Enviar mensaje"],
    ["Juli", 5492613355469, "Maestra de seminario", "Las Heras", "Mensaje", "Enviar mensaje"]
];

const maestras_godoycruz = [

    // Líderes y empleados
    // NOMBRE, TELÉFONO, ROL, BARRIO, XMENSAJE, ENVIAR MENSAJE
    
    ["Gime", 5492613361430, "Maestra de seminario", "Lujan", "Mensaje", "Enviar mensaje"],
    ["Keyla", 5492616801581, "Maestra de seminario", "Uspallata", "Mensaje", "Enviar mensaje"],
    ["Paula", 5492612412255, "Maestra de seminario", "Carrodilla", "Mensaje", "Enviar mensaje"],
    ["Joaquin", 5492615167812, "Maestro de seminario", "Estanzuela", "Mensaje", "Enviar mensaje"],
    ["Azul", 5492612501013, "Maestra de seminario", "Villa Del Parque", "Mensaje", "Enviar mensaje"],
    ["Elaine", 5492612538765, "Maestra de seminario", "Godoy Cruz Centro", "Mensaje", "Enviar mensaje"],
    ["Florencia", 5492617129411, "Maestra de seminario", "Ugarteche", "Mensaje", "Enviar mensaje"],
    ["Juana", 5492615603162, "Maestra de seminario", "Sarmiento", "Mensaje", "Enviar mensaje"]
];
const maestras_Guaymallen = [
    
    // Líderes y empleados
    // NOMBRE, TELÉFONO, ROL, BARRIO, XMENSAJE, ENVIAR MENSAJE
    
    ["Jesica", 5492612156642, "Maestra de seminario", "Santa Ana", "Mensaje", "Enviar mensaje"],
    ["Cristina", 5492617218601, "Maestra de seminario", "Santa Ana", "Mensaje", "Enviar mensaje"],
    ["Sandra", 5492614704959, "Maestra de seminario", "Dorrego", "Mensaje", "Enviar mensaje"],
    ["Blanca", 5493425605624, "Maestra de seminario", "Dorrego", "Mensaje", "Enviar mensaje"],
    ["Ybet", 5492613462444, "Maestra de seminario", "San José", "Mensaje", "Enviar mensaje"],
    ["Ainoa", 5492616703080, "Maestra de seminario", "Guaymallen", "Mensaje", "Enviar mensaje"],
    ["Gimena", 5492615562473, "Maestra de seminario", "Rodeo de la Cruz", "Mensaje", "Enviar mensaje"],
    ["Bélen", 5492634400023, "Maestra de seminario", "Lavalle", "Mensaje", "Enviar mensaje"],
    ["Nilda", 5492615160565, "Maestra de seminario", "Colonia Segovia", "Mensaje", "Enviar mensaje"],
    ["Sandra", 5492614858811, "Maestra de seminario", "Bermejo", "Mensaje", "Enviar mensaje"]
];



const maestras_Maipu = [
    ["Lorena", 5492612446796, "Maestra de seminario", "Maipu", "Mensaje", "Enviar mensaje"],
    ["Pedro", 5492616420680, "Maestro de seminario", "La Gloria", "Mensaje", "Enviar mensaje"],
    ["Jaqueline", 5492614674618, "Maestra de seminario", "Unimev", "Mensaje", "Enviar mensaje"],
    ["Mariana", 5492616240069, "Maestra de seminario", "Rodeo del Medio", "Mensaje", "Enviar mensaje"],
    ["Abi", 5492613030235, "Maestra de seminario", "Colonia Bombal", "Mensaje", "Enviar mensaje"],
    ["Natali", 5492613077580, "Maestra de seminario", "Gutierrez", "Mensaje", "Enviar mensaje"]
];

const maestras_SanRafael = [
    ["Iris", 5492604012741, "Maestra de seminario", "Malargüe", "Mensaje", "Enviar mensaje"],
    ["Debora", 5492604327074, "Maestra de seminario", "San Rafael 1", "Mensaje", "Enviar mensaje"],
    ["Laura", 5492604031633, "Maestra de seminario", "Parque el Molino", "Mensaje", "Enviar mensaje"],
    ["Tatiana", 5492625439070, "Maestra de seminario", "Rama 2 de Alvear", "Mensaje", "Enviar mensaje"],
    ["Olga", 5492604202856, "Maestra de seminario", "San Rafael 2", "Mensaje", "Enviar mensaje"],
    ["Lorena", 5492994684539, "Maestra de seminario", "Salto las Rosas", "Mensaje", "Enviar mensaje"],
    ["Loana", 5492604003165, "Maestra de seminario", "Mitre", "Mensaje", "Enviar mensaje"],
    ["Maria Luisa", 5492625637468, "Maestra de seminario", "Pellegrini", "Mensaje", "Enviar mensaje"],
    ["Fanny", 5492974234490, "Maestra de seminario", "Ballofet", "Mensaje", "Enviar mensaje"],
    ["Micaela", 5492625635945, "Maestra de seminario", "Pacífico", "Mensaje", "Enviar mensaje"],
    ["Maria", 5492604271102, "Maestra de seminario", "San Rafael 3", "Mensaje", "Enviar mensaje"]
];





 //Define las variables globales

let mensaje = document.getElementById('mensaje')
let textarray = [] //Este es el texto que escribimos que quedara en un array para reutilizarlo
let estaca = document.getElementById('estacas')
let maestras =  todaslasestacas
//--------------------------Texto y como funciona----------------------------------



//Obtenemos el texto escrito en el area

mensaje.addEventListener('input', function() {
    // Obtenemos el valor del textarea
    const texto = mensaje.value;
    
    // Dividimos el texto usando un delimitador (por ejemplo, espacio)
    const newarraytext = texto.split(" ");
    
    // Limpiamos la consola antes de imprimir los nuevos resultados
    
    // Imprimimos el array dividido en la consola
    
    textarray =  newarraytext    

    
}); 


estaca.addEventListener('input', function(){

    let estacaselected = estaca.value
    console.log(estacaselected)

    if (estacaselected == 'TODO'){

        maestras =  todaslasestacas;

    } else if (estacaselected == 'Mendoza'){

        maestras = maestras_mendoza;

    }else if (estacaselected == 'Godoy Cruz'){

        maestras = maestras_godoycruz;
        
    }
    else if (estacaselected == 'Guaymallen'){

        maestras = maestras_Guaymallen;
        
    }
    else if (estacaselected == 'Maipu'){

        maestras = maestras_Maipu;
        
    }else if (estacaselected == 'San Rafael'){

        maestras = maestras_SanRafael;
        
    }

    

})




setInterval(table,100)


setInterval(console.clear,5000)



//-------------------------------Tabla de maestras de seminario----------------------------


// Seleccionamos el elemento donde vamos a mostrar la lista







function table(){

let maestrasTableBody = document.querySelector('#maestrasTable tbody');
maestrasTableBody.innerHTML = '';//para que no se multipliquen las celdas

 //Seleccionador de estaca





// Bucle "for" para recorrer el array maestras
for (let i = 0; i < maestras.length; i++) {
    // Creamos una nueva fila (tr)
    let row = document.createElement('tr');
    let mensaje_final = [];
    mensaje_final = (textarray.slice());
    
    let newfrase = nuevotexto(mensaje_final,maestras[i])

    //console.log(newfrase)
   
  
   
    
    // Bucle interno para agregar cada dato (nombre, teléfono, rol, ubicación) en una celda (td)
    for (let j = 0; j < maestras[i].length; j++) {
        // Creamos una celda (td) y asignamos el dato correspondiente
       
        
        if (maestras[i][j] == maestras[i][4]){ //Funcion para escribir la frase y reemplazarla
            let cell = document.createElement('td')//Crea la celda
            maestras[i][j] = newfrase.join(' ');
            cell.textContent = maestras[i][j]; //Añade un nueva celda con la informacion
             // Añadimos la celda a la fila
        row.appendChild(cell);
            
        } else if (maestras[i][j] == maestras[i][5]){ //condicional para que envie el mensaje

            let cell = document.createElement('a')//Crea la celda
            
            maestras[i][5] = generador_link_wsp(newfrase.join(" "), maestras[i])

            cell = maestras[i][j]; //Añade un nueva celda con la informacion
             // Añadimos la celda a la fila
        row.appendChild(cell);
            
        }else{
        let cell = document.createElement('td')//Crea la celda
         cell.textContent = maestras[i][j]; //Añade un nueva celda con la informacion
             // Añadimos la celda a la fila
        row.appendChild(cell);
        }

       
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

//----------------------FUNCION PARA CREAR EL LINK---------------------------------------
function generador_link_wsp(mensaje,datos){
    
    let numero = datos[1]
    
    
    let url = document.createElement("a");
    url.href = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`; // Asignar la URL del array
    url.textContent = "Enviar Mensaje"; // Asignar el texto del enlace 
    url.target = "_blank";

    return url;
}

//----------------------------Conversos re elemntos HTML--------------
function texto_a_enlace(texto) {
    const div = document.createElement('a');
    div.innerHTML = texto.trim();
    return div.firstChild;
}


//--------------------FUNCIONES UTILES----------------------


function copytext(text){ //Funcion del boton que copia el numero
    navigator.clipboard.writeText(text);
    
}

