let formBtns = document.getElementById('form-btns');
let optionList = document.querySelectorAll('.service');
let formSelect = document.getElementById('form-select');

formSelect.value = '';


document.getElementById('btn1').onclick = () =>{
    if (formSelect.value == ''){
        document.getElementById('message').textContent = 'Выберите категорию';
    } else {
        document.getElementById('message').textContent = '';
    }
}

optionList.forEach(item =>{
    let btn = document.createElement('button');
    btn.textContent = item.textContent;
    btn.className = "form-btn";
    btn.onclick = () => {
        formSelect.value = item.value
        document.querySelectorAll('.form-btn').forEach(item =>{
            item.style.borderColor = '#9faffc'
        })
        btn.style.borderColor = 'red'
    }
    formBtns.appendChild(btn);
});