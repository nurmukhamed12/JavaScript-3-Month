const wrapper = document.getElementById('wrapper');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const text = document.getElementById('text');

text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display === 'none') {
        text.style.display = 'block';
        wrapper.style.left = '50%'; 
        wrapper.style.top = '50%';
        btn2.disabled = true;
    }
};

btn2.onclick = () => {
    if (text.style.display === 'none') {
        wrapper.style.left = Math.floor(Math.random() * (75 - 25) + 25) + '%';
        wrapper.style.top = Math.floor(Math.random() * (80 - 20) + 20) + '%';
    }
};