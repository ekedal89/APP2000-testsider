function changeColor() {
    var color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
    
}
function changeColor2() {
    var color = document.getElementById("color2").value;
    var headers = document.querySelectorAll("h2");
    
    headers.forEach(function(header) {
        header.style.color = color;
    });
}

