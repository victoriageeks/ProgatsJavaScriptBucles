/**
 * Porgats nos ha pedido que creemos tantos iconos de gatitos como gatitos hay por adoptar.
 */
// if(gatosAdopcion<=10){
//     for (let i=0; i<gatosAdopcion; i++) {
//         const imagenGato= document.createElement("img");
//         imagenGato.src = "https://thiscatdoesnotexist.com/?";
//         imagenGato.style.width = "50px";
    
//         document.body.appendChild(imagenGato);
//     }
// }
// else{
//     for (let i=0; i<10; i++) {
//         const imagenGato= document.createElement("img");
//         imagenGato.src = "https://thiscatdoesnotexist.com/?";
//         imagenGato.style.width = "50px";
    
//         document.body.appendChild(imagenGato);
//     }
//     const txtGato = document.createElement("p");
//         txtGato.innerHTML = "<a href='#'>Haz click aquí para cargar más gatos</a>";
    
//         document.body.appendChild(txtGato);
// }



/**
 * Ejercicio 1: 
 * Modifica el bucle de creación de gatos para que, en vez de crear los gatos con las mismas imágenes, use esta URL para generar un gato aleatório ''https://thiscatdoesnotexist.com/ 
 */

/**
 * Ejercicio 2:
 * Muchos gatos no caben en nuestra Web... Modifica el código para que si 'gatosAdopcion' vale más de 10 gatos; no se muestren todos ellos. En su lugar, debe aparecer un mensaje con un enlace que diga: "Haz click aquí para cargar más gatos". El enlace no tiene que hacer nada, de momento. Piensa en que tipo de estructura de control debes utilizar.
 */

/**
 * Ejercicio 3: Progats tiene registrado en la variable 'numDonaciones' las donaciones diarias que recibe. Queremos enviar un mail de agradecimiento a todos los empleados al final del día. Escribe un bucle que simule que envíamos un correo indicando el número de donación y un mensaje de agradecimiento.
 */

let donaciones = 10; // REESTRICCIÓN: Este dato nos viene de base de datos. NO PODEMOS CAMBIAR EL VALOR DE LA VARIABLE.
for(let i=1;i<=donaciones;i++){
    console.log("Estimado socio, gracias por tu donación numero "+i+" .Has hecho feliz a muchos gatitos")
}

// ejemplo de lo que se verá por consola del Chrome:

// "Estimado socio, gracias por tu donación número 1. Has hecho feliz a muchos gatitos."
// "Estimado socio, gracias por tu donación número 2. Has hecho feliz a muchos gatitos."
//...

// "Estimado socio, gracias por tu donación número 10. Has hecho feliz a muchos gatitos."