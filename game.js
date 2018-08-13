import { Building } from "./Building.js"
import { Resources } from "./Resources.js"

var reeds = new Resources(1, "Reeds");
var reedCollector = new Building(1, "Collector", 1, 1, 1, 1.1);
Console.log(reeds + " " reedCollector);

function buy1() {
	reedCollector.buyBuilding(1);
	document.getElementById('collectors').innerHTML = reedCollector.amount;
	document.getElementById('collectorCost').innerHTML = reedCollector.currentCost;
}

function buy10() {
	reedCollector.buyBuilding(10);
	document.getElementById('collectors').innerHTML = reedCollector.amount;
	document.getElementById('collectorCost').innerHTML = reedCollector.currentCost;
}

function collectReeds(number) {
	reeds.amount += number;
	document.getElementById('reeds').innerHTML = reeds.amount;
}


window.setInterval(function() {
	collectReeds(1);
}, 1000);
