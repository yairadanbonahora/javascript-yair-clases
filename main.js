//PRIMERA CLASE
// let nombre = prompt ("Ingrese su nombre");
// alert ("Hola," + " " + nombre + "!");

// let numero = prompt ("Ingrese monto a comprar USD");
// let monto = parseInt (numero);

// let importeTotal = monto + 20;
// alert ("Usted debe pagar:" + " " + importeTotal);

// let usuario = prompt ("Ingrese su nombre");
// let usuarioApellido = prompt ("Ingrese su apellido");
// let nombreCompleto = usuario + " " + usuarioApellido;
// alert (nombreCompleto);

// console.log (nombre)
// console.log (importeTotal)
// console.log (nombreCompleto)

//SEGUNDA CLASE
// let nombreIngresado = prompt ("Ingrese su nombre");
// let nombre = nombreIngresado;
// let apellidoIngresado = prompt ("Ingrese su apellido");
// let apellido = apellidoIngresado; 

// para verificar que escriba un nombre
// if (nombreIngresado == "" || apellidoIngresado == "") {
//     alert ("Por favor ingrese su nombre completo");
// } else if (nombre == nombreIngresado && apellido == apellidoIngresado){
//     alert ("Bienvenido" + " " + nombre + " " + apellido + "!");
// }

// let edad = prompt ("Ingrese su edad");
// let edadParseada = parseInt (edad);

// para saber si es menor/mayor de edad una vez ingresada la edad
// if (edadParseada < 18) {
//     alert ("Usted es menor de edad")
// } else if (edadParseada > 18) {
//     alert ("Usted es mayor de edad");
// } else if (edad == "") {
//     alert ("Por favor ingrese su edad"); 
// }


//TERCER CLASE
// let autor = prompt ("Ingrese nombre de autor");

// //buscador de autores y su sección correspondiente
// while (autor != "ESC") {
//     switch (autor) {
//         case "O´Donnell":
//             alert ("Está en la sección ´Política´");
//             break; 
            
//         case "Foucault":
//             alert ("Está en la sección ´Filosofía´");
//             break;
        
//         case "Raymond Aron":
//             alert ("Están en la sección ´Historia´");
//             break;

//         default: 
//             alert ("Ese autor no se encuentra disponible");
//     } 

//     autor = prompt ("Ingrese nombre de autor");
//     console.log (autor); 
// }

// //para otorgar turnos
// for (let turno = 1; turno <= 11; turno ++) {
//     if (turno == 11) {
//         alert ("Disculpe, el cupo está completo");
//         break;
//     }
//     let ingresarNombre = prompt ("Ingresar nombre");
//     console.log ("Turno N" + turno + " Nombre: " + ingresarNombre );
// }

// //era para probar el do jaja
// let colores = prompt ("Ingrese un color");
// do {
//     console.log (colores);
//     colores = prompt ("Ingrese otro color");
// } while (colores != "negro")


//CUARTA CLASE

//funciones para sumar- restar y aplicar IVA
// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const iva = (x) => x * 0.21;

// //para que el usuario ingrese nombre y se verifique
// let usuarioIngresado = prompt ("Ingrese nombre de usuario");
// let usuario = usuarioIngresado;

// if (usuarioIngresado == "") {
//     alert ("Por favor ingrese su usuario");
//     } else if (usuario == usuarioIngresado){
//     alert ("Bienvenido " + usuario + "!");
// }

// //para que el usuario ingrese email y se verifique
// let email = prompt ("Ingrese su email");
// alert ("Usted ha ingresado " + email);

