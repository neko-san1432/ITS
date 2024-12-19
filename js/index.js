let startb = document.getElementById("start");
let mb = document.getElementById("menuB");
let selectionPane = document.getElementById("select");
let startPane = document.getElementById("startPane");
let confirm = document.getElementById("confirm");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let oks = document.getElementById("ok");
let sky = document.getElementById("sky");
let tn = document.getElementById("tn");
let mn = document.getElementById("mn");
let bn = document.getElementById("bn");
let tp = document.getElementById("tp");
let mp = document.getElementById("mp");
let bp = document.getElementById("bp");
let con = document.getElementById("content");
startb.addEventListener('click', () => {
    mb.disabled = true;
    startb.disabled = true;
    selectionPane.classList.add('sdSelect');
    startPane.classList.add('sdStart');
    sky.classList.add('sdSky');
    startPane.addEventListener('animationend', () => {
        startPane.style.display = "none";
        selectionPane.classList.remove('sdSelect');
        startPane.classList.remove('sdStart');
        sky.classList.remove('sdSky');
        selectionPane.style.marginTop = "0vh"
        startPane.style.marginTop = "100vh"
        sky.style.marginTop = "calc(100vh - 100px)"
        sky.style.height = "100px"

        mb.disabled = false;
        startb.disabled = false;
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
    sky.classList.add('suSky');
    sky.style.height = "200px"

    selectionPane.addEventListener('animationend', () => {
        selectionPane.classList.remove('suSelect');
        startPane.classList.remove('suStart');
        sky.classList.remove('suSky');
        mb.disabled = false;
        startb.disabled = false;
        startPane.disabled = false;
        selectionPane.style.marginTop = "-100vh"
        startPane.style.marginTop = "0vh"
        sky.style.marginTop = "-100px"
        sky.style.height = "200px"

    }, { once: true });
});
oks.addEventListener('click', () => {
    container.style.display = "block";
    container.classList.add('slContainer');
    container2.classList.add('slContainer2');
    setTimeout(() => {
        startb.style.display = "none";
        con.style.display = "block";
        selectionPane.style.display = "block";
        mb.disabled = true;
        startb.disabled = true;
        selectionPane.style.marginTop = "-100vh"
        selectionPane.classList.add('suSelect');
        startPane.classList.add('suStart');
        sky.classList.add('suSky');
        sky.style.height = "200px"
        selectionPane.addEventListener('animationend', () => {
            selectionPane.classList.remove('suSelect');
            startPane.classList.remove('suStart');
            sky.classList.remove('suSky');
            mb.disabled = false;
            startPane.disabled = false;
            selectionPane.style.marginTop = "-100vh"
            sky.style.marginTop = "-100px"
            sky.style.height = "200px"

        }, { once: true });
    }, 5000)
    container2.addEventListener('animationend', () => {
        container2.style.display = "none"
        container.classList.remove('slContainer');
        container2.classList.remove('slContainer2');
        container2.style.marginLeft = "100vw"
        container.style.marginLeft = "0vw"
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
// tn.addEventListener('click',() => {})
// tp.addEventListener('click',() => {})
// mn.addEventListener('click',() => {})
// mp.addEventListener('click',() => {})
// bn.addEventListener('click',() => {})
// bp.addEventListener('click',() => {})