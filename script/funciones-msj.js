// Funciones principales para maestras de seminario


//ARRAY GLOBAL DE LAS MAEASTRAS 
const todaslasestacas = [
    // Mendoza
    ["Luciano", 5492615894553, "Administrativo de instituto", "Instituto", "Mensaje"],
    ["Fabiana", 5492615893612, "Supervisora de seminario", "Mendoza", "Mensaje"],
    ["Micaela", 5492615893612, "Maestra de Seminario", "Mendoza", "Mensaje"],
    ["Jose", 5492614184609, "Maestro de seminario", "La Favorita", "Mensaje"],
    ["Norma", 5492616121128, "Maestra de seminario", "San Miguel", "Mensaje"],
    ["Elina", 5492615387347, "Maestra de seminario", "Plumerillo 2", "Mensaje"],
    ["Ivana", 5492612527277, "Maestra de seminario", "Cementista", "Mensaje"],
    ["Juli", 5492613355469, "Maestra de seminario", "Las Heras", "Mensaje"],
    
    // Godoy Cruz
    ["Gime", 5492613361430, "Maestra de seminario", "Luján", "Mensaje"],
    ["Keyla", 5492616801581, "Maestra de seminario", "Uspallata", "Mensaje"],
    ["Paula", 5492612412255, "Maestra de seminario", "Carrodilla", "Mensaje"],
    ["Joaquin", 5492615167812, "Maestro de seminario", "Estanzuela", "Mensaje"],
    ["Azul", 5492612501013, "Maestra de seminario", "Villa del Parque", "Mensaje"],
    ["Elaine", 5492612538765, "Maestra de seminario", "Godoy Cruz Centro", "Mensaje"],
    ["Florencia", 5492617129411, "Maestra de seminario", "Ugarteche", "Mensaje"],
    ["Juana", 5492615603162, "Maestra de seminario", "Sarmiento", "Mensaje"],

    // Guaymallén
    ["Jesica", 5492612156642, "Maestra de seminario", "Santa Ana", "Mensaje"],
    ["Cristina", 5492617218601, "Maestra de seminario", "Santa Ana", "Mensaje"],
    ["Sandra", 5492614704959, "Maestra de seminario", "Dorrego", "Mensaje"],
    ["Blanca", 5493425605624, "Maestra de seminario", "Dorrego", "Mensaje"],
    ["Ybet", 5492613462444, "Maestra de seminario", "San José", "Mensaje"],
    ["Ainoa", 5492616703080, "Maestra de seminario", "Guaymallén", "Mensaje"],
    ["Gimena", 5492615562473, "Maestra de seminario", "Rodeo de la Cruz", "Mensaje"],
    ["Bélen", 5492634400023, "Maestra de seminario", "Lavalle", "Mensaje"],
    ["Nilda", 5492615160565, "Maestra de seminario", "Colonia Segovia", "Mensaje"],
    ["Sandra", 5492614858811, "Maestra de seminario", "Bermejo", "Mensaje"],

    // Maipú
    ["Lorena", 5492612446796, "Maestra de seminario", "Maipú", "Mensaje"],
    ["Pedro", 5492616420680, "Maestro de seminario", "La Gloria", "Mensaje"],
    ["Jaqueline", 5492614674618, "Maestra de seminario", "Unimev", "Mensaje"],
    ["Mariana", 5492616240069, "Maestra de seminario", "Rodeo del Medio", "Mensaje"],
    ["Abi", 5492613030235, "Maestra de seminario", "Colonia Bombal", "Mensaje"],
    ["Natali", 5492613077580, "Maestra de seminario", "Gutiérrez", "Mensaje"],

    // San Rafael
    ["Iris", 5492604012741, "Maestra de seminario", "Malargüe", "Mensaje"],
    ["Debora", 5492604327074, "Maestra de seminario", "San Rafael 1", "Mensaje"],
    ["Laura", 5492604031633, "Maestra de seminario", "Parque el Molino", "Mensaje"],
    ["Tatiana", 5492625439070, "Maestra de seminario", "Rama 2 de Alvear", "Mensaje"],
    ["Olga", 5492604202856, "Maestra de seminario", "San Rafael 2", "Mensaje"],
    ["Lorena", 5492994684539, "Maestra de seminario", "Salto las Rosas", "Mensaje"],
    ["Loana", 5492604003165, "Maestra de seminario", "Mitre", "Mensaje"],
    ["Maria Luisa", 5492625637468, "Maestra de seminario", "Pellegrini", "Mensaje"],
    ["Fanny", 5492974234490, "Maestra de seminario", "Ballofet", "Mensaje"],
    ["Micaela", 5492625635945, "Maestra de seminario", "Pacífico", "Mensaje"],
    ["Maria", 5492604271102, "Maestra de seminario", "San Rafael 3", "Mensaje"]
];



