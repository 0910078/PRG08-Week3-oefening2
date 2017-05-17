class Washing implements Behaviour{
    jibby:Jibby;
    timer:number;

    constructor(j:Jibby){
        this.jibby = j;
        this.jibby.hygiene += 25;
        this.timer = 0;
    }

    performBehaviour(){
        //washing image
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";

        //timer to return to old behaviour
        if (this.timer < 180){
            this.timer++
        }
        else{
            this.jibby.behaviour = new Idle(this.jibby);
        }

        // waarden verlagen per frame
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
    }

    onPet(){
        this.jibby.behaviour = new Sad(this.jibby);
    }

    onWash(){

    }

    onEat(){
        this.jibby.behaviour = new Sad(this.jibby);
    }
}