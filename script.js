const ADDDISC = document.getElementsByClassName('add_disc');
const disc_container1 = document.getElementsByClassName('disc_container1');
const disc_container2 = document.getElementsByClassName('disc_container1');
const disc_container3 = document.getElementsByClassName('disc_container1');
// const RESET 

ADDDISC.addEventListener('click', createDISC);
 
const initArr = [];
const discArr = [[], [], []];

let functionCounter = 0;
let winCounter;
let initDisc = 3;
/college-schedule-maker/
window.addEventListener('load', (element) => {
    for (let i = 0; i < discArr.length; i++) {
        createDISC();
    }

});
// for (let i = 0; i < initDisc; i++) {
//     createDISC();
// }

function createDISC() {
    if (functionCounter < 6) {
        const disc = document.createElement('li');
        const width = discArr[0].length * 25;
        disc.setAttribute('id', `d${initDisc}`);
        disc.classList.add(`discs${functionCounter}`);
        const r = Math.floor(Math.random() * (255 - 25) + 25);  
        const g = Math.floor(Math.random() * (255 - 25) + 25);
        const b = Math.floor(Math.random() * (255 - 25) + 25);
        disc.style.width = `${130 - width}px`;
        disc.style.height = `20px`;
        disc.style.border = `1px, solid, rgb(${r}, ${g}, ${b})`;
        disc.style.borderRadius = '5px';
        discArr[0].push(disc);
        disc_container1.appendChild(disc);
        winCounter++;
        functionCounter++;
        mvpCounter--;
        initArr.push(functionCounter);
    }
    if (discArr[0].legnth < functionCounter){
        resetBoard();
    }
}
