function yesClick() {
    alert("I <3 U")
}

function noClick() {
    let x = window.innerWidth;
    let y = window.innerHeight;
    let button = document.getElementById("not");
    button.style.left = Math.round(x * Math.random()) + "px";
    button.style.top = Math.round(y * Math.random()) + "px";
}