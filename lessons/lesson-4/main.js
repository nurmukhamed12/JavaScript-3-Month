const root = document.getElementById('root');
const title = document.getElementById('title');
const body = document.getElementById('body');
const userId = document.getElementById('user-id');
const button = document.getElementById('btn');

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.forEach((item) => {
            root.innerHTML += `<div class="post">
        <h1>${item.title}</h1>
        <p>${item.body}</p>
        </div>`
        })
    });

button.onclick = () => {
    
    fetch("https://jsonplaceholder.typicode.com/posts/1/",{
        method:'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            id: 1,
            title: title.value,
            body: body.value,
            userId: userId.value,
        }),
    }).then(response => console.log(response))
    .catch(error => console.error(error))

}