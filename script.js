class Expense {
  constructor(description, amount, category) {
    this.id = Date.now();
    this.description = description;
    this.amount = Number(amount);
    this.category = category;
  }
}
 

class ExpenseTracker {
  constructor(expenses = []) {
    this.expenses = expenses;
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
    this.expenses = this.expenses.filter(
      expense => expense.id !== id
    );
    return this.expenses;
  }
}

 getTotalExpenses() {
    return this.expenses.reduce((total, { amount }) => total + amount, 0);
  }
filterByCategory(category) {
    if (category === "All") return this.expenses;
    return this.expenses.filter(expense => expense.category === category);
  }
}
// LocalStorage
function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}
// Browser logic
const tracker = new ExpenseTracker(loadExpenses());

const form = document.getElementById("expenseForm");
const list = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");
const filter = document.getElementById("filterCategory");

function displayExpenses(expenses = tracker.expenses) {
  list.innerHTML = "";

  expenses.map(({ id, description, amount, category }) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${description} - Ksh ${amount} (${category})</span>
      <button onclick="deleteExpense(${id})">Delete</button>
    `;

    list.appendChild(li);
  });

  totalDisplay.textContent = `Total: Ksh ${tracker.getTotalExpenses()}`;
}

function deleteExpense(id) {
  tracker.removeExpense(id);
  saveExpenses(tracker.expenses);
  displayExpenses();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  const expense = new Expense(description, amount, category);

  tracker.addExpense(expense);
  saveExpenses(tracker.expenses);
  displayExpenses();

  form.reset();
});

filter.addEventListener("change", function () {
  const filteredExpenses = tracker.filterByCategory(filter.value);
  displayExpenses(filteredExpenses);
});

displayExpenses();

// For Jest
if (typeof module !== "undefined") {
  module.exports = { Expense, ExpenseTracker };
}