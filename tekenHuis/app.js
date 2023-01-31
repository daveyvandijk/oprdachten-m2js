class App 
{
    runapplication()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        this.houseApplication(100,100,g)
       
    }
   
    houseApplication(x,y,g)
    {
        
        //line
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+300,y+100);
        g.lineTo(x+700,y+200);
        g.lineTo(x+600,y+400);
        g.lineTo(x+200,y+300);
        g.closePath();
        g.stroke();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+200,y+300);
        g.lineTo(x+600,y+400);
        g.lineTo(x+600,y+600);
        g.lineTo(x+200,y+500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+800,y+300);
        g.lineTo(x+600,y+400);
        g.lineTo(x+600,y+600);
        g.lineTo(x+800,y+500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x+800,y+300);
        g.lineTo(x+600,y+400);
        g.lineTo(x+700,y+200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "White";
        g.moveTo(x+740,y+240);
        g.lineTo(x+670,y+260);
        g.lineTo(x+680,y+340);
        g.lineTo(x+760,y+300);
        g.closePath();
        g.stroke();
        g.fill()
    }

}

let app = new App();
app.runapplication();