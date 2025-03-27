const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams); // a
const Fname=searchParams.get("Fname");
const Lname=searchParams.get("Lname");
const OTitle=searchParams.get("OTitle");
const Email=searchParams.get("Email");
const Tel=searchParams.get("Tel");
const Oname=searchParams.get("Oname");
const Description=searchParams.get("Description");