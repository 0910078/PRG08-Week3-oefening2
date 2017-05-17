class Reviving implements Behaviour{
    jibby:Jibby;
    timer: number;

    constructor(j:Jibby){
        this.jibby = j;
        this.timer = 0;
    }

    performBehaviour(){
        // afbeelding voor reviving
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";

        //timer to revive
        if (this.timer < 180){
            this.timer++
        }
        else{
            //reset values   
            this.jibby.hygiene = 50;
            this.jibby.food = 50;
            this.jibby.happyness = 50;

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