const brightnessEl = document.querySelector("#brightness");
const saturateEl = document.querySelector("#saturate");
const contrastEl = document.querySelector("#contrast");
const brightnessInputEl = document.querySelector("#brightness-input");
const saturateInputEl = document.querySelector("#saturate-input");
const contrastInputEl = document.querySelector("#contrast-input");

const brightnessBtn = document.getElementById("brightnessBtn");
const saturateBtn = document.getElementById("saturateBtn");
const contrastBtn = document.getElementById("contrastBtn");

const buttonsInputOneEl = document.getElementById("buttons-input-one");
const buttonsInputTwoEl = document.getElementById("buttons-input-two");
const buttonsInputThreeEl = document.getElementById("buttons-input-three");

const imgEl = document.getElementById("wild-west");


brightnessEl.addEventListener("click", () =>{

    brightnessInputEl.style.display = "block";
    brightnessBtn.style.display = "block";
    saturateInputEl.style.display = "none";
    contrastInputEl.style.display = "none";
    contrastBtn.style.display = "none";
    saturateBtn.style.display = "none";
    buttonsInputOneEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        imgEl.style.filter = 'brightness('+brightnessInputEl.value +'%'+')'
    });
});

saturateEl.addEventListener("click", () =>{
    saturateInputEl.style.display = "block";
    saturateBtn.style.display = "block";
    brightnessInputEl.style.display = "none";
    contrastInputEl.style.display = "none";
    brightnessBtn.style.display = "none";
    contrastBtn.style.display = "none";
    buttonsInputTwoEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        imgEl.style.filter = 'saturate('+saturateInputEl.value +')'
    });
});

contrastEl.addEventListener("click", () =>{
    contrastInputEl.style.display = "block";
    contrastBtn.style.display = "block";
    brightnessInputEl.style.display = "none";
    saturateInputEl.style.display = "none";
    brightnessBtn.style.display = "none";
    saturateBtn.style.display = "none";
    buttonsInputThreeEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        imgEl.style.filter = 'contrast('+contrastInputEl.value +'%'+')'
    });
})