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
function date(){
window.addEventListener("load", (event) => {
    const now = new Date();
    const day = now.getDay()+1;
    const month = now.getMonth()+1;
    const year = now.getFullYear();

    return `Date: ${day}/${month}/${year}`;
  });
}

export default date();