const maestras_mendoza = [

    //Lideres y empleados
    //NOMBRE, TELEFONO , ROL , BARRIO, XMENSAJE
    
    ["Luciano",5492615894553,"Administrativo de instituto", "Instituto",'Mensaje'],
    ["Fabiana",5492615893612,"Supervisora de seminario",'Mendoza','Mensaje'],
    ["Micaela",5492615893612,"Maestra de Seminario",'Mendoza','Mensaje'],
    ['Jose', 5492614184609, 'Maestro de seminario','La Favorita', 'Mensaje' ],
    ["Norma", 5492616121128, "Maestra de seminario", "San Miguel", "Mensaje"],
    ["Elina", 5492615387347, "Maestra de seminario", "Plumerillo 2", "Mensaje"],
    ["Ivana", 5492612527277, "Maestra de seminario", "Cementista", "Mensaje"],
    ["Juli", 5492613355469, "Maestra de seminario", "Las Heras", "Mensaje"]

]


const maestras_godoycruz = [//GODOY CRUZ

    //Lideres y empleados
    //NOMBRE, TELEFONO , ROL , BARRIO, XMENSAJE
    
    ["Gime", 5492613361430, "Maestra de seminario", "Lujan", "Mensaje"],
    ["Keyla", 5492616801581, "Maestra de seminario", "Uspallata", "Mensaje"],
    ["Paula", 5492612412255, "Maestra de seminario", "Carrodilla", "Mensaje"],
    ["Joaquin", 5492615167812, "Maestro de seminario", "Estanzuela", "Mensaje"],
    ["Azul", 5492612501013, "Maestra de seminario", "Villa Del Parque", "Mensaje"],
    ["Elaine", 5492612538765, "Maestra de seminario", "Godoy Cruz Centro", "Mensaje"],
    ["Florencia", 5492617129411, "Maestra de seminario", "Ugarteche", "Mensaje"],
    ["Juana", 5492615603162, "Maestra de seminario", "Sarmiento", "Mensaje"]
]

const maestras_Guaymallen = [
    ["Jesica", 5492612156642, "Maestra de seminario", "Santa ana", "Mensaje"],
    ["Cristina", 5492617218601, "Maestra de seminario", "Santa ana", "Mensaje"],
    ["Sandra", 5492614704959, "Maestra de seminario", "Dorrego", "Mensaje"],
    ["Blanca", 5493425605624, "Maestra de seminario", "Dorrego", "Mensaje"],
    ["Ybet", 5492613462444, "Maestra de seminario", "San Jose", "Mensaje"],
    ["Ainoa", 5492616703080, "Maestra de seminario", "Guaymallen", "Mensaje"],
    ["Gimena", 5492615562473, "Maestra de seminario", "Rodeo de la cruz", "Mensaje"],
    ["Bélen", 5492634400023, "Maestra de seminario", "Lavalle", "Mensaje"],
    ["Nilda", 5492615160565, "Maestra de seminario", "Colonia Segovia", "Mensaje"],
    ["Sandra", 5492614858811, "Maestra de seminario", "Bermejo", "Mensaje"]
];



const maestras_Maipu = [
    ["Lorena", 5492612446796, "Maestra de seminario", "Maipu", "Mensaje"],
    ["Pedro", 5492616420680, "Maestro de seminario", "La Gloria", "Mensaje"],
    ["Jaqueline", 5492614674618, "Maestra de seminario", "Unimev", "Mensaje"],
    ["Mariana", 5492616240069, "Maestra de seminario", "Rodeo del Medio", "Mensaje"],
    ["Abi", 5492613030235, "Maestra de seminario", "Colonia Bombal", "Mensaje"],
    ["Natali", 5492613077580, "Maestra de seminario", "Gutierrez", "Mensaje"]
];

const maestras_SanRafael = [
    ["Iris", 5492604012741, "Maestra de seminario", "Malargüe", "Mensaje"],
    ["Debora", 5492604327074, "Maestra de seminario", "San Rafael 1", "Mensaje"],
    ["Laura", 5492604031633, "Maestra de seminario", "Parque el Molino", "Mensaje"],
    ["Tatiana", 5492625439070, "Maestra de seminario", "Rama 2 de Alvear", "Mensaje"],
    ["Olga", 5492604202856, "Maestra de seminario", "San Rafael 2", "Mensaje"],
    ["Lorena", 5492994684539, "Maestra de seminario", "Salto las Rosas", "Mensaje"],
    ["Loana", 5492604003165, "Maestra de seminario", "Mitre", "Mensaje"],
    ["Maria Luisa", 5492625637468, "Maestra de seminario", "Pellegrini", "Mensaje"],
    ["Fanny", 5492974234490, "Maestra de seminario", "Ballofet", "Mensaje"],
    ["Micaela", 5492625635945, "Maestra de seminario", "Pacífico", "Mensaje"],
    ["Maria", 5492604271102, "Maestra de seminario", "San Rafael 3", "Mensaje"]
];





 //ejecuta la tabla constantemente


let mensaje = document.getElementById('mensaje')
let textarray = [] //Este es el texto que escribimos que quedara en un array para reutilizarlo
let estaca = document.getElementById('estacas')
let maestras = NaN
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

