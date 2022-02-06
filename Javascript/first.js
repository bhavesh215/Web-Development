let btn=document.querySelector('button');
btn.addEventListener('click',inputMsg);

function inputMsg(){
    let rollno=prompt("Enter your roll number");
    let name=prompt("Enter your name");
    btn.textContent= "Roll No. "+rollno+" "+name;
}