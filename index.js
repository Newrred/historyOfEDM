

/*----------- scroll animation / loadBar ------------*/

let main = document.querySelector('#mainBox');

let c1960 = document.querySelector('#c1960');
let c1970 = document.querySelector('#c1970');
let c1980 = document.querySelector('#c1980');
let c1990 = document.querySelector('#c1990');
let c2010 = document.querySelector('#c2010');
let c2020 = document.querySelector('#c2020');

let widthA = c1960.getBoundingClientRect().width;
let widthB = c1970.getBoundingClientRect().width;
let widthC = c1980.getBoundingClientRect().width;
let widthD = c1990.getBoundingClientRect().width;
let widthE = c2010.getBoundingClientRect().width;
let widthF = c2020.getBoundingClientRect().width;

let container = document.querySelector('#cContainer');


let loadBar = document.querySelector('#loadBar01');
let barWidth = loadBar.getBoundingClientRect().width;



let totalScrollMt;

let elemBody = document.body;
let nowScrollVal;

window.addEventListener('scroll', scrollHandler);


function reCalcWidth(e)
{
    loadBar.style.width = (window.scrollY/250) + 'vmin';
    console.log(barWidth);
}


function scrollHandler(e)
{ 
   //console.log(window.scrollY);
    container.style.left = -window.scrollY + 'px';
    loadBar.style.width = (window.scrollY/247) + 'vmin';
}

function resizeHandler()
{
    totalScrollMt += window.innerHeight;
    elemBody.style.height = totalScrollMt + 'px';
}

function  init() {
    totalScrollMt = widthA + widthB + widthC + widthD + widthE;
    console.log(totalScrollMt);
    resizeHandler();
}

init();

reCalcWidth();

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    var percentage = scrollTop / scrollHeight;
    var startYear = 1960;
    var endYear = 2023;
    var yearRange = endYear - startYear;

    var currentYear = Math.round(startYear + (yearRange * percentage));
    document.querySelector('#year01').innerText = currentYear;
});

let posX = 0;
let posY = 0;

const ccursor = document.querySelector('.cursor')

    function mouseFunc(event) {
        console.log(event.clientX, event.clientY)
        posX = (event.clientX -25) + "px"
        posY = (event.clientY -25) + "px"

        ccursor.style.left = posX
        ccursor.style.top = posY

    }

    document.addEventListener("mousemove", mouseFunc)
    document.addEventListener("scroll", mouseFunc, false)
