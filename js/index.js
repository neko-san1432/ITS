let startb = document.getElementById("start");
let mb = document.getElementById("menuB");
let selectionPane = document.getElementById("select");
let startPane = document.getElementById("startPane");
let confirm = document.getElementById("confirm");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let oks = document.getElementById("ok");
// startb.addEventListener('click', () => {
//     // selectionPane.style.display = "block";
//     mb.disabled = true;
//     startb.disabled = true;

//     selectionPane.classList.add('sdSelect');
//     startPane.classList.add('sdStart');

//     startPane.addEventListener('animationend', () => {
//         startPane.style.display = "none";
//         selectionPane.classList.remove('sdSelect');
//         startPane.classList.remove('sdStart');
//         selectionPane.style.marginTop = "0vh"
//         startPane.style.marginTop = "0vh"

//         mb.disabled = false;
//         startPane.disabled= false;
//     }, { once: true });
// });

// mb.addEventListener('click', () => {
//     startPane.style.display = "block";
//     selectionPane.style.display = "block";
//     mb.disabled = true;
//     startb.disabled = true;
//     selectionPane.style.marginTop = "-100vh"
//     startPane.style.marginTop = "0vh"
//     selectionPane.classList.add('suSelect');
//     startPane.classList.add('suStart');

//     selectionPane.addEventListener('animationend', () => {
//         // selectionPane.style.display = "none";
//         selectionPane.classList.remove('suSelect');
//         startPane.classList.remove('suStart');
//         mb.disabled = false;
//         startb.disabled = false;
//         startPane.disabled= false;
//     }, { once: true });
// });
startb.addEventListener('click', () => {
    // selectionPane.style.display = "block";
    mb.disabled = true;
    startb.disabled = true;

    selectionPane.classList.add('sdSelect');
    startPane.classList.add('sdStart');

    startPane.addEventListener('animationend', () => {
        startPane.style.display = "none";
        selectionPane.classList.remove('sdSelect');
        startPane.classList.remove('sdStart');
        selectionPane.style.marginTop = "0vh"
        startPane.style.marginTop = "200vh"

        mb.disabled = false;
        startPane.disabled = false;
    }, { once: true });
});

mb.addEventListener('click', () => {
    startPane.style.display = "block";
    selectionPane.style.display = "block";
    mb.disabled = true;
    startb.disabled = true;
    selectionPane.style.marginTop = "-100vh"
    startPane.style.marginTop = "-1vh"
    selectionPane.classList.add('suSelect');
    startPane.classList.add('suStart');

    selectionPane.addEventListener('animationend', () => {
        // selectionPane.style.display = "none";
        selectionPane.classList.remove('suSelect');
        startPane.classList.remove('suStart');
        mb.disabled = false;
        startb.disabled = false;
        startPane.disabled = false;
        selectionPane.style.marginTop = "-100vh"
        startPane.style.marginTop = "0vh"
    }, { once: true });
});
oks.addEventListener('click', () => {
    container.style.display = "block";
    container.classList.add('slContainer');
    container2.classList.add('slContainer2');
    container2.addEventListener('animationend', () => {
        container2.style.display = "none"
        container.classList.remove('slContainer');
        container2.classList.remove('slContainer2');
        container2.style.marginLeft = "100vw"
        container.style.marginLeft = "0vw"
        // container.style.marginTop = "-1vw"
    }, { once: true });
})
confirm.addEventListener('click', () => {
    container2.style.display = "block";
    container.classList.add('srContainer');
    container2.classList.add('srContainer2');
    container2.addEventListener('animationend', () => {
        container.classList.remove('srContainer');
        container2.classList.remove('srContainer2');
        container.style.marginLeft = "-100vw"
        container2.style.marginLeft = "0vw"
    }, { once: true });
})
