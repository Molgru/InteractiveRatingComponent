function getValue() {
    const radios = document.getElementsByName("rating");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}
function fillDiv(value) {
    let textDiv = document.getElementById("jsText");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "You selected " + value + " out of 5";
    textDiv.appendChild(paragraph);
}
function hideMain() {
    let value = getValue();
    if (value) {
        let main = document.getElementById("main");
        let submain = document.getElementById("submain");
        main.hidden = true;
        submain.hidden = false;
        fillDiv(value);
    }
}