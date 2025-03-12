const year = document.querySelector("#year");

const today = new Date();


year.innerHTML = today.getFullYear();




const mod = document.querySelector("#lastmod");
let oLastModif = new Date(document.lastModified);
mod.innerHTML=oLastModif;
