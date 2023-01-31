class App 
{
    runapplication()
    {
        console.log("hello world!");
        this.MarioFunction();
    }
    
    MarioFunction()
    {   
        console.log("MARIO!!");
        this.BWAHAHAFunction();
    }

    BWAHAHAFunction()
    {   
        console.log("BWAHAHA!!!");
        this.optelfunction();
    }

    optelfunction()
    {
        console.log(5+5);

    }


}

let app = new App();
app.runapplication();