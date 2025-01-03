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
    chara: document.getElementById("cfirmchara"),
    r2c: document.getElementById("return2char"),
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

function handlePaneAnimation(pane, pane2, className, className2, display, display2, callback, skyani) {
    pane.classList.add(className);
    pane2.classList.add(className2);
    pane.addEventListener("animationend", () => {
        pane.classList.remove(className);
        pane2.classList.remove(className2);
        pane.style.display = display;
        pane2.style.display = display2;
        console.log(display + display2)
        if (callback) callback();
    }, { once: true });

}
function closeAll(name) {
    if (name == 1) {
        elements.facialExpression.disabled = false;
        elements.facialPane.style.height = "0vh";
    }
    if (name == 2) {
        elements.hair.disabled = false;
        elements.hairPane.style.height = "0vh";
    }
    if (name == 3) {
        elements.gender.disabled = false;
        elements.genderPane.style.height = "0vh";
    }
    if (name == 4) {
        elements.tshirt.disabled = false;
        elements.shirtPane.style.height = "0vh";
    }
    if (name == 5) {
        elements.skinColor.disabled = false;
        elements.skinPane.style.height = "0vh";
    }
}
// Event Listeners
["click"].forEach((event) => {
    elements.facialExpression.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 1;
        elements.facialExpression.disabled = true;
        elements.facialPane.style.height = "30vh";
    });
    elements.hair.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 2;
        elements.hair.disabled = true;
        elements.hairPane.style.height = "30vh";
    });
    elements.gender.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 3;
        elements.gender.disabled = true;
        elements.genderPane.style.height = "30vh";
    });
    elements.tshirt.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 4;
        elements.tshirt.disabled = true;
        elements.shirtPane.style.height = "30vh";
    });
    elements.skinColor.addEventListener(event, () => {
        closeAll(prevOptSkin);
        prevOptSkin = 5;
        elements.skinColor.disabled = true;
        elements.skinPane.style.height = "30vh";
    });
});
elements.menuButton.addEventListener('click', () => {
    elements.startPane.style.display = "block";
    elements.startPane.style.marginTop = "-1vh"
    elements.selectionPane.classList.add('suSelect');
    elements.startPane.classList.add('suStart');
    // elements.sky.classList.add('suSky');
    elements.sky.style.height = "200px"
    elements.startPane.style.marginTop = "0vh"
    console.log('clicked')
    elements.sky.style.marginTop = "calc(0vh - 100px)";
    elements.selectionPane.addEventListener('animationend', () => {
        elements.selectionPane.classList.remove('suSelect');
        elements.startPane.classList.remove('suStart');
        elements.selectionPane.style.marginTop = "-100vh"
        elements.sky.style.height = "200px"
        elements.selectionPane.style.marginTop = "-100vh"
        console.log(elements.startButton.disabled)
    }, { once: true });
});

elements.startButton.addEventListener("click", () => {
    elements.menuButton.disabled = true;
    elements.startButton.disabled = true;
    elements.sky.style.marginTop = "calc(100vh - 100px)";
    handlePaneAnimation(elements.startPane, elements.selectionPane, "sdStart", "sdSelect", "none", "block", () => {
        elements.selectionPane.style.marginTop = "0vh";
        elements.startPane.style.marginTop = "100vh";
        elements.sky.style.height = "100px";
        elements.menuButton.disabled = false;
        elements.startButton.disabled = false;
    }, "sdSky");
});

elements.chara.addEventListener("click", () => {
    document.getElementById("usernamePane").style.display = "block";
    setTimeout(() => {
        document.getElementById("item").style.marginLeft = "-100vw";
        document.getElementById("usernamePane").style.marginLeft = "0vw";
    }, 100)
})

elements.okButton.addEventListener("click", () => {
    elements.menuButton.style.display = "none";
    elements.chara.style.display = "none";
    document.getElementById("item").style.justifyContent = "center";
    document.getElementById("item").style.alignItems = "center";
    document.getElementById("item").style.height = "100vh";
    document.getElementById("item").style.display = "flex";
    document.getElementById("item").style.transition = "none";
    document.getElementById("usernamePane").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("leftw").style.display = "none";
    document.getElementById("rightw").style.display = "none";
    document.getElementById("item").style.marginLeft = "0vw";
    document.getElementById("userName").style.marginLeft = "100vw";
    elements.container.classList.add('slContainer');
    elements.container2.classList.add('slContainer2');
    elements.container2.addEventListener('animationend', () => {
        elements.container.classList.remove('slContainer');
        elements.container2.classList.remove('slContainer2');
        elements.container.style.marginLeft = "0vw"
        elements.container2.style.display = "none";
        elements.container2.style.marginLeft = "100vw"
    }, { once: true });
    setTimeout(() => {
        document.getElementById("person").style.transition = "margin-top 2s ease";
        document.getElementById("person").style.marginTop = "50vh";
        elements.content.style.display = "block";
        elements.startPane.style.display = "none";
        elements.selectionPane.addEventListener("animationEnd", () => { 
            elements.selectionPane.style.display = "none";
            elements.startPane.style.display = "block";
            elements.startPane.style.marginTop = "-1vh"
            elements.selectionPane.classList.add('suSelect');
            elements.startPane.classList.add('suStart');
            elements.sky.style.height = "200px"
            elements.startPane.style.marginTop = "0vh"
            console.log('clicked')
            elements.sky.style.marginTop = "calc(0vh - 100px)";
            elements.selectionPane.addEventListener('animationend', () => {
                elements.selectionPane.classList.remove('suSelect');
                elements.startPane.classList.remove('suStart');
                elements.selectionPane.style.marginTop = "-100vh"
                elements.sky.style.height = "200px"
                elements.selectionPane.style.marginTop = "-100vh"
                console.log(elements.startButton.disabled)
            }, { once: true });
        })
    }, 4000);
}); elements.confirmButton.addEventListener('click', () => {
    //check db if the username is available
    elements.container2.style.display = "block";
    elements.container.classList.add('srContainer');
    elements.container2.classList.add('srContainer2');
    elements.container2.addEventListener('animationend', () => {
        elements.container.classList.remove('srContainer');
        elements.container2.classList.remove('srContainer2');
        elements.container.style.marginLeft = "-100vw"
        elements.container2.style.marginLeft = "0vw"
    }, { once: true });
})
elements.r2c.addEventListener('click', () => {
    document.getElementById("item").style.marginLeft = "0vw";
    document.getElementById("usernamePane").style.marginLeft = "100vw";
    setTimeout(() => {
        document.getElementById("usernamePane").style.display = "none";
    }, 1000)
})


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
