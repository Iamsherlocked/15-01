const array = [
    {
        username: "Jack",
        full_name: "jack koin"
    },
    {
        username: "Jack",
        full_name: "jack koin"
    },
    {
        username: "Jack",
        full_name: "jack koin"
    },
    {
        username: "Jack",
        full_name: "jack koin"
    },
    {
        username: "Jack",
        full_name: "jack koin"
    },
    {
        username: "Rose",
        full_name: "jack koin"
    },
]

инкрементация

let i = 0; i++
i = i + 1

for(let i = 0; i < array.length; i++){
    if(i === 2){
        break;
    } else {
        console.log(array[i])
    }
}

const user = [
    {
        username: 'Jack',
        salary: 500
    },
{
        username: 'John',
        salary: 5000
    },
{
        username: 'Aybek',
        salary: 10000
    }

]

const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers)

const  filteredUsers = []
for(let user of users){
    if(user.salary > 500){
        filteredUsers.push(user)
    }
}
console.log(filteredUsers)


const obj = {
    key1: 'v1',
    key2: 'v2',
    key3: 'v3',
    key4: 'v4',
    key5: 'v5',
    key6: 'v6',
}

for(let key in obj){
    console.log(obj[key])
}


const  users = [
    {
        username: "Robot1",
        damage: 200
    },
    {
        username: "Robot2",
        damage: 300
    },
    {
        username: "Robot3",
        damage: 400
    },
    {
        username: "Robot4",
        damage: 500
    },
    {
        username: "Robot5",
        damage: 600
    }
]

const filteredUsers = users.filter(user => user.damage > 400)
console.log(filteredUsers)


const users = [
    {
        username: 'Kesh',
        salary: 2800
    },
    {
        username: 'Dast',
        salary: 3000
    },
    {
        username: 'Aybo',
        salary: 200
    },
]

const filter = users.filter(user => user.salary > 2700);{
    console.log(filter)
}
//
// const sale = []
//
// for(let user of users){
//     if(user.salary > 2900 ){
//         sale.push(user)
//     }
// }
// console.log(sale)

const destructUsers = []

for(let user of users){
    destructUsers.push({
        name: user.username,
        salary: user.salary
    })
}

console.log(destructUsers)

const maps = users.map (user => ({
    name: user.username,
    salary: user.salary
}))
console.log(maps)







