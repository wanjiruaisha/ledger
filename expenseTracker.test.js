const { Expense, ExpenseTracker } = require("./script");

describe("Expense Tracker Tests", () => {
  test("adds an expense", () => {
    const tracker = new ExpenseTracker();
    const expense = new Expense("Lunch", 200, "Food");

    tracker.addExpense(expense);

    expect(tracker.expenses.length).toBe(1);
    expect(tracker.expenses[0].description).toBe("Lunch");
  });

  test("removes an expense", () => {
    const expense = new Expense("Bus fare", 100, "Transport");
    const tracker = new ExpenseTracker([expense]);

    tracker.removeExpense(expense.id);

    expect(tracker.expenses.length).toBe(0);
  });

  test("calculates total expenses", () => {
    const tracker = new ExpenseTracker([
      new Expense("Lunch", 200, "Food"),
      new Expense("Fare", 100, "Transport")
    ]);

    expect(tracker.getTotalExpenses()).toBe(300);
  });

  test("filters expenses by category", () => {
    const tracker = new ExpenseTracker([
      new Expense("Lunch", 200, "Food"),
      new Expense("Shoes", 1500, "Shopping")
    ]);

    const filtered = tracker.filterByCategory("Food");

    expect(filtered.length).toBe(1);
    expect(filtered[0].category).toBe("Food");
  });
});