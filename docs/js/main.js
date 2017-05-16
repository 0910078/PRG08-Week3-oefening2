var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
    }
    Dead.prototype.performBehaviour = function () {
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(j) {
        this.jibby = j;
    }
    Eating.prototype.performBehaviour = function () {
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
        this.behaviour = new Petting(this);
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.behaviour = new Washing(this);
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.behaviour = new Eating(this);
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
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
    }
    Idle.prototype.performBehaviour = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        if (this.jibby.hygiene < 10) {
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        }
        else if (this.jibby.food < 10) {
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        }
        else if (this.jibby.happyness < 10) {
            this.jibby.div.style.backgroundImage = "url('images/angry.png')";
        }
        else {
            this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        }
    };
    return Idle;
}());
var Petting = (function () {
    function Petting(j) {
        this.jibby = j;
    }
    Petting.prototype.performBehaviour = function () {
    };
    return Petting;
}());
var Washing = (function () {
    function Washing(j) {
        this.jibby = j;
    }
    Washing.prototype.performBehaviour = function () {
    };
    return Washing;
}());
//# sourceMappingURL=main.js.map