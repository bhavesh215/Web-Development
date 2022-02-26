let ulTag=document.createElement('ul');
document.body.append(ulTag);
let n=prompt("Enter number of list items");
for(let i=1;i<=n;i++){
    let listItem=document.createElement('li');
    listItem.textContent=prompt("enter item"+i);
    ulTag.appendChild(listItem);
}
