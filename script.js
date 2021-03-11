"use strict"

function getMonth() {
let monthNumber;
let monthDate;
let num=1;
let content = document.getElementById("list")
let monthName;

monthNumber = prompt("Введите число месяца, которое вам нужно", '"');

while(num<=monthNumber){
monthDate = new Date("2020 0"+num+" 18");

monthName = monthDate.toLocaleString("deafult", {month:'long'})
content.innerHTML+="<li>"+monthName+"</li>";
num=num+1;
}

}