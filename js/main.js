
const tablero = document.getElementById("tablero");
const ctx = tablero.getContext("2d");
const radio = 25;
const numRayos = 360;
const rectX = 100;
const rectY = 200;
const rectWidth = 100;
const rectHeight = 100;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, tablero.offsetWidth, tablero.offsetHeight);

tablero.addEventListener("click", () => {
    console.log("AYUDA")
})

tablero.addEventListener( "mousemove" , (event) => {
    ctx.clearRect(0, 0, tablero.width, tablero.height);

    const rect = tablero.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(mouseX,mouseY, radio, 0, 2* Math.PI,true);
    ctx.fill();


    ctx.beginPath();
    ctx.rect(rectX,rectY,rectWidth,rectHeight);
    ctx.fillStyle = "blue";
    ctx.fill();

    let sepAngular = 2 * Math.PI / numRayos;
    let longitud = 1000;
    ctx.strokeStyle = "yellow";

    for(let i = 0; i < numRayos; i++) {
        let theta = i*sepAngular;
        let cosT = Math.cos(theta);
        let sinT = Math.sin(theta);
        let t = rayRectIntersection(mouseX, mouseY, cosT, sinT, rectX, rectY, rectWidth, rectHeight);

        console.log(t);
        // Si choca, dibuja hasta la pared
        if (t !== null) {
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(mouseX + t * Math.cos(theta), mouseY + t * Math.sin(theta));
            ctx.stroke();
        } else {
            // Si no choca, dibuja largo
            let longitud = 2000;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(mouseX + longitud * Math.cos(theta), mouseY + longitud * Math.sin(theta));
            ctx.stroke();
        }
    }

});

function rayRectIntersection(mouseX, mouseY, cosT, sinT, rectX, rectY) {

    let tVals = [];

    // Lado izquierdo (x = rectX)
    if (cosT !== 0) {
        let t = (rectX - mouseX) / cosT;
        if (t > 0) {
            let y = mouseY + t * sinT;
            if (y >= rectY && y <= rectY + rectHeight) {
                tVals.push(t);
            }
        }
    }

    // Lado derecho (x = rectX + rectW)
    if (cosT !== 0) {
        let t = (rectX + rectWidth - mouseX) / cosT;
        if (t > 0) {
            let y = mouseY + t * sinT;
            if (y >= rectY && y <= rectY + rectHeight) {
                tVals.push(t);
            }
        }
    }

    // Lado arriba (y = rectY)
    if (sinT !== 0) {
        let t = (rectY - mouseY) / sinT;
        if (t > 0) {
            let x = mouseX + t * cosT;
            if (x >= rectX && x <= rectX + rectWidth) {
                tVals.push(t);
            }
        }
    }

    // Lado abajo (y = rectY + rectH)
    if (sinT !== 0) {
        let t = (rectY + rectHeight - mouseY) / sinT;
        if (t > 0) {
            let x = mouseX + t * cosT;
            if (x >= rectX && x <= rectX + rectWidth) {
                tVals.push(t);
            }
        }
    }

    // Si no hay choques → null
    if (tVals.length === 0) return null;

    // Devolver el más cercano
    return Math.min(...tVals);
}

