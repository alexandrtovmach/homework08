var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fighter = (function () {
    function Fighter(name, power, health) {
        if (power === void 0) { power = 5; }
        if (health === void 0) { health = 100; }
        this.name = name;
        this.health = health;
        this.power = power;
    }
    Fighter.prototype.setDamage = function (damage) {
        this.health -= damage;
    };
    Fighter.prototype.hit = function (enemy, point) {
        enemy.setDamage(point * this.power);
    };
    return Fighter;
}());
;
var ImprovedFighter = (function (_super) {
    __extends(ImprovedFighter, _super);
    function ImprovedFighter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImprovedFighter.prototype.doubleHit = function (enemy, point) {
        this.hit(enemy, point * 2);
    };
    return ImprovedFighter;
}(Fighter));
function fight(fighter, improvedFighter) {
    var point = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        point[_i - 2] = arguments[_i];
    }
    point = (!!point[0].forEach) ? point[0] : point;
    if (i >= point.length) {
        i = 0;
    }
    ;
    if (!((fighter.health > 0) && (improvedFighter.health > 0))) {
        var winner = (fighter.health > 0) ? fighter : improvedFighter;
        var loser = (fighter.health <= 0) ? fighter : improvedFighter;
        return statistics(winner, loser, round);
    }
    ;
    //console.log('lap#' + round);
    round++;
    if (round % 2 == 0) {
        fighter.hit(improvedFighter, point[i]);
    }
    else {
        improvedFighter.hit(fighter, point[i]);
    }
    i++;
    fight(fighter, improvedFighter, point);
}
function statistics(winner, loser, round) {
    console.log("Congratulations!!!\n  In " + round + " round - " + winner.name + " is win!\n  *******************************\n  Statistic:\n  1. " + winner.name + ": " + winner.health + "\n  2. " + loser.name + ": " + loser.health);
}
var fighter = new Fighter("Maximus", 1, 150);
var improvedFighter = new ImprovedFighter("Spartacus", 2, 110);
var round = 0;
var i = 0;
fight(fighter, improvedFighter, 4, 1, 9, 5, 2);
