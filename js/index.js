// let startb = document.getElementById("start");
// let mb = document.getElementById("menuB");
// let selectionPane = document.getElementById("select");
// let startPane = document.getElementById("startPane");
// let cfirm = document.getElementById("confirm");
// let container = document.getElementById("container");
// let container2 = document.getElementById("container2");
// let oks = document.getElementById("ok");
// let sky = document.getElementById("sky");
// let fe = document.getElementById("facialexp");
// let h = document.getElementById("hair");
// let g = document.getElementById("gender");
// let ts = document.getElementById("tshirt");
// let sc = document.getElementById("skincolor");
// let con = document.getElementById("content");
// let usernameTA = document.getElementById("userName");
// let nextque = document.getElementById("next");
// let prevque = document.getElementById("previous");
// let queCout = 0;
// let pretest = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// let ans_pretest = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b"]
// let user_anspretest = ["", "", "", "", "", "", "", "", "", ""];
// let choice_a = document.getElementById("a");
// let choice_b = document.getElementById("b");
// let choice_c = document.getElementById("c");
// let choice_d = document.getElementById("d");
// let questionPane = document.getElementById("q1");
// let k = document.getElementById("ok");
// let notice = document.getElementById("msgAlert");
// let returns = document.getElementById("return");
// let transitionPane = document.getElementById("blurPane");
// let skPane = document.getElementById('sp');
// let facialPane = document.getElementById('fp');
// let hairPane = document.getElementById('hp');
// let genderPane= document.getElementById('gp');
// let shirtPane = document.getElementById('tp');
// fe.addEventListener('click',() => {
//     facialPane.style.height = "100px";
// })
// h.addEventListener('click',() => {
//     hairPane.style.height = "100px";
// })
// g.addEventListener('click',() => {
//     genderPane.style.height = "100px";
// })
// ts.addEventListener('click',() => {
//     shirtPane.style.height = "100px";
// })
// sc.addEventListener('click',() => {
//     skPane.style.height = "100px";
// })
// function closeAll(){
// }
// startb.addEventListener('click', () => {
//     mb.disabled = true;
//     startb.disabled = true;
//     selectionPane.classList.add('sdSelect');
//     startPane.classList.add('sdStart');
//     sky.classList.add('sdSky');
//     selectionPane.style.display = 'block';
//     startPane.addEventListener('animationend', () => {
//         startPane.style.display = "none";
//         selectionPane.classList.remove('sdSelect');
//         startPane.classList.remove('sdStart');
//         sky.classList.remove('sdSky');
//         selectionPane.style.marginTop = "0vh"
//         startPane.style.marginTop = "100vh"
//         sky.style.marginTop = "calc(100vh - 100px)"
//         sky.style.height = "100px"

//         mb.disabled = false;
//         startb.disabled = false;
//     }, { once: true });
// });

// mb.addEventListener('click', () => {
//     startPane.style.display = "block";
//     // selectionPane.style.display = "block";
//     mb.disabled = true;
//     startb.disabled = true;
//     selectionPane.style.marginTop = "-100vh"
//     startPane.style.marginTop = "-1vh"
//     selectionPane.classList.add('suSelect');
//     startPane.classList.add('suStart');
//     sky.classList.add('suSky');
//     sky.style.height = "200px"
//     console.log('clicked')
//     selectionPane.addEventListener('animationend', () => {
//         selectionPane.classList.remove('suSelect');
//         startPane.classList.remove('suStart');
//         sky.classList.remove('suSky');
//         mb.disabled = false;
//         startb.disabled = false;
//         startPane.disabled = false;
//         selectionPane.style.marginTop = "-100vh"
//         startPane.style.marginTop = "0vh"
//         sky.style.marginTop = "-100px"
//         sky.style.height = "200px"
//     }, { once: true });
// });

// oks.addEventListener('click', () => {
//     container.style.display = "block";
//     container.classList.add('slContainer');
//     container2.classList.add('slContainer2');
//     setTimeout(() => {
//         startb.style.display = "none";
//         con.style.display = "block";
//         selectionPane.style.display = "block";
//         selectionPane.style.marginTop = "-100vh"
//         sky.style.height = "200px"
//         mb.disabled = true;
//         startb.disabled = true;
//         selectionPane.classList.add('suSelect');
//         startPane.classList.add('suStart');
//         sky.classList.add('suSky');
//         selectionPane.addEventListener('animationend', () => {
//             selectionPane.classList.remove('suSelect');
//             startPane.classList.remove('suStart');
//             sky.classList.remove('suSky');
//             mb.disabled = false;
//             startPane.disabled = false;
//             selectionPane.style.marginTop = "-100vh"
//             sky.style.marginTop = "-100px"
//             sky.style.height = "200px"

