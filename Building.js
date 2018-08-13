

export class Building {
	constructor(id, name, resource, baseRate, baseCost, costRatio) {
		this.id = id;
		this.name = name;
		this.amount = 0;
		this.resource = resource;
		this.baseRate = baseRate; 
		this.baseCost = baseCost;
		this.costRatio = costRatio;
		this.canBuy = false;
		this.currentCost = baseCost;
	}

	buyBuilding(qty) {
		var totalCost = buyRecurse(qty, this.currentCost, this.amount);
		this.amount += qty;
		updateRate();
		updateCost();
		
	}

	buyRecurse (qty, cost, amt) {
		Console.log(qty, cost, amt);
		if (qty = 1) {
			return cost;
		}
		else {
			var addCost = cost +(this.baseCost * Math.pow(this.costRatio, amt+1));
			Console.log (addCost);
			buyRecurse(qty-1, addCost);
		}
		

	}

	updateCost() {
		this.currentCost = this.baseCost * (Math.pow(costRatio, amount));
	}

	updateRate() {
		this.currentRate += this.baseRate * this.amount;
	}
}