class Happy implements Behaviour{
    jibby:Jibby;
    timer:number;

    constructor(j:Jibby){
        this.jibby = j;
        this.jibby.happyness += 15;
        this.timer = 0;
    }

    performBehaviour(){
        //happy image
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";

        //timer to return to old behaviour
        if (this.timer < 180){
            this.timer++
        }
        else{
            this.jibby.behaviour = new Idle(this.jibby);
        }

        // waarden verlagen per frame
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
    }

    onPet(){

    }

    onWash(){

    }

    onEat(){
        
    }
}