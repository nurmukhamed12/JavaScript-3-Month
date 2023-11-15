const MainHw = () => {
    document.getElementById('change-btn').onclick = () => {
        let inp1 = document.getElementById('input1').value;
        let inp2 = document.getElementById('input2').value;

        document.getElementById('input1').value = inp2;
        document.getElementById('input2').value = inp1;

    }
};
MainHw();

let inp3 = document.getElementById("input3");

inp3.onchange = () => {
    document.getElementById("square").style.backgroundColor = inp3.value
};

