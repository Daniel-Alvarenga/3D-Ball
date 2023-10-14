quant = 300; radius = 150;
for (var i = 0; i < quant; i++) {
    var box = document.getElementById("paralelos");
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.id = "circle2" + i;
    box.appendChild(circle);
    var id = document.getElementById("circle2" + i);
    id.style.transform = "translateZ(" + Math.sin(Math.PI/quant*i) * radius + "px)";
    id.style.transform += "scale(" + Math.cos(Math.PI/quant*i) + ")";

    if(i > 0){        
        var circle = document.createElement("div");
        circle.className = "circle";
        circle.id = "circle3" + i;
        box.appendChild(circle);
        var id = document.getElementById("circle3" + i);
        id.style.transform = "translateZ(-" + Math.sin(Math.PI/quant*i) * radius + "px)";
        id.style.transform += "scale(" + Math.cos(Math.PI/quant*i) + ")";
    }
}