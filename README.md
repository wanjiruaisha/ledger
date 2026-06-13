# Expense Tracker

## Overview

Expense Tracker is a JavaScript-based web application that helps users record, organize, and monitor their daily expenses. Users can add expenses, categorize spending, filter records by category, calculate total spending, and store their data using local storage for persistence.

This project demonstrates the use of Object-Oriented Programming (OOP), functional programming concepts, destructuring, the spread and rest operators, local storage, and unit testing with Jest.

---

## Features

* Add new expenses with description, amount, and category
* View all recorded expenses
* Remove expenses from the list
* Calculate total daily expenses
* Filter expenses by category
* Persist data using Local Storage
* Responsive user interface
* Unit testing with Jest

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Local Storage API
* Jest
* Git & GitHub
* GitHub Pages

---

## Object-Oriented Programming Concepts

### Expense Class

Represents a single expense item containing:

* Description
* Amount
* Category
* Unique ID

### ExpenseTracker Class

Manages all expense operations including:

* Adding expenses
* Removing expenses
* Filtering expenses
* Calculating total expenses

---

## Functional Programming Concepts

The project utilizes:

### Map

Used to display expense records.

### Filter

Used to:

* Remove expenses
* Filter expenses by category

### Reduce

Used to calculate total expenses.

### Destructuring

Used to extract object properties efficiently.

### Spread Operator

Used when updating the expenses array.

### Rest Operator

Used to support adding multiple expenses simultaneously.

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/wanjiruaisha/ledger.git
```

2. Navigate into the project folder

```bash
cd expense-tracker
```

3. Install project dependencies

```bash
npm install
```

4. Run the application

Open the `index.html` file in your browser.

---

## Running Tests

Install Jest if dependencies are not installed:

```bash
npm install
```

Run tests:

```bash
npm test
```

---

## Usage

1. Enter an expense description.
2. Enter the expense amount.
3. Select a category.
4. Click **Add Expense**.
5. View expenses in the list section.
6. Delete expenses using the delete button.
7. Filter expenses using the category dropdown.
8. View the automatically calculated total expenses.

---

## Project Structure

```text
expense-tracker/
│
├── index.html
├── styles.css
├── script.js
├── expenseTracker.test.js
├── package.json
└── README.md
```

---

## Future Improvements

* Edit existing expenses
* Monthly and yearly expense reports
* Charts and visual analytics
* Export expense data to CSV
* User authentication
* Budget planning and notifications

---
## Contribution

Contributions, issues, and feature requests are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "feat: add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## Collaboration

Collaborators and reviewers are welcome to provide feedback, suggest improvements, and contribute new features to enhance the application.

## Author

Aisha Wanjiru

---

## License

This project is licensed under the MIT License.
