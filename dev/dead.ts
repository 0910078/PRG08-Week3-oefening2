class Dead implements Behaviour{
    jibby:Jibby;

    constructor(j:Jibby){
        this.jibby = j;
    }

    performBehaviour(){
        // afbeelding voor dead
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    }

    onPet(){
        //revive jibby
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";
    }

    onWash(){
        
    }

    onEat(){
        
    }
}