class Angry implements Behaviour {
    jibby: Jibby;
    timer: number;

    constructor(j:Jibby){
        this.jibby = j;
        this.jibby.happyness -= 10;
        this.timer = 0;
    }

    performBehaviour(){
        //afbeelding voor angry
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";

        // waarden verlagen per frame
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;

        //timer to return to old behaviour
        if (this.timer < 180){
            this.timer++
        }
        else{
            this.jibby.behaviour = new Idle(this.jibby);
        }
    }

    onPet(){

    }

    onWash(){
        
    }

    onEat(){
        
    }
}