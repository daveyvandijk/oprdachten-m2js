class App 
{
    runapplication()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        
        console.log(canvas)
        //line
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "White";
        g.moveTo(740,240);
        g.lineTo(670,260);
        g.lineTo(680,340);
        g.lineTo(760,300);
        g.closePath();
        g.stroke();
        g.fill()
    }

}

let app = new App();
app.runapplication();