//         }, { once: true });
//     }, 5000)
//     container2.addEventListener('animationend', () => {
//         container.classList.remove('slContainer');
//         container2.classList.remove('slContainer2');
//         container2.style.display = "none"
//         container2.style.marginLeft = "100vw"
//         container.style.marginLeft = "0vw"
//     }, { once: true });
// })
// cfirm.addEventListener('click', () => {
//     //check db if the username is available
//     container2.style.display = "block";
//     container.classList.add('srContainer');
//     container2.classList.add('srContainer2');
//     container2.addEventListener('animationend', () => {
//         container.classList.remove('srContainer');
//         container2.classList.remove('srContainer2');
//         container.style.marginLeft = "-100vw"
//         container2.style.marginLeft = "0vw"
//     }, { once: true });
// })
// usernameTA.addEventListener('input', () => {
//     let x = usernameTA.value;
//     if (x == "") {
//         cfirm.disabled = true;
//         console.log("ye")
//     } else {
//         cfirm.disabled = false;
//         console.log("no")
//     }
// })
// nextque.addEventListener('click', () => {
//     if (queCout != 9) {
//         if (user_anspretest[queCout] == "") {
//             notice.style.display = "block"
//             setTimeout(() => {
//                 notice.style.display = "none"
//                 // clearInterval(this);
//             }, 2000)

//             return;
//         }
//         queCout++;
//         questionPane.textContent = pretest[queCout];
//         console.log(queCout)
//         selectedAnswer(user_anspretest[queCout]);
//         if (queCout == 8) {
//             nextque.style.display = "none";
//         }
//         if (getComputedStyle(prevque).display == "none") {
//             prevque.style.display = "block";
//         }
//     }
// });
// prevque.addEventListener('click', () => {
//     if (queCout != 0) {
//         queCout--;
//         questionPane.textContent = pretest[queCout];
//         console.log(queCout)
//         selectedAnswer(user_anspretest[queCout]);
//         if (queCout == 1) {
//             prevque.style.display = "none"
//         }
//         if (getComputedStyle(nextque).display == "none") {
//             nextque.style.display = "block";
//         }
//     }
// });
// choice_a.addEventListener("click", () => {
//     clearAnswerState();
//     user_anspretest[queCout] = "a";
//     choice_a.style.backgroundColor = "blue";
//     answeredAll();
//     //add highlight to a
// })
// choice_b.addEventListener("click", () => {
//     clearAnswerState();
//     user_anspretest[queCout] = "b";
//     choice_b.style.backgroundColor = "blue";
//     answeredAll();
//     //add highlight to b
// })
// choice_c.addEventListener("click", () => {
//     clearAnswerState();
//     user_anspretest[queCout] = "c";
//     choice_c.style.backgroundColor = "blue";
//     answeredAll();
//     //add highlight to c
// })
// choice_d.addEventListener("click", () => {
//     clearAnswerState();
//     user_anspretest[queCout] = "d";
//     choice_d.style.backgroundColor = "blue";
//     answeredAll();
//     //add highlight to d
// })
// returns.addEventListener('click', () => {
//     transitionPane.classList.add('returnTransition');
//     transitionPane.style.zIndex = 3;
//     setTimeout(() => {
//         container.style.marginLeft = '0vw';
//         container2.style.marginLeft = '100vw';
//         selectionPane.style.marginTop = '-100vh';
//         startPane.style.marginTop = '0vh';
//         startPane.style.display = 'block';
//         selectionPane.style.display = 'none';
//         container2.style.display = 'none';
//         usernameTA.value = '';
//     }, 1500)
//     setTimeout(()=>{
//         transitionPane.style.zIndex= -1;
//         transitionPane.remove('returnTransition')
//     },1750)
// });
// function selectedAnswer(answer) {
//     clearAnswerState();
//     if (answer == "a") {
//         choice_a.style.backgroundColor = "blue";
//     }
//     else if (answer == "b") {
//         choice_b.style.backgroundColor = "blue";
//     }
//     else if (answer == "c") {
//         choice_c.style.backgroundColor = "blue";
//     }
//     else if (answer == "d") {
//         choice_d.style.backgroundColor = "blue";
//     }
// }
// function answeredAll() {
//     for (let i = 0; i <= 9; i++) {
//         if (user_anspretest[i] == "") {
//             break;
//         } else if (i == 9) {
//             k.disabled = false;
//         }
//     }
// }
// function clearAnswerState() {
//     choice_a.style.backgroundColor = "white";
//     choice_b.style.backgroundColor = "white";
//     choice_c.style.backgroundColor = "white";
//     choice_d.style.backgroundColor = "white";
// }

