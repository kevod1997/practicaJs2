import addModule from "./add.js";

// console.log(add(10,20));
// console.log(multiply(5,5));
// console.log(title, active, points);

console.log(addModule);

const person = {
    nombre: 'kev',
    direccion: 'casa',
    calle: {
        
    }
}

// OPTIONAL CHAINING, es el ? ACCEDE A ESE SOLO SI EXISTE
console.log(person.calle?.numero);

const ul = document.createElement('ul')


fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response){
    return response.json() 
}).then(function (data){
    data.forEach(function (post){
        const li = document.createElement('li')
        li.innerText = post.title
        ul.append(li)
    })
    document.body.append(ul)
})

// async function loadData() {
    // const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await resp.json()
// console.log(data[0]);
// console.log(data);
// data.forEach(function (post){
//     const li = document.createElement('li')
//     li.innerText = post.title
//     ul.append(li)
// })
// document.body.append(ul)
// }
// }
