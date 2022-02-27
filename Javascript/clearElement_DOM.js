function clear(e){
    while(e.childNodes.length>0){
        e.childNodes[0].remove();
    }
}
clear(element);