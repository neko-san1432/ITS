let startb = document.getElementById("start");
let mb = document.getElementById("menuB");
let selectionPane = document.getElementById("select");
let startPane = document.getElementById("startPane");
let cfirm = document.getElementById("confirm");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let oks = document.getElementById("ok");
let sky = document.getElementById("sky");
let fe = document.getElementById("facialExp");
let h = document.getElementById("hair");
let g = document.getElementById("gender");
let ts = document.getElementById("tshirt");
let sc = document.getElementById("skincolor");
let con = document.getElementById("content");
let usernameTA = document.getElementById("userName");
let nextque = document.getElementById("next");
let prevque = document.getElementById("previous");
let queCout = 0;
let pretest = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let ans_pretest = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b"]
let user_anspretest = ["", "", "", "", "", "", "", "", "", ""];
let choice_a = document.getElementById("a");
let choice_b = document.getElementById("b");
let choice_c = document.getElementById("c");
let choice_d = document.getElementById("d");
let questionPane = document.getElementById("q1");
let k = document.getElementById("ok");
let notice = document.getElementById("msgAlert");
let returns = document.getElementById("return");
let transitionPane = document.getElementById("blurPane");
fe.addEventListener('click',() => {
    document.getElementById('fp').style.height = '30vh';
})
h.addEventListener('click',() => {
    document.getElementById('hp').style.height = '30vh';
})
g.addEventListener('click',() => {
    document.getElementById('gp').style.height = '30vh';
})
ts.addEventListener('click',() => {
    document.getElementById('tp').style.height = '30vh';
})
sc.addEventListener('click',() => {
    document.getElementById('sp').style.height = '30vh';
})
function closeAll(){

}
startb.addEventListener('click', () => {
    mb.disabled = true;
    startb.disabled = true;
    selectionPane.classList.add('sdSelect');
    startPane.classList.add('sdStart');
    sky.classList.add('sdSky');
    selectionPane.style.display = 'block';
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
    // selectionPane.style.display = "block";
    mb.disabled = true;
    startb.disabled = true;
    selectionPane.style.marginTop = "-100vh"
    startPane.style.marginTop = "-1vh"
    selectionPane.classList.add('suSelect');
    startPane.classList.add('suStart');
    sky.classList.add('suSky');
    sky.style.height = "200px"
    console.log('clicked')
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
        selectionPane.style.marginTop = "-100vh"
        sky.style.height = "200px"
        mb.disabled = true;
        startb.disabled = true;
        selectionPane.classList.add('suSelect');
        startPane.classList.add('suStart');
        sky.classList.add('suSky');
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
        container.classList.remove('slContainer');
        container2.classList.remove('slContainer2');
        container2.style.display = "none"
        container2.style.marginLeft = "100vw"
        container.style.marginLeft = "0vw"
    }, { once: true });
})
cfirm.addEventListener('click', () => {
    //check db if the username is available
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
usernameTA.addEventListener('input', () => {
    let x = usernameTA.value;
    if (x == "") {
        cfirm.disabled = true;
        console.log("ye")
    } else {
        cfirm.disabled = false;
        console.log("no")
    }
})
nextque.addEventListener('click', () => {
    if (queCout != 9) {
        if (user_anspretest[queCout] == "") {
            notice.style.display = "block"
            setTimeout(() => {
                notice.style.display = "none"
                // clearInterval(this);
            }, 2000)

            return;
        }
        queCout++;
        questionPane.textContent = pretest[queCout];
        console.log(queCout)
        selectedAnswer(user_anspretest[queCout]);
        if (queCout == 8) {
            nextque.style.display = "none";
        }
        if (getComputedStyle(prevque).display == "none") {
            prevque.style.display = "block";
        }
    }
});
prevque.addEventListener('click', () => {
    if (queCout != 0) {
        queCout--;
        questionPane.textContent = pretest[queCout];
        console.log(queCout)
        selectedAnswer(user_anspretest[queCout]);
        if (queCout == 1) {
            prevque.style.display = "none"
        }
        if (getComputedStyle(nextque).display == "none") {
            nextque.style.display = "block";
        }
    }
});
choice_a.addEventListener("click", () => {
    clearAnswerState();
    user_anspretest[queCout] = "a";
    choice_a.style.backgroundColor = "blue";
    answeredAll();
    //add highlight to a
})
choice_b.addEventListener("click", () => {
    clearAnswerState();
    user_anspretest[queCout] = "b";
    choice_b.style.backgroundColor = "blue";
    answeredAll();
    //add highlight to b
})
choice_c.addEventListener("click", () => {
    clearAnswerState();
    user_anspretest[queCout] = "c";
    choice_c.style.backgroundColor = "blue";
    answeredAll();
    //add highlight to c
})
choice_d.addEventListener("click", () => {
    clearAnswerState();
    user_anspretest[queCout] = "d";
    choice_d.style.backgroundColor = "blue";
    answeredAll();
    //add highlight to d
})
returns.addEventListener('click', () => {
    transitionPane.classList.add('returnTransition');
    transitionPane.style.zIndex = 3;
    setTimeout(() => {
        container.style.marginLeft = '0vw';
        container2.style.marginLeft = '100vw';
        selectionPane.style.marginTop = '-100vh';
        startPane.style.marginTop = '0vh';
        startPane.style.display = 'block';
        selectionPane.style.display = 'none';
        container2.style.display = 'none';
        usernameTA.value = '';
    }, 1500)
    setTimeout(()=>{
        transitionPane.style.zIndex= -1;
        transitionPane.remove('returnTransition')
    },1750)
});
function selectedAnswer(answer) {
    clearAnswerState();
    if (answer == "a") {
        choice_a.style.backgroundColor = "blue";
    }
    else if (answer == "b") {
        choice_b.style.backgroundColor = "blue";
    }
    else if (answer == "c") {
        choice_c.style.backgroundColor = "blue";
    }
    else if (answer == "d") {
        choice_d.style.backgroundColor = "blue";
    }
}
function answeredAll() {
    for (let i = 0; i <= 9; i++) {
        if (user_anspretest[i] == "") {
            break;
        } else if (i == 9) {
            k.disabled = false;
        }
    }
}
function clearAnswerState() {
    choice_a.style.backgroundColor = "white";
    choice_b.style.backgroundColor = "white";
    choice_c.style.backgroundColor = "white";
    choice_d.style.backgroundColor = "white";
}