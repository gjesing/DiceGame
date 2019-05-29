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