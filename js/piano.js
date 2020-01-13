const keys = document.querySelectorAll('.key');
keys.forEach(key => {
   key.addEventListener('click', () => onPlaySound(key)); 
});

// document.addEventListener('keydown', event => { // When click key all keyboard that we want to click it
//     const keyboard = event.key;
//     document.querySelector('button').innerHTML = keyboard;
// });

// create function playSound
function onPlaySound(key) {
    const audioKey = document.getElementById(key.dataset.note);
    audioKey.play();
}