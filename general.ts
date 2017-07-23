interface IFighter {
    name: string;
    health: number; 
    setDamage(damage: number);
    hit(enemy, point: number);
}

class Fighter implements IFighter {
    name: string;
    protected power: number;
    health: number;
	constructor(name, power = 5, health = 100) {
		this.name = name;
		this.health = health;
		this.power = power;
	}
	setDamage(damage) {
		this.health -= damage;
	}
	hit(enemy: IFighter, point) {
		enemy.setDamage(point * this.power)
	}
};

class ImprovedFighter extends Fighter {
	doubleHit(enemy, point: number) {
        this.hit(enemy, point * 2)
	}
}
function fight(fighter: IFighter, improvedFighter: IFighter, ...point: number[]): void {
	point = (!!point[0].forEach)? point[0]: point;
	if (i >= point.length) { i = 0 };
	if (!((fighter.health > 0) && (improvedFighter.health > 0))) {
		let winner: IFighter = (fighter.health > 0)? fighter: improvedFighter;
		let loser: IFighter = (fighter.health <= 0)? fighter: improvedFighter;
		return statistics(winner, loser, round)
	};
	
	//console.log('lap#' + round);
	round++;
	
	if (round % 2 == 0) {
		fighter.hit(improvedFighter, point[i]);
	} else {
		improvedFighter.doubleHit(fighter, point[i]);
	}
	
	i++;
	fight(fighter, improvedFighter, point); 
  
}

function statistics(winner: IFighter, loser: IFighter, round: number): void {
  console.log(`Congratulations!!!
  In ${round} round - ${winner.name} is win!
  *******************************
  Statistic:
  1. ${winner.name}: ${winner.health}
  2. ${loser.name}: ${loser.health}`)
}


let fighter = new Fighter ("Maximus", 1, 150);
let improvedFighter = new ImprovedFighter("Spartacus", 2, 110);
let round = 0;
let i = 0;
fight(fighter, improvedFighter, 4, 1, 9, 5, 2);