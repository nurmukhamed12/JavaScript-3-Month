// Task1
// На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

// input: [1, 2, 3]
// output: [2, 4, 6]
// input: [4, 1, 1, 1, 4]
// output: [8, 2, 2, 2, 8]
// input: [2, 2, 2, 2, 2, 2]
// output: [4, 4, 4, 4, 4, 4]

const Task1 = (arr)=>{
    return arr.map((item)=>{
        return item * 2
    })
}

// Напишите функцию, которая будет удалять каждый второй элемент в массиве. Цикл for использовать запрещено!

// input: ['Привет', 'Пока', 'Снова привет']
// output: ['Привет', 'Снова привет']
// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output: [1, 3, 5, 7, 9]
// input: ['Пока', {'Цвет': 'Синий'}]
// output: ['Пока']


function Task2(array){
    return array.filter((item, idx)=>{
        return idx%2 == 0
    })
}

// Task3
// Возьмите массив с числами, а верните массив, в котором отрицательные числа, становятся положительными, а положительные - отрицательными.

// input: [1, 2, 3, 4, 5]
// output: [-1, -2, -3, -4, -5]
// input: [1, -2, 3, -4, 5]
// output: [-1 ,2, -3, 4, -5]
// input: []
// output: []
// input: [0]
// output: [0]

function Task3(array){
    return array.map((item)=>{
        return item*-1
    })
}

// Task4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый массив с тем кол-вом элементов с начала массива, которое было указано в числе.

// input: [0, 1, 2, 3, 5, 8, 13], 3
// output:  [0, 1, 2], 'Вернула первые три значения'
// input: [0, 1, 2, 3, 5, 8, 13], 5
// output:  [0, 1, 2, 3 , 5]

function Task4(arr, num){
    return arr.slice(0 , num)
}

// Task5
// Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве.

// input: [22, -6, 32, 82, 9, 25]
// output: [-6, 32, 25]
// input: [68, -1, 1, -7, 10, 10]
// output: [-1, 10]
// input: [11, -11]
// output [[22, -6, 32, 82, 9, 25]-11]

function Task5(arr){
    return arr.filter((item, idx)=>{
        return item%idx ==0
    })
}



// Task6
// Напишите функцию, которая принимает на вход массив,
//  и возвращает новый, в котором все элементы типа string заменены на null.

// input: [4, 6, 'Ivan', 5, 'Denis '] 
// output: [4, 6, null, 5 , null]

function Task6(arr){
    return arr.map((item)=>{
        if (typeof item == 'string') {
            return null
        }else return item
    })
}


// Task7
// Напишите функцию, которая принимает на вход массив с именами ,
// и возвращает новый, в котором содержатся имена не длиннее 5 символов. 

// input: ['Евдоким','Ivan', 'Игнат', 'Denis '] 
// output: ['Ivan', 'Игнат', 'Denis '] 

function Task7(arr) {
    return arr.filter((item) => {
        return item.trim.length <= 5
    })
}

// Task8
// Напишите функцию, которая принимает на вход массив чисел, 
// и возвращает новый, в котором все элементы возведены в куб, и те числа, 
// которые кратны и трем и пяти одновременно, заменить их на 0. 

// input: [7, 8, 15, 30, 2] 
// output: [ 343, 512, 0, 0, 8 ]

function Task8(arr) {
    return arr.map((item) => {
        if (item % 5 == 0,item % 3 == 0) {
            return 0
        } else return item** 3
    })
}

// Task9
// Напишите функцию, которая принимает на вход массив слов , 
// и возвращает массив чисел, являющихся длинной слов. 

// input: ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] 
// output: [6, 6, 5, 5, 6] 

function Task9(arr) {
    return arr.map((item)=>{
        return item.length
    })
}


// Task10
// Напишите функцию, которая принимает массив чисел 
// и возвращает массив строк по шаблону <div>{number}</div> 

// input: [1, 2, 3, 4, 5 ] 
// output: [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div> ]

function Task10(array) {
    return array.map((item)=>{
        return `<div>${item}</div>`
    })
}

// Task11
// Напишите функцию, которая принимает массив строк 
// и возвращает массив строк с четным количеством букв 

// Input: ['ab', 'abc', 'abcd'] 
// Output: ['ab', 'abcd']

function Task11(array) {
    return array.filter((item)=>{
        return item.length%2==0
    })
}