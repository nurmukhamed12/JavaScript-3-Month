const urlInput = document.getElementById("url");
const emailInput = document.getElementById("email");

urlInput.addEventListener('input', function () {
    const url = urlInput.value;
    const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/;

    if (urlRegex.test(url)) {
        urlInput.style.backgroundColor = 'green';
    } else {
        urlInput.style.backgroundColor = 'red';
    }
});

emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[com]{2,4}$/;

    if (emailRegex.test(email)) {
        emailInput.style.backgroundColor = 'green';

    } else {
        emailInput.style.backgroundColor = 'red';
    }
});