// Define DOM elements
const elements = {
    startButton: document.getElementById("start"),
    menuButton: document.getElementById("menuB"),
    selectionPane: document.getElementById("select"),
    startPane: document.getElementById("startPane"),
    confirmButton: document.getElementById("confirm"),
    container: document.getElementById("container"),
    container2: document.getElementById("container2"),
    okButton: document.getElementById("ok"),
    sky: document.getElementById("sky"),
    facialExpression: document.getElementById("facialexp"),
    hair: document.getElementById("hair"),
    gender: document.getElementById("gender"),
    tshirt: document.getElementById("tshirt"),
    skinColor: document.getElementById("skincolor"),
    content: document.getElementById("content"),
    usernameInput: document.getElementById("userName"),
    nextQuestion: document.getElementById("next"),
    previousQuestion: document.getElementById("previous"),
    notice: document.getElementById("msgAlert"),
    returnButton: document.getElementById("return"),
    transitionPane: document.getElementById("blurPane"),
    skinPane: document.getElementById("sp"),
    facialPane: document.getElementById("fp"),
    hairPane: document.getElementById("hp"),
    genderPane: document.getElementById("gp"),
    shirtPane: document.getElementById("tp"),
    questionPane: document.getElementById("q1"),
    choices: {
        a: document.getElementById("a"),
        b: document.getElementById("b"),
        c: document.getElementById("c"),
        d: document.getElementById("d"),
    },
};

// Variables
let questionIndex = 0;
let prevOptSkin = 0;
const pretestQuestions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const correctAnswers = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b"];
const userAnswers = Array(pretestQuestions.length).fill("");

// Helper functions
function togglePane(pane, height) {
    pane.style.height = height;
}

function resetAnswerState() {
    Object.values(elements.choices).forEach((choice) => {
        choice.style.backgroundColor = "white";
    });
}

function updateSelectedAnswer(answer) {
    resetAnswerState();
    if (answer) {
        elements.choices[answer].style.backgroundColor = "blue";
    }
}

function validateAllAnswers() {
    const allAnswered = userAnswers.every((answer) => answer !== "");
    elements.okButton.disabled = !allAnswered;
}

function handlePaneAnimation(pane, className, display, callback) {
    pane.classList.add(className);
    pane.addEventListener("animationend", () => {
        pane.classList.remove(className);
        pane.style.display = display;
        if (callback) callback();
    }, { once: true });
}
function closeAll(name) {
    if (name == 1) {
        elements.facialPane.remove("openCon");
        elements.facialPane.classList.add("closeCon");
        elements.facialPane.addEventListener('animationend', () => {
            elements.facialPane.style.height = "0vh";
        })
    }
    if (name == 2) {
        elements.hairPane.remove("openCon");
        elements.hairPane.classList.add("closeCon");
        elements.hairPane.addEventListener('animationend', () => {
            elements.hairPane.style.height = "0vh";
        })
    }
    if (name == 3) {
        elements.genderPane.remove("openCon");
        elements.genderPane.classList.add("closeCon");
        elements.genderPane.addEventListener('animationend', () => {
            elements.genderPane.style.height = "0vh";
        })
    }
    if (name == 4) {
        elements.shirtPane.remove("openCon");
        elements.shirtPane.classList.add("closeCon");
        elements.shirtPane.addEventListener('animationend', () => {
            elements.shirtPane.style.height = "0vh";
        })
    }
    if (name == 5) {
        elements.skinPane.remove("openCon");
        elements.skinPane.classList.add("closeCon");
        elements.skinPane.addEventListener('animationend', () => {
            elements.skinPane.style.height = "0vh";
        })
    }
    console.log(name);
}

