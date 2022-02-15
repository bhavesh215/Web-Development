/* String Challenge 1 Capitaliziting the array elements

const list= document.querySelector('.output ul');
list.innerHTML='';
let cities = ['mumBai','Delhi','JaiPur','goA'];

 for(let city of cities){
    let fA=city.slice(0,1);
    let lc= city.toLowerCase();
    lc=lc.replace(fA,fA.toUpperCase());
    let listitem = document.createElement('li');
    listitem.textContent= lc;
    list.appendChild(listitem);
}
console.log(cities); */

// String Challenge 2 String Searching

const list= document.querySelector('.output ul');
list.innerHTML='';
let greetings=[ 'Happy Birthday!',
    'A happy Holi to all the buddy',
    'Happy Holi to all the family',
    'Holi Mubarak ho',
    'Get Well Soon',
    'Happy Anniversary Mom and Dad!'
]
for(let greet in greetings){
    var r=greetings[greet].indexOf('Holi');
    if(r!=-1){
        let listitem = document.createElement('li');
        listitem.textContent= greetings[greet];
        list.appendChild(listitem);
    }
}


/* Fun Games:
1. Smash Karts : https://smashkarts.io/
2. Code Names : https://codenames.game/
3. Shell Shockers (fps) : https://shellshock.io/
4. Draw Battle : https://drawbattle.io/
5. Krunker (fps) : https://www.krunker.io/
6. Wings : https://wings.io
7. EV (fps) : https://ev.io/
8. Brutal (fps): http://brutal.io/
9. Repuls (fps): https://repuls.io/ */