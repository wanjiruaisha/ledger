class Expense {
  constructor(description, amount, category) {
    this.id = Date.now();
    this.description = description;
    this.amount = Number(amount);
    this.category = category;
  }
}

addExpense(expense) {
    this.expenses = [...this.expenses, expense];
    return this.expenses;
  }

  addMultipleExpenses(...expenses) {
    this.expenses = [...this.expenses, ...expenses];
    return this.expenses;
  }
 removeExpense(id) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
    return this.expenses;
  }

