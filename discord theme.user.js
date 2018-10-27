// ==UserScript==
// @name         discord theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creates and sets a custom theme for discord
// @author       SeeGreatness
// @match        https://*.discordapp.com/*
// @match        https://discordapp.com/*
// @match        https://discordapp.com/channels/*
// @grant        none
// @updateURL    https://github.com/SeeGreatness/DiscordDarkTheme/raw/master/discord%20theme.user.js
// @downloadURL  https://github.com/SeeGreatness/DiscordDarkTheme
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //config code goes here
    var configstr='{"username":"GΛLΛXY CΛT"}';
    //var configstr='{"username":"GΛLΛXY CΛT","fakeName":"Emma","discriminator":"#0000"}'
    var config= JSON.parse(configstr);
    //define our functions here

function displayUser(myusername,tousername,discriminator,color,icon) {
    var x = document.getElementsByClassName("username-_4ZSMR");//get all user elements in a list
  //var length=x.length;
    var i=0;//set loop counter
    for (i = 0; i < x.length; i++) {//loop the length of the list
if(x[i].innerHTML==myusername){//check to see if it matches the input username
x[i].innerHTML = tousername;//if it does then set the username to the defined username
}//end if statement //if nothing was found to match do nothing and increment the loop counter by one and increse the list index by one
}//end for loop

    //also check this class in case any are different!
var y=document.getElementsByClassName("username-1cB_5E");//get all user elements in a list
    //no need to set the counter as it has alredy been defined
    i=0;//just have to reset it
    for (i = 0; i < y.length; i++) {//loop the length of the list
if(y[i].innerHTML==myusername){//check to see if it matches the input username
y[i].innerHTML = tousername;//if it does then set the username to the defined username
}//end if statement //if nothing was found to match do nothing and increment the loop counter by one and increse the list index by one
}//end for loop
document.getElementsByClassName("discriminator")[0].innerText=discriminator;//set the discriminator

}//end displayUser function
    //start the user menu that is visible from the home screen
    function userMenu(){
     var activityclass="name-2WpE7M";
    }
    function home(){
if(document.getElementsByName("Discord")[0].attributes[0].value=="Discord"){
document.getElementsByName("Discord")[0].outerHTML='<span name="Discord" id="orb" class="homeIcon-1FoKUJ" width="16" height="16"><div><br></div> <style> #orb{ background: #222; overflow: hidden; width: 10px; height: 10px;}.view { position: fixed; top: 0; left: 0; right: 1; bottom: 1; -webkit-perspective: 400; perspective: 400;}.plane { width: 120px; height: 120px; -webkit-transform-style: preserve-3d; transform-style: preserve-3d;}.plane.main { position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-transform: rotateX(60deg) rotateZ(-30deg); transform: rotateX(60deg) rotateZ(-30deg); -webkit-animation: rotate 20s infinite linear; animation: rotate 20s infinite linear;}.plane.main .circle { width: 120px; height: 120px; position: absolute; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; border-radius: 100%; box-sizing: border-box; box-shadow: 0 0 60px crimson, inset 0 0 60px crimson;}.plane.main .circle::before, .plane.main .circle::after { content: ""; display: block; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; width: 10%; height: 10%; border-radius: 100%; background: crimson; box-sizing: border-box; box-shadow: 0 0 60px 2px crimson;}.plane.main .circle::before { -webkit-transform: translateZ(-90px); transform: translateZ(-90px);}.plane.main .circle::after { -webkit-transform: translateZ(90px); transform: translateZ(90px);}.plane.main .circle:nth-child(1) { -webkit-transform: rotateZ(72deg) rotateX(63.435deg); transform: rotateZ(72deg) rotateX(63.435deg);}.plane.main .circle:nth-child(2) { -webkit-transform: rotateZ(144deg) rotateX(63.435deg); transform: rotateZ(144deg) rotateX(63.435deg);}.plane.main .circle:nth-child(3) { -webkit-transform: rotateZ(216deg) rotateX(63.435deg); transform: rotateZ(216deg) rotateX(63.435deg);}.plane.main .circle:nth-child(4) { -webkit-transform: rotateZ(288deg) rotateX(63.435deg); transform: rotateZ(288deg) rotateX(63.435deg);}.plane.main .circle:nth-child(5) { -webkit-transform: rotateZ(360deg) rotateX(63.435deg); transform: rotateZ(360deg) rotateX(63.435deg);}@-webkit-keyframes rotate { 0% { -webkit-transform: rotateX(0) rotateY(0) rotateZ(0); transform: rotateX(0) rotateY(0) rotateZ(0); } 100% { -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }}@keyframes rotate { 0% { -webkit-transform: rotateX(0) rotateY(0) rotateZ(0); transform: rotateX(0) rotateY(0) rotateZ(0); } 100% { -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }} </style> <div class="view"> <div class="plane main"> <div class="circle"></div> <div class="circle"></div> <div class="circle"></div> <div class="circle"></div> <div class="circle"></div> <div class="circle"></div> </div></div></span>'
}
    }
    //define our temp function
    function temp(){
     home();
    displayUser("GΛLΛXY CΛT","Emma","#0000")

    }
    //define the start function
    function start(username,discriminator,color,icon){
        displayUser(username,discriminator,color,icon)



    }


//run our functions
//start(config.username,);
temp();


})();
