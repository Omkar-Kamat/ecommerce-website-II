

var searchGlass = document.getElementById("search-glass");
var searchTab = document.getElementById("searchbar-tab");
var searchBarInput = document.getElementById("search-bar");
var menuTab = document.getElementById("menubar-tab");
var bars = document.getElementById("bars");


let searchOpen = false;
let menuOpen = false;

// search bar ka code 
searchGlass.addEventListener("click",function(){
    
    
    if (searchOpen){
        searchTab.style.left = "42vw"; 
        searchBarInput.focus();
    } else {
        searchTab.style.left = "100vw" ; 
    }
    searchOpen = !searchOpen;
})

//menu bar ka code
bars.addEventListener("click",function(){
    if (menuOpen){
        menuTab.style.left = "-35vw"; 
    } else {
        menuTab.style.left = "7vw" ; 
    }
    menuOpen = !menuOpen;
})

let searchClose = document.getElementById("search-close");
let menuClose = document.getElementById("menu-close");
searchClose.addEventListener("click",function(){
    searchTab.style.left = "100vw" ;  
    searchOpen = !searchOpen;
})
menuClose.addEventListener("click",function(){
    menuTab.style.left = "-35vw" ;  
    menuOpen = !menuOpen;
})
;



var slideOne = document.getElementById("ad1");
var slideTwo = document.getElementById("ad2");
var slideThree = document.getElementById("ad3");
var left = document.getElementById("left-slide");
var right = document.getElementById("right-slide");

let slideNumber = 1;

right.addEventListener(
    "click",function(){
        if(slideNumber===1){
            slideOne.style.marginLeft = "-50vw";
            slideOne.style.zIndex = "1";
            slideOne.style.opacity = "0.2";
            slideOne.style.height = "40vw";
            slideOne.style.marginTop = "2.5vw";
            slideTwo.style.marginLeft = "60vw";
            slideThree.style.marginLeft = "6.5vw";
            slideThree.style.zIndex = "2";
            slideThree.style.opacity = "1";
            slideThree.style.height = "45vw";
            slideThree.style.marginTop = "0";
            slideNumber=2;
        }
        else if(slideNumber===2){
            slideThree.style.marginLeft = "-50vw";
            slideThree.style.zIndex = "1";
            slideThree.style.opacity = "0.2";
            slideThree.style.height = "40vw";
            slideThree.style.marginTop = "2.5vw";
            slideOne.style.marginLeft = "60vw";
            slideTwo.style.marginLeft = "6.5vw";
            slideTwo.style.zIndex = "2";
            slideTwo.style.opacity = "1";
            slideTwo.style.height = "45vw";
            slideTwo.style.marginTop = "0";
            slideNumber=3;
        }else{
            slideTwo.style.marginLeft = "-50vw";
            slideTwo.style.zIndex = "1";
            slideTwo.style.opacity = "0.2";
            slideTwo.style.height = "40vw";
            slideTwo.style.marginTop = "2.5vw";
            slideThree.style.marginLeft = "60vw";
            slideOne.style.marginLeft = "6.5vw";
            slideOne.style.zIndex = "2";
            slideOne.style.opacity = "1";
            slideOne.style.height = "45vw";
            slideOne.style.marginTop = "0";
            slideNumber=1;
    
        }
    }
)


function slider(){
    if(slideNumber===1){
        slideOne.style.marginLeft = "-50vw";
        slideOne.style.zIndex = "1";
        slideOne.style.opacity = "0.2";
        slideOne.style.height = "40vw";
        slideOne.style.marginTop = "2.5vw";
        slideTwo.style.marginLeft = "60vw";
        slideThree.style.marginLeft = "6.5vw";
        slideThree.style.zIndex = "2";
        slideThree.style.opacity = "1";
        slideThree.style.height = "45vw";
        slideThree.style.marginTop = "0";
        slideNumber=2;
    }
    else if(slideNumber===2){
        slideThree.style.marginLeft = "-50vw";
        slideThree.style.zIndex = "1";
        slideThree.style.opacity = "0.2";
        slideThree.style.height = "40vw";
        slideThree.style.marginTop = "2.5vw";
        slideOne.style.marginLeft = "60vw";
        slideTwo.style.marginLeft = "6.5vw";
        slideTwo.style.zIndex = "2";
        slideTwo.style.opacity = "1";
        slideTwo.style.height = "45vw";
        slideTwo.style.marginTop = "0";
        slideNumber=3;
    }else{
        slideTwo.style.marginLeft = "-50vw";
        slideTwo.style.zIndex = "1";
        slideTwo.style.opacity = "0.2";
        slideTwo.style.height = "40vw";
        slideTwo.style.marginTop = "2.5vw";
        slideThree.style.marginLeft = "60vw";
        slideOne.style.marginLeft = "6.5vw";
        slideOne.style.zIndex = "2";
        slideOne.style.opacity = "1";
        slideOne.style.height = "45vw";
        slideOne.style.marginTop = "0";
        slideNumber=1;

    }
}



setInterval(slider,6000);




let homebtn = document.getElementById("home");
let loginPage = document.getElementById("login-page");
let content = document.getElementById("content");
let signup = document.getElementById("signup-page");

function homePage(){
    loginPage.style.top = "-100vh";
    content.style.overflowY = "unset";
    signup.style.top = "-100vh";
}
homePage();

let login = document.getElementById("login");
login.addEventListener("click",function(){
    loginPage.style.top = "0";
    content.style.overflowY = "hidden";
    menuTab.style.left = "-35vw" ;  
    menuOpen = !menuOpen;
    
})
function sign2login(){
loginPage.style.top = "0";
content.style.overflowY = "hidden";
menuTab.style.left = "-35vw" ;  
menuOpen = !menuOpen;
signup.style.top="-100vh";

}

let loginClose = document.getElementById("login-close");
loginClose.addEventListener("click",
function(){
    
    loginPage.style.top = "-100vh";
    content.style.overflowY = "unset";
})

function signupForm(){
    loginPage.style.top = "-100vh";
    content.style.overflowY = "hidden";
    signup.style.top = "0";
}

let signClose = document.getElementById("signup-close");
signClose.addEventListener(
    "click",function(){
        signup.style.top = "-100vh";
        content.style.overflowY = "unset";

    }
)


let aboutus = document.getElementById("aboutus");
let aboutPage =  document.getElementById("about-us");
let aboutClose  = document.getElementById("about-close");
aboutus.addEventListener(
    "click",function(){
        aboutPage.style.top = "0";
        menuTab.style.left = "-35vw" ;  
        menuOpen = !menuOpen;
    }
)
aboutClose.addEventListener(
    "click",function(){
        aboutPage.style.top = "-100vh";
    }
)