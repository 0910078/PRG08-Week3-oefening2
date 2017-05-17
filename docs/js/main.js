var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
    }
    Dead.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Dead.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/zombie.png')";
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onEat = function () {
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(j) {
        this.jibby = j;
        this.jibby.food += 20;
        this.timer = 0;
    }
    Eating.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
        if (this.timer < 180) {
            this.timer++;
        }
        else {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        this.jibby.hygiene -= 0.01;
        this.jibby.happyness -= 0.015;
    };
    Eating.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        this.jibby.happyness -= 10;
    };
    Eating.prototype.onWash = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        this.jibby.happyness -= 10;
    };
    Eating.prototype.onEat = function () {
    };
    return Eating;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behaviour = new Idle(this);
    }
    Jibby.prototype.update = function () {
        this.behaviour.performBehaviour();
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.behaviour.onPet();
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.behaviour.onWash();
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.behaviour.onEat();
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Happy = (function () {
    function Happy(j) {
        this.jibby = j;
        this.jibby.happyness += 15;
        this.timer = 0;
    }
    Happy.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        if (this.timer < 180) {
            this.timer++;
        }
        else {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
    };
    Happy.prototype.onPet = function () {
    };
    Happy.prototype.onWash = function () {
    };
    Happy.prototype.onEat = function () {
    };
    return Happy;
}());
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
        this.timer = 0;
    }
    Idle.prototype.performBehaviour = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.jibby.hygiene <= 10) {
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        }
        else if (this.jibby.food <= 10) {
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        }
        else if (this.jibby.happyness <= 10) {
            this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        }
        else {
            this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        }
        if (this.jibby.hygiene <= 0 || this.jibby.food <= 0 || this.jibby.happyness <= 0) {
            this.jibby.behaviour = new Dead(this.jibby);
        }
        if (this.timer < 420) {
            this.timer++;
        }
        else {
            this.jibby.behaviour = new Sleeping(this.jibby);
        }
    };
    Idle.prototype.onPet = function () {
        this.jibby.behaviour = new Happy(this.jibby);
    };
    Idle.prototype.onWash = function () {
        this.jibby.behaviour = new Washing(this.jibby);
    };
    Idle.prototype.onEat = function () {
        this.jibby.behaviour = new Eating(this.jibby);
    };
    return Idle;
}());
var Sleeping = (function () {
    function Sleeping(j) {
        this.jibby = j;
        this.timer = 0;
    }
    Sleeping.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.timer < 180) {
            this.timer++;
        }
        else {
            this.jibby.behaviour = new Idle(this.jibby);
        }
    };
    Sleeping.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        this.jibby.happyness -= 10;
    };
    Sleeping.prototype.onWash = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        this.jibby.happyness -= 10;
    };
    Sleeping.prototype.onEat = function () {
        this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        this.jibby.happyness -= 10;
    };
    return Sleeping;
}());
var Washing = (function () {
    function Washing(j) {
        this.jibby = j;
        this.jibby.hygiene -= 25;
        this.timer = 0;
    }
    Washing.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        if (this.timer < 180) {
            this.timer++;
        }
        else {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
    };
    Washing.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        this.jibby.happyness -= 10;
    };
    Washing.prototype.onWash = function () {
    };
    Washing.prototype.onEat = function () {
        this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        this.jibby.happyness -= 10;
    };
    return Washing;
}());
//# sourceMappingURL=main.js.map