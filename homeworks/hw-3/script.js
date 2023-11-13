const usersWrapper = document.getElementById("usersList");
const modal = document.getElementById("modal");
const preloader = document.getElementById("preloader");

let activeButtonId = null;

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
        data.forEach(item => {
            usersWrapper.innerHTML += `<li><button class="btn${item.id}" id="btn${item.id}" onclick="getUserData(${item.id})">${item.name}</button></li>`
        });
    });

const getUserData = (id) => {
    preloader.style.display = 'block';

    if (activeButtonId) {
        const prevActiveButton = document.getElementById(`btn${activeButtonId}`);
        prevActiveButton.style.backgroundColor = '';
    }

    setTimeout(() => {
        preloader.style.display = 'none';
        const activeButton = document.getElementById(`btn${id}`);
        activeButton.style.backgroundColor = 'tomato';
        activeButtonId = id;
    }, 300);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            modal.innerHTML = `<div class="modal-row">
        <div class="modal-col">
            <h2>${data.name}</h2>
            <h2>${data.username}</h2>
            <p><b>${data.address.street},</b> ${data.address.city}</p>
        </div>
        <div class="modal-col">
            <h2>${data.company.name}</h2>
            <p>email:<a href="mailto:${data.email}">${data.email}</a></P>
            <p>number:<a href="tel:${data.phone}">${data.phone}</a></p>
            <button class="closeBtn" onclick="closeModal()">close</button>
        </div>
    </div>`;
        })
}

const closeModal = () => {
    modal.innerHTML = "";
    // const buttons = document.querySelectorAll('.btn');
    // buttons.forEach(button => {
    //     button.style.backgroundColor = '';
    // });
}