// Event Listeners
["click"].forEach((event) => {
    elements.facialExpression.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 1;
        elements.facialPane.remove("openCon");
        elements.facialPane.classList.add("openCon");
        elements.facialPane.style.height = "30vh";
    });
    elements.hair.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 2;
        elements.hairPane
            .remove("openCon");

        elements.hairPane.classList.add("openCon");
        elements.hairPane.style.height = "30vh";
    });
    elements.gender.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 3;
        elements.genderPane.remove("openCon");

        elements.genderPane.classList.add("openCon");
        elements.genderPane.style.height = "30vh";
    });
    elements.tshirt.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 4;

        elements.shirtPane.remove("openCon");

        elements.shirtPane.classList.add("openCon");
        elements.shirtPane.style.height = "30vh";
    });
    elements.skinColor.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 5;
        elements.skinPane.remove("openCon");
        elements.skinPane.classList.add("openCon");
        elements.skinPane.style.height = "30vh";
    });
});

elements.startButton.addEventListener("click", () => {
    elements.menuButton.disabled = true;
    elements.startButton.disabled = true;
    handlePaneAnimation(elements.startPane, "sdStart", "none", () => {
        elements.selectionPane.style.marginTop = "0vh";
        elements.startPane.style.marginTop = "100vh";
        elements.sky.style.marginTop = "calc(100vh - 100px)";
        elements.sky.style.height = "100px";
        elements.menuButton.disabled = false;
        elements.startButton.disabled = false;
    });
});

elements.menuButton.addEventListener("click", () => {
    elements.startPane.style.display = "block";
    handlePaneAnimation(elements.selectionPane, "suSelect", "block", () => {
        elements.sky.style.height = "200px";
    });
});

elements.okButton.addEventListener("click", () => {
    elements.container.style.display = "block";
    elements.container2.classList.add("slContainer2");
    setTimeout(() => {
        elements.startButton.style.display = "none";
        elements.content.style.display = "block";
    }, 5000);
});

elements.confirmButton.addEventListener("click", () => {
    elements.container2.style.display = "block";
    handlePaneAnimation(elements.container, "srContainer", "block");
});

elements.usernameInput.addEventListener("input", () => {
    elements.confirmButton.disabled = elements.usernameInput.value === "";
});

elements.nextQuestion.addEventListener("click", () => {
    if (questionIndex < pretestQuestions.length - 1) {
        if (!userAnswers[questionIndex]) {
            elements.notice.style.display = "block";
            setTimeout(() => {
                elements.notice.style.display = "none";
            }, 2000);
            return;
        }
        questionIndex++;
        elements.questionPane.textContent = pretestQuestions[questionIndex];
        updateSelectedAnswer(userAnswers[questionIndex]);
        elements.previousQuestion.style.display = "block";
        if (questionIndex === pretestQuestions.length - 1) {
            elements.nextQuestion.style.display = "none";
        }
    }
});

elements.previousQuestion.addEventListener("click", () => {
    if (questionIndex > 0) {
        questionIndex--;
        elements.questionPane.textContent = pretestQuestions[questionIndex];
        updateSelectedAnswer(userAnswers[questionIndex]);
        elements.nextQuestion.style.display = "block";
        if (questionIndex === 0) {
            elements.previousQuestion.style.display = "none";
        }
    }
});

Object.entries(elements.choices).forEach(([key, choice]) => {
    choice.addEventListener("click", () => {
        resetAnswerState();
        userAnswers[questionIndex] = key;
        choice.style.backgroundColor = "blue";
        validateAllAnswers();
    });
});

elements.returnButton.addEventListener("click", () => {
    handlePaneAnimation(elements.transitionPane, "returnTransition", "", () => {
        elements.container.style.marginLeft = "0vw";
        elements.container2.style.marginLeft = "100vw";
        elements.selectionPane.style.marginTop = "-100vh";
        elements.startPane.style.marginTop = "0vh";
        elements.startPane.style.display = "block";
        elements.selectionPane.style.display = "none";
        elements.container2.style.display = "none";
        elements.usernameInput.value = "";
    });
});