// //para seleccionar qué producto se quiere comprar, qué cantidad y sumar o agregar IVA
// let compra = prompt ("Indique qué producto quiere comprar: caños, chapas, discos");
// while (compra != "ESC") {
//     switch (compra) {
//         case "caños": 
//             let cantidad = parseInt (prompt ("Indique cantidad a comprar"));
//             if (cantidad <= 5) {
//                 alert ("Usted ha comprado: " + cantidad);
//             } else if (cantidad <= 10) {
//                 let resultado = cantidad + 1;
//                 alert ("Recibirá un caño más de regalo. Recibirá: " + resultado);
//             } else {
//                 let resultado = cantidad + 2
//                 alert ("Recibirá dos caños más de regalo. Recibirá: " + resultado);
//             }
//             block;
//         case "chapas":
//             let cantidadAComprar = parseInt (prompt ("Indique cantidad a comprar"));
//             if (cantidadAComprar <= 5) {
//                 alert ("Usted ha comprado: " + cantidadAComprar);
//             } else if (cantidadAComprar <= 10) {
//                 let resultado = cantidadAComprar + 1;
//                 alert ("Recibirá un caño más de regalo. Recibirá: " + resultado);
//             } else {
//                 let resultado = cantidadAComprar + 2
//                 alert ("Recibirá dos caños más de regalo. Recibirá: " + resultado);
//             }
//             block;
//         case "discos": 
//             const precioDiscos = 340;
//             let ingresarNumero = parseInt (prompt ("Ingresar cantidad"));
//             let valorTotal = ingresarNumero * precioDiscos;
//             let precioAPagar = suma (valorTotal, iva(valorTotal));
//             alert ("Deberá abonar: " + precioAPagar);
//             break;
//         default: 
//             alert ("Usted no ha seleccionado ningún producto");
//             break;
//     }
// }


// //QUINTA CLASE- OBJETOS
//función para crear usuarios
// class CrearUsuario {
//     constructor (nombre, localidad, mail){
//         this.nombre = nombre;
//         this.localidad = localidad;
//         this.pais = "Argentina";
//         this.mail = mail;
//     }

//     //función para hablar
//     hablar () {
//         console.log ("Hola soy " + this.nombre + ", vivo en " + this.localidad + ". Mi mail es: " + this.mail);
//     }
// }

// //para pedir los datos del usuario 1
// const nombre = prompt ("Ingrese nombre de usuario");
// const localidad = prompt ("Ingrese su localidad");
// const mail = prompt ("Ingrese su mail");

// const usuario1 = new CrearUsuario (nombre, localidad, mail);
// const usuario2 = new CrearUsuario ("Claudio", "La Plata", "claudio@gmail");
// const usuario3 = new CrearUsuario ("Sandra", "Junin", "sandra@gmail");

// usuario1.hablar ();
// console.log (usuario2);
// console.log (usuario3); 

// SEXTA CLASE- ARRAYS
// Entregable
//para crear array de máquinas
// let maquinas = ["cortadora de chapas", "plegadora", "balancin"];
// console.log (maquinas.join ("\n"));

// //para agregar elementos al array ya creado
// let maquinasAgregarALista = ["agujereadora de banco", "cortadora de fierros"];
// let ListadoCompleto = maquinas.concat (maquinasAgregarALista);
// console.log (ListadoCompleto.join ("\n"));

// //Complementario
// //ordenado por orden alfabético
// let maquinas = ["cortadora de chapas", "plegadora", "balancin"];
// let maquinasAgregarALista = ["agujereadora de banco", "cortadora de fierros"];
// let ListadoCompleto = maquinas.concat (maquinasAgregarALista);
// console.log ((ListadoCompleto.sort()).join ("\n"));

// // ordenado por precio
// let maquinas = [
//     {name: "cortadora de chapas", precio: 30000},
//     {name: "plegadora", precio: 60000},
//     {name: "balancin", precio: 10000},
//     {name: "agujereadora de banco", precio: 25000},
//     {name: "cortadora de fierros", precio: 35000},
// ]; 
// maquinas.sort (function (a,b) {
//     return a.precio - b.precio;
// })
// console.log (maquinas);

// for (let precio of maquinas) {
//     console.log (precio.precio);
// }

//CLASE 8- DOM
// let listProductos = document.createElement("h3");
// listProductos.innerHTML = "Productos";
// document.body.appendChild(listProductos);

// let contenedorUl = document.createElement ("ul");
// document.body.appendChild (contenedorUl);

// let productos = ["Chapas", "Caños", "Discos"];
// for (const producto of productos) {
//     let li = document.createElement ("li");
//     li.innerHTML = producto;
//     contenedorUl.appendChild(li);
// }

//CLASE 9- EVENTOS
//desafío entregable
// let productoClick = document.getElementsByClassName ("element")[1];
// productoClick.onmouseover = () => {
//     let btn = document.createElement ("button");
//     btn.innerHTML = "Comprar";
//     document.body.appendChild (btn); 
// }

