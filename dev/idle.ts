class Idle implements Behaviour{

    jibby: Jibby;

    constructor(j:Jibby){
        this.jibby = j;
    }

    performBehaviour(){
        // waarden verlagen per frame
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;

        //afbeelding veranderen naar dirty als hygiene te laag wordt
        if (this.jibby.hygiene < 10){
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        }
        //afbeelding veranderen naar hungry als food te laag wordt
        else if (this.jibby.food < 10){
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        }
        //afbeelding veranderen naar angry als happyness te laag wordt
        else if (this.jibby.happyness < 10){
            this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        }
        else{
            // afbeelding voor idle
            this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        }

    }
}