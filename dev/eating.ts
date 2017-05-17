class Eating implements Behaviour{
    jibby:Jibby;
    timer:number;

    constructor(j:Jibby){
        this.jibby = j;
        this.jibby.food += 20;
        this.timer = 0;
    }

    performBehaviour(){
        //eating img
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')";

        //timer to return to old behaviour
        if (this.timer < 180){
            this.timer++
        }
        else{
            this.jibby.behaviour = new Idle(this.jibby);
        }

        // waarden verlagen per frame
        this.jibby.hygiene -= 0.01;
        this.jibby.happyness -= 0.015;
    }

    onPet(){
        this.jibby.behaviour = new Angry(this.jibby);
    }

    onWash(){
        this.jibby.behaviour = new Angry(this.jibby);
    }

    onEat(){
        
    }
}