// index.js file

let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let americaClock = document.querySelector('#americaClock');



function jsClock(props) {

    let date = new Date();

    let ui = `
    <div>
        <span> ${props}<span>
        <p>${date.toLocaleTimeString('en-US', { timeZone: props })} </p>
    </div>
    
    `
    return ui;
}

setInterval(() => {
    indianClock.innerHTML = jsClock('asia/kolkata');
    dubaiClock.innerHTML = jsClock('asia/dubai');
    americaClock.innerHTML=jsClock('america/new_york');
    //jsClock();
}, 1000)
