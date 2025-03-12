const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


/*
const con = document.querySelector(".content")
con.addEventListener("click", ()=>{
    hambutton.classList.toggle('show');
    mainnav.classList.toggle('show');
})*/