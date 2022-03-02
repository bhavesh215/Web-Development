let addBtn=document.getElementById('add_btn');
addBtn.addEventListener('click',addChapter);
let ulTag=document.querySelector('ul.list-group');
console.log(ulTag);
    
function addChapter(e){
    if(ulTag.children[0].className==="emptyMsg"){
        ulTag.children[0].remove();
    }
    let currentBtn=e.currentTarget;
    let currentInput=currentBtn.previousElementSibling;
  
    let listItem=document.createElement('li');
    listItem.className="list-group-item d-flex justify-content-between"; 
    listItem.innerHTML=`<h3 class="flex-grow-1">${currentInput.value}</h3>
                <button class="bn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
                <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
    ulTag.appendChild(listItem);
}


function removeChapter(e){
    e.parentElement.remove();
    let ulTag=document.querySelector('ul.list-group');
    if(ulTag.children.length===0){
        let emptyMsgTag=document.createElement('h3');
        emptyMsgTag.classList.add("emptyMsg");
        emptyMsgTag.textContent="Nothing is here Please Add a Chapter";
        ulTag.appendChild(emptyMsgTag);
    }
}


function editChapter(e){
    if(e.textContent !== 'Done'){
        console.log("I am editing this item");
        e.textContent="Done";
        let previouselement=e.previousElementSibling.textContent;
        let repinput=document.createElement('input');
        repinput.type='text';
        repinput.className="form-control";
        repinput.placeholder="Chapter Name";
        repinput.value=previouselement;

        e.parentElement.replaceChild(repinput,e.previousElementSibling);
    }
    else{
        e.textContent="Edit";
        let previouselement=e.previousElementSibling.value;
        let repHeading=document.createElement('h3');
        repHeading.className="flex-grow-1";
        repHeading.textContent=previouselement;

        e.parentElement.replaceChild(repHeading,e.previousElementSibling);
    }
}