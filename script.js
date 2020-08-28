var email2=document.getElementById("email2");
var name2=document.getElementById("name2");
var email1=document.getElementById("Email1");
var name1=document.getElementById("Name1");


const form=document.getElementById("myform");
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(email1.value);
    console.log(name1.value);
    name2.textContent=name1.value;
    email2.textContent=email1.value;


})