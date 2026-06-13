class Expense {
  constructor(description, amount, category) {
    this.id = Date.now();
    this.description = description;
    this.amount = Number(amount);
    this.category = category;
  }
}

