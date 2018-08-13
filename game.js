import * as Building from "./Building.js"
import { Resources } from "./Resources.js"

var reeds = new Resources(1, "Reeds");
var reedCollector = new Building(1, "Reed Collector", 1, 1, 1, 1.1);

function buy1() {
	reedCollector.buy(1);
	document.getElementById('collectors').innerHTML = reedCollector.amount;
	document.getElementById('collectorCost').innerHTML = reedCollector.currentCost;
}

function buy10() {
	reedCollector.buy(10);
	document.getElementById('collectors').innerHTML = reedCollector.amount;
	document.getElementById('collectorCost').innerHTML = reedCollector.currentCost;
}

function collectReeds(number) {
	reeds.updateAmount(number);
	document.getElementById('reeds').innerHTML = reeds.amount;
}


window.setInterval(function() {
	collectReeds(reedCollector.currentRate);
}, 1000);
