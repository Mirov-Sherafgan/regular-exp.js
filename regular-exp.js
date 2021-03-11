/* 1. Дана строка "Bob going to school. Bob likes math". Замените все ключевые слова Bob на Alice. */
const sample = "Bob going to school. Bob likes math";
const match = sample.replace(/Bob/g, "Alice");
// console.log(match);


//2. Создайте шаблон регулярного выражения, который определяет является ли строка email - ом(проверьте все ключевые символы)

function isValidEmail(word) {
    var regex = new RegExp(/[a-z]+\@[a-z]+\.[a-z]/);
        var match = word.match(regex)
        if (match) {
            return  word + ' Correct';
        }
        return 'Is not an email';
    }
    console.log(isValidEmail('sherafgan@ilmhona.com'));
    
//3. Создайте шаблон регулярного выражения, который определяет надежность пароля. Длинна должна быть больше 6-ти символов Должны быть заглавные буквы, цифры и символы.

function isStrongPassword(password) {
    var regex = new RegExp(/[a-zA-Z0-9\@#$%^&*()_+]{6,}/) 
        var match = password.match(regex)
        var msg = ' Длина должна состовлять минимум 6 символов.'
        if (match) {
            return password + '  Strong password'
        }
        return 'Error. Isn\'t a strong password' + msg;
}
// console.log(isStrongPassword('Sh123@i@&-_{+['));


let string = 'Anush@';
let regx = new RegExp(/\S{5,}\W+/)
let match2 = regx.test(string)
console.log(match2);

// Напишите функцию с именем countNumbers, которая принимает строку чисел и возвращает количество числа от 0 до 9.

function countNumbers(word) {
    var regex = new RegExp(/[0-9]/, 'g');
    var matches = word.match(regex);
    if(matches) {
        return matches.length;
    }
    return 0
}
/* console.log(countNumbers('321321dsdasda930-29d132b13a'));
console.log(countNumbers('this is so 1234'));
console.log(countNumbers('this is so ')); */


//Напишите функцию называется capitalSentence, который принимает строку и возвращает другую строку со всеми заглавными буквами, соединенными вместе

function capitalSentence(word) {
    var regex = new RegExp(/[A-Z]/, 'g');
    var match = word.match(regex);
    if (match) {
        return match
    }
    return 0
}
// console.log(capitalSentence('The Cat In The Hat'));

//Напишите функцию с именем isValidPassword, которая принимает строку. Если строка длиннее 7 символов и содержит хотя бы один специальный символ (!, @, # Или $), функция должна вернуть true. В противном случае возвращаем false.

function isValidPassword(word) {
    var regex = new RegExp(/[a-z]{7,}[\!@#$]*/, 'g');
    var match = word.match(regex)
    if(match) {
        return true + ' ' + match;
    }
    return false;
}
// console.log(isValidPassword('winshee!!!@#'))



function test(text) {
    regex = new RegExp(text);
    let result = text.match(/[a-z]+@+[a-z]+\.+[a-z]{2,3}/gi);
    if (result) {
        return true + regex;
    }
    else {
        return false;
    }
}
// console.log(test('farikdehoti@@ail..rutt'));
