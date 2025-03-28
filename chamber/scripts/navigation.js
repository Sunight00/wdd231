/*const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



const con = document.querySelector(".content")
con.addEventListener("click", ()=>{
    hambutton.classList.toggle('show');
    mainnav.classList.toggle('show');
})*/
const shownp = document.querySelector("#shownp");
const closenp = document.querySelector("#closenp");
const np= document.querySelector("#np");
shownp.addEventListener("click",()=>{
    np.showModal()
})

closenp.addEventListener("click",()=>{
    np.close()
});

const showbr = document.querySelector("#showbr");
const closebr = document.querySelector("#closebr");
const br= document.querySelector("#br");
showbr.addEventListener("click",()=>{
    br.showModal()
})

closebr.addEventListener("click",()=>{
    br.close()
})

const showsi = document.querySelector("#showsi");
const closesi = document.querySelector("#closesi");
const si= document.querySelector("#si");
showsi.addEventListener("click",()=>{
    si.showModal()
})

closesi.addEventListener("click",()=>{
    si.close()
})

const showgo = document.querySelector("#showgo");
const closego = document.querySelector("#closego");
const go= document.querySelector("#go");
showgo.addEventListener("click",()=>{
    go.showModal()
})

closego.addEventListener("click",()=>{
    go.close()
})

