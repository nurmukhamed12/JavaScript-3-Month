console.log("hello world");

try {
    console.log(error);
} catch (error) {
    console.error(error);
}finally{
    console.log("я работаю всегда"); 
}







// const getData = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((response) => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data.id);
//         });

//     await fetch('https://jsonplaceholder.typicode.com/users/2')
//         .then((response) => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data.id);
//         });
//     await fetch('https://jsonplaceholder.typicode.com/users/3')
//         .then((response) => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data.id);
//         });
// };



// setTimeout(() => {
//     console.log("hello world");
// }, 0);
// setTimeout(() => {
//     console.log("hello geeks");
// }, 0);

// console.log("bye");



// const divUsers = document.getElementById("users");

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//        return response.json()
//     }).then((data) => {
//         console.log(data);
//         data.forEach((item)=>{
//             divUsers.innerHTML += `<h1>${item.title}</h1>`
//             divUsers.innerHTML += `<h2>${item.body}</h2>`
//         });
//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log('Я работаю всегда');
//     })

// let array = [1, 2, 3, 4, 5,]

// array.forEach((item) => {

// })





// let num = 10;

// let prom =  new Promise((resolve, reject) => {
//     if (num > 5) {
//         resolve("все нормально");
//     }else{
//         reject("у тебя ошибка");
//     }
// });

// prom.then((response)=>{
//     console.log(response);
// });

// prom.catch((Error)=>{
//     console.log(Error);
// });