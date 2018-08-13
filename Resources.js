export class Resources {
	constuctor(id, name) {
		this.id = id;
		this.name = name;
		this.amount = 0;
	}

	updateAmount (amount) {
		this.amount += amount;
	}
}