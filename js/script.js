const table = document.querySelector('.table');
if (window.innerHeight > window.innerWidth) {
    table.classList.add('portraitMode');
}
window.onresize = function() {
    if (window.innerHeight > window.innerWidth) {
        table.classList.add('portraitMode');
    }
    else {
        table.classList.remove('portraitMode');
    }
}
console.log(Math.floor(Math.random() * (7 - 1) + 1));