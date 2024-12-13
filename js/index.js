let startb = document.getElementById("start");
let mb = document.getElementById("menuB");
let selectionPane = document.getElementById("select");
let startPane = document.getElementById("startPane");

startb.addEventListener('click', () => {
    selectionPane.style.display = "block";
    mb.disabled = true;
    startb.disabled = true;

    selectionPane.classList.add('sdSelect');
    startPane.classList.add('sdStart');

    startPane.addEventListener('animationend', () => {
        startPane.style.display = "none";
        // selectionPane.classList.remove('sdSelect');
        // startPane.classList.remove('sdStart');
        mb.disabled = false;
        startPane.disabled= false;
    }, { once: true });
});

mb.addEventListener('click', () => {
    // if(hascll)
    startPane.style.display = "block";
    mb.disabled = true;
    startb.disabled = true;

    selectionPane.classList.add('suSelect');
    startPane.classList.add('suStart');

    selectionPane.addEventListener('animationend', () => {
        selectionPane.style.display = "none";
        // selectionPane.classList.remove('suSelect');
        // startPane.classList.remove('suStart');
        mb.disabled = false;
        startb.disabled = false;
        startPane.disabled= false;
    }, { once: true });
});
