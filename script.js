// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let googleInput = document.getElementsByName("q")[0];
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["Габой","Саксофон","Волторна","Фагот","Скрипка","Флейта","Как звучит флейта"];
let keyword = keywords[getRandom(0,keywords.length)];
let n = 0;

function getRandom(min,max){
return Math.floor(Math.random()*(max-min)+min);
}


if(btnK!=undefined){
    let timerId = setInterval(()=>{
        googleInput.value += keyword[n++];
        if(n==keyword.length){
            clearInterval(timerId);
            setTimeout(()=>document.getElementsByName("btnK")[0].click(), 2000);
        }
    },500);
}else{
    let links = document.links;
    let flag = true;
    let pageNum = document.querySelector(".YyVfkd").innerText;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            links[i].click();
            flag = false;
            break;
        }
    }
    if(pageNum == 10) location.href = "https://www.google.com/";
    if(flag) setTimeout(()=>pnnext.click(), 2000);
}
