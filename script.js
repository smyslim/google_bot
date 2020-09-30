// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let googleInput = document.getElementsByName("q")[0]; //поле поиска
let btnK = document.getElementsByName("btnK")[0]; //кнопка поиск
let keywords = ["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"];
let keyword = keywords[getRandom(0,keywords.length)]; //рандомно выбираем ключевые слова
let i = 0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

if(btnK!=undefined){ //проверка, на главной ли мы странице (есть ли кнопка поиск)
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i++]; //печатаем в поле инпута ключевое слово по одной букве с интервалом
        if(i == keyword.length){
            clearInterval(timerId);
            document.getElementsByName("btnK")[0].click(); //кликаем по кнопке поиск
        }
    },1000);
}
else{ //если не на главной странице поиска
    let links = document.links; //все ссылки на странице
    let flag = true;
    let numPage = document.querySelector(".YyVfkd").innerText; //номер текущей страницы
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){ //если у ссылки нужный адрес, то кликнуть по ней, выключить флаг и остановить цикл
            setTimeout(()=>links[i].click(),2000);
            flag = false;
            break;
        }
    }
    if(numPage == "10") location.href = "https://www.google.com/"; //если пришел на 10 страницу, то возвращайся на стартовую страницу гугла
    if(flag) setTimeout(()=>pnnext.click(),2000); //кликать кнопку next page, пока флаг true
}