//desafío complementario
// let maquinasClick = document.getElementsByClassName ("element")[0];
// maquinasClick.onclick = () => {
//     let contenedorUl = document.createElement ("ul");
//     maquinasClick.appendChild (contenedorUl);
//     let maquinas = ["Cortadora", "Plegadora", "Balancin"];
//     for (const maquina of maquinas) {
//         let li = document.createElement ("li");
//         li.innerHTML = maquina;
//         contenedorUl.appendChild(li);
//     }
// };

//CLASE 12- JQUERY SELECTORES Y EVENTOS
//para desplegar dos opciones del menú
// let menu = document.getElementById ("menu");
// menu.onclick = () => {
//     let contenedorDiv = document.createElement ("div");
//     menu.appendChild (contenedorDiv);
//     let div = document.createElement ("div");
//     div.innerHTML = `<div class="elemento">Productos</div>
//                     <div class="elemento">Máquinas</div>`;
//     contenedorDiv.appendChild (div);  

//     menu.onclick = ""; 

//     let productos = [
//         {name:"Discos", price: 500, stock: 300},
//         {name:"Chapas", price: 10000, stock: 97},
//         {name:"Caños", price: 13000, stock: 120},
//     ]

//     //para crear lista de productos con su respectivo button
//     let divProductos = document.getElementsByClassName ("elemento") [0];
//     divProductos.onclick = () => {
//         let contenedorProduc = document.createElement ("ul");
//         divProductos.appendChild (contenedorProduc);
//         for (const producto of productos) {
//             let div = document.createElement ("div");
//             div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${producto.name}. Precio: $${producto.price} </div>`;
//             contenedorProduc.appendChild (div);

//             if (".optionSelected:checked") {
//                 divProductos.onclick = "";
//             }
//         }
       
//         let btn = document.createElement ("button");
//         btn.innerHTML = "Comprar";
//         divProductos.appendChild (btn);  

//         $("button").click ((e) => {
//             $ (".elemento")[0].append ("Usted ha agregado un producto al carrito")
//         })
//     }

//     let maquinas = [
//         {name:"Agujereadora de banco", price: 25000, stock: 50},
//         {name:"Balancin", price: 10000, stock: 68},  
//         {name: "Cortadora de chapas", price: 30000, stock: 25},
//         {name:"Cortadora de fierros", price: 35000, stock: 75},
//         {name: "Plegadora", price: 60000, stock: 32},
//     ]

//     //para crear lista de máquinas con su respectivo button
//     let divMaquinas = document.getElementsByClassName ("elemento") [1];
//     divMaquinas.onclick = () => {
//         let contenedorMaquinas = document.createElement ("ul");
//         divMaquinas.appendChild (contenedorMaquinas);
//         for (const maquina of maquinas) {
//             let div = document.createElement ("div");
//             div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${maquina.name}. Precio: $${maquina.price} </div>`;
//             contenedorMaquinas.appendChild (div);

//             if (".optionSelected:checked") {
//                 divMaquinas.onclick = "";
//             }
//         }
        
//         let btn = document.createElement ("button");
//         btn.innerHTML = "Comprar";
//         divMaquinas.appendChild (btn); 

//         $("button").click ((e) => {
//             $ (".elemento")[1].append ("Usted ha agregado una máquina al carrito")
//         })
//     }
// }


//CLASE 13- EFECTOS Y ANIMACIONES CON JQUERY
let maquinas = [
            {name:"Agujereadora de banco", price: 25000, stock: 50},
            {name:"Balancin", price: 10000, stock: 68},  
            {name: "Cortadora de chapas", price: 30000, stock: 25},
            {name:"Cortadora de fierros", price: 35000, stock: 75},
            {name: "Plegadora", price: 60000, stock: 32},
]

let menu = document.getElementById ("menu");

let btn = document.createElement ("button");
btn.innerHTML = "Ver";
menu.appendChild (btn);

for (const maquina of maquinas) {
    let opciones = document.createElement ("h4");
    opciones.innerHTML = `<h4 style="display:none" class="maquinasTodas"> ${maquina.name}. Precio: $${maquina.price} </h4>`;
    menu.appendChild (opciones);
};

$("button").click ((e) => {
    $(".maquinasTodas").slideDown ("slow", function () {
        $ (".maquinasTodas").css ({"font-size":"20px", "color":"grey"})
    }).delay (4000).slideUp ("fast");
});