// practica de js para react mirando https://www.youtube.com/watch?v=lVqHiTCIRQg



// funciones dentro de una funcion para crear componentes se utiliza en react

// function hello() {
//     return function (){
//         return 'hola mundo'
//     }
    
// }
// console.log(hello()());


// recibir parametros(uno o multiples)

// function hello(name) {
//     return 'Hola ' + name
// }
// console.log(hello('Kevo'));
// console.log(hello('Damian'));
// console.log(hello('Clara'));

// function sumar(x, y = 0){
//     return x + y
// }

// console.log(sumar(10, 20));
// console.log(sumar(1, undefined));


// OBJETOS
// key y value

// propiedades
// const user = {
//     name: 'kevo',
//     apellido: 'defal',
//     edad: 30,
//     direccion: {
//         pais: 'arg',
//         ciudad: 'caba',
//         calle: 'larrea 199'
//     },
//     amigos: ['juan', 'emilio'],
//     activo: true,
    // metodos
//     enviarMail() {
//         return 'sending email...'
//     }
// }

// console.log(user.amigos[0]);
// console.log(user.direccion.calle);
// console.log(user.enviarMail());


// objetos creados a partir de otros datos

// const name = 'laptop'
// const price = 2000

// const newProduct = {
//     name,
//     price
// }

// console.log(newProduct);


// manejo del DOM

// const title = document.createElement('h1')
// title.innerText = 'HOLA MUCHACHOS'

// const button = document.createElement('button')
// button.innerText = 'clickea bigote'

// button.addEventListener('click', function(){
//     title.innerText = 'AGUANTE BOCA'
//     alert('Este DOM es muy bostero')
//     const img = document.createElement('div')
//     img.innerHTML += `<img src=keduro.JPG alt="kevoduro"> `
//     document.body.append(img)
// })

// document.body.append(title)
// document.body.append(button)



// const user = {
//     name: 'Miguel',
//     age: 30
// }

// function printInfo(user){
//     return '<h1>Hola ' + user['name'] + '</h1>'
// }

// console.log(printInfo(user));
// document.body.innerHTML = printInfo(user)


// FUNCIONES COMUNES Y ANONIMAS

// function start(){
//     'starting..'
// }

// console.log(function start(){
//     return 'starting..'
// })


// ANONIMA

// const button = document.createElement('button')
// button.innerText = 'click me'

// button.addEventListener('click', function (){
//     alert('clicked')
// })

// document.body.append(button)



// ARROW FUNCTION

// const add = (x, y) => {
//     return x + y
// }

// console.log(add(10,20));

// const button = document.createElement('button')
// button.innerText = 'click me'
// // IGUAL A LA ANONIMA(CAMBIA EL Function)
// button.addEventListener('click', () => {
//     alert('clicked')
// })

// document.body.append(button)

// INLINE ARROW FUNCTION


// const showText = () => {
//     return 'hola mundo'
// }

// console.log(showText());

// SE PUEDE ESCRIBIR ASI TAMBIEN

const showText = () => 'hola mundo';
const showNumer = () => 24;
const showBoolean = () => false;
const showArray = () => [1,2,3];
const showObject = () => ({nombre: 'kevin'}) 
// reconoce solo el cuerpo del objeto, por eso arroja undefined, para solucionar esto, debo ponerlo entre parentesis y me lo va a devolver como objeto


console.log(showText());
console.log(showObject());


//-------------------------------------------------------//

const background = 'red';
const color = 'white';
const isAuthorized = false;
const result = `estos son estilos: ${background} ${color}`

console.log(result);

const button = document.createElement('button')
button.innerText = 'click me'
// STRING LITERALS o iterpolacion. nos permiten concatenar o unir sting, tambien interpretar valores dentro de estos string
// button.style = 'background: green; color: white'

//----------------------------------------------------
// OPERADOR TERNARIO ? ES EL IF : ES EL CASO CONTRARIO
//----------------------------------------------------

button.style = `background: ${isAuthorized ? 'blue' : 'red'}; color: ${color}`


button.addEventListener('click', () => {
    if (isAuthorized){
       return alert('esta autorizado')
    }
        alert('no esta autorizado')
    });
// return es una forma de cambiar el else, porque te finaliza la ejecucion del codigo
document.body.append(button)


// ARRAYS

const names = ['kevo', 'clara', 'damian']

// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.log(element);
//     // Esto nos lleva muchas lineas de codigo y en react no vamos a usar bluce for
// }

const newNames = names.map(function (name) {
    return `Hola ${name}`
})
console.log(names);
console.log(newNames);
// LA FUNCION MAP ME PRODUCE EL MISMO RESULTADO QUE EL FOR EACH, PERO NO SOLO LO RECORRE SINO QUE ME RETORNA UN NUEVO ARREGLO

// const nameFound = names.find(function (nombre){
//     if (nombre === 'kevo'){
//         return nombre
//     }
// })

// console.log(nameFound);
// FIND ES PARA BUSCAR UN ELEMENTO

const nameFound = names.filter(function (nombre){
    if(nombre !== 'kevo'){
        return nombre
    }
})

console.log(nameFound);
// EL FILTER NOS PERMITE CREAR UN NUEVO ARREGLO CON ELEMENTOS QUE HAYAMOS FILTRADOS, ES DECIR CON ELEMENTOS QUE CUMPLAN CON UNA CONDICION

const nuevosNombres = ['carlos', 'osbel', 'ale']

console.log(names.concat(nuevosNombres));



// SPREAD OPERATOR
// FUNCIONA CON ARREGLOS Y CON OBJETOS

const nombres = ['mar', 'sol', 'luna']
const nombres2 = ['ben', 'solo', 'luke']

console.log([...nombres, ...nombres2]);

const user2 = {
    name: 'kevo',
    apellido: 'cejas'
}

const direccion = {
    calle: 'te falta',
    ciudad: 'zaramay'
}

const userInfo = {
    ...user2,
    ...direccion
}
console.log(userInfo);






