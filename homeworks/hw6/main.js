let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];
const findId2 = users.find((user) => { return user.id == 2 })
console.log(findId2);

const getMoreThan1 = () => {
    return users.filter(item => item.id > 1)
}
console.log(getMoreThan1(users));