const root = document.getElementById('root');
const title = document.getElementById('title');
const body = document.getElementById('body');
const userId = document.getElementById('user-id');
const button = document.getElementById('btn');
const check = document.getElementById('check')

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
    if (title.value  === '') {
        alert('Заполните все поля перед отправкой')
        return;
    }else if (body.value === '') {
        alert('Заполните все поля перед отправкой')
        return;
    }
    fetch("https://jsonplaceholder.typicode.com/posts",{
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
    }).then(response => {
        if (response.ok) {
            check.innerText = 'Успешно отравлено';
            check.style.color = 'green';
            check.style.display = 'block';
        } else {
            throw new Error('Ошибка при отправке данных');
        }
    })
}