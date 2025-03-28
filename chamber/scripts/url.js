const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams); // a
const Fname=searchParams.get("Fname");
const Lname=searchParams.get("Lname");
const OTitle=searchParams.get("OTitle");
const Email=searchParams.get("Email");
const Tel=searchParams.get("Tel");
const Bname=searchParams.get("Oname");
const Membership=searchParams.get("mLevel");
const Description=searchParams.get("Description");


const member = document.querySelector("#mem");
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#num");
const bname = document.querySelector("#bname");
const date = document.querySelector("#date");

window.addEventListener("load", (event) => {
    const now = new Date();
    const day = now.getDay()+1;
    const month = now.getMonth()+1;
    const year = now.getFullYear();

    return date.innerHTML=`Date: ${day}/${month}/${year}`;
  });
member.innerHTML=Membership;
names.innerHTML=`Name: ${Fname} ${Lname}`;
email.innerHTML=`Email: ${Email}`;
number.innerHTML=`Telephone: ${Tel}`;
bname.innerHTML=`Business Name: ${Bname}`;
