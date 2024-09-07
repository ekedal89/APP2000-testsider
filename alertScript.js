function visBeskjed() {
    var navn = document.getElementById("name").value;
    alert("Hei på deg, " + navn + "!");
}

function visAlder() {
    var alder = document.getElementById("age").value;
    let x = 100-alder;
    alert("Du er 100 år om " + x + " år!");
}