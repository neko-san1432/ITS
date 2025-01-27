function startAnimation(button, p1, p2) {
    document.getElementById(button).disabled = true;
    // console.log("clickrf")
    let x = 100; 
    const velocity = -1; 
    const transitionPoint = -10; 
    const finalState = -110; 

    const idInterval = setInterval(() => {
        x += velocity;
        if (x <= finalState) {
            clearInterval(idInterval);
            document.getElementById(button).disabled = false;
            document.getElementById("transition").style.marginLeft = "100vw";
            x = 100;
            return;
        } else if (x <= transitionPoint) {
            setTimeout(() => {
                document.getElementById(p1).style.display = "none";
                document.getElementById(p2).style.display = "flex";
            }, 2000);
        }

        document.getElementById("transition").style.marginLeft = x + "vw";
    }, 100); 
}