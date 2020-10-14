const logo = document.querySelectorAll("#logo path");

for ( let i = 0; i < logo.length; i++ ) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const heartBeat = document.querySelectorAll("#hb path");

for ( let i = 0; i < heartBeat.length; i++ ) {
    console.log(`Heart-beat ${i} is ${heartBeat[i].getTotalLength()}`);
}
