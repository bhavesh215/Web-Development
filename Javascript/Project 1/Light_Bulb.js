let onbtn=document.querySelector('button');
onbtn.addEventListener('click',toggleBulb);

function toggleBulb(){
    if(onbtn.data!==true){
        document.querySelector('img').src="bulb_on.jpg";
        onbtn.textContent="Turn Off";
        onbtn.data=true;
        onbtn.style.backgroundColor="darkgreen";
    }
    else{
        document.querySelector('img').src="bulb_off.jpg";
        onbtn.textContent="Turn ON";
        onbtn.data=false;
        onbtn.style.backgroundColor="green";
    }
}