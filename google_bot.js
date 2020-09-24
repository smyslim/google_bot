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
let keyword = "Гобой";
let n = 0;

if(btnK!=undefined){
    let timerId = setInterval(()=>{
        googleInput.value += keyword[n++];
        if(n==keyword.length){
            clearInterval(timerId);
            document.getElementsByName("btnK")[0].click();
        }
    },1000);
}else{
    let links = document.links;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            links[i].click();
            break;
        }
    }
}
