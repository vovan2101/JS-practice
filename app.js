// Переменные

const lastName = 'Eliseykin';
// let age = 26;
const isProgrammer = true;

console.log(isProgrammer);

console.log('Имя человека: ' + lastName + ', а возраст человека: ')

const firstName = prompt('Введите фамилию: ')


// Операторы

const currentYear = 2020
const birthYear = 1993

const age = currentYear - birthYear

console.log(age)

const a = 10
const b = 2

console.log()

// 

console.log(typeof isProgrammer)


function getAge() {
    return age
}

function logPerson(s, name, age){
    return 'Info about person'
}
const personName = 'Vova'
const personAge = 22

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`


function greet(name){
    console.log('привет -', name)
}

greet('Lena')

const greet2 = function greet2(name){

}

let counter = 0
const interval = setInterval(function(){
    if (counter === 5){
        clearInterval(interval)
    }else{
        console.log(++counter)
    }
}, 1000)


