const wrapper = document.getElementById('wrapper')
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const text = document.getElementById('text');

text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display == 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}

btn2.onclick = () => {
    wrapper.style.left = Math.floor(Math.random() * (90 - 10)+10)+'%';
    wrapper.style.top = Math.floor(Math.random() * (80 - 20)+20)+'%';

}