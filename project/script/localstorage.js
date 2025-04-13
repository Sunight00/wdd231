const sub = document.querySelector('#subtac');
sub.addEventListener('click',()=>{
    const input = document.querySelector('#input').value;
   const n= [1,2,3,];
    n.push(input);
    localStorage.setItem('list', n);
})

const su = document.querySelector('#subta');
su.addEventListener('click',()=>{
    const inpt = document.querySelector('#inpt').value;
   
    localStorage.setItem('lis', inpt);
})