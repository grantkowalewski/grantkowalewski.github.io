import * as Building from './Building.js'
import * as Resources from './Resources.js'

var reeds = new Resources(1,"Reeds");
var reedCollector = new Building(1, "Collector", 1, 1, 1, 1.1);
console.log(reeds + " " + reedCollector);

function buy1() {
	reedCollector.amount += 1;
	reedCollector.currentRate += reedCollector.baseRate;
	document.getElementById('collectors').innerHTML = reedCollector.amount;
	document.getElementById('collectorCost').innerHTML = reedCollector.currentCost;
}

function buy10() {
	reedCollector.amount += 10;
	reedCollector.currentRate += reedCollector.baseRate*10; 
	document.getElementById('collectors').innerHTML = reedCollector.amount;
	document.getElementById('collectorCost').innerHTML = reedCollector.currentCost;
}

function collectReeds(number) {
	reeds.amount += number;
	document.getElementById('reeds').innerHTML = reeds.amount;
}


window.setInterval(function() {
	collectReeds(reedCollector.currentRate);
}, 1000);
