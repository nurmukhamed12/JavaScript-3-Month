
const input = document.getElementById("input");
const button = document.getElementById("button");
const userData = document.getElementById("userData");


button.addEventListener("click", fetchData);

function fetchData() {
    const userID = input.value;
    if (userID <= 10) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json()
            }).then(data => {                                                                                           н
                const name = data;
                const username = data;
                const phone = data;
                userData.innerHTML = `<p>Name: ${name}</p><p>Username: ${username}</p><p>Phone: ${phone}</p>`;
            }).catch((Error)=>{
                userData.innerHTML = "Ошибка при получении данных.";
                console.error("Error:", error);
            })
    }else{
        userData.innerHTML = "Пожалуйста, введите число от 1 до 10.";
    }
}

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        fetchData();
    }
});