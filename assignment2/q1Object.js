/**
 * 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and
 * it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
 * Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
 */

const personAccount = {
  firstName: "Mang",
  lastName: "Touthang",
  incomes: { monthly_salary: 100, bonus: 100, extraIncome: 100 },
  expenses: { food: 50, TA: 50 },

  totalIncome: function () {
    let incSum = 0;
    for (let income in this.incomes) {
      incSum += this.incomes[income];
    }
    console.log(`My Total Income : ${incSum} rs/-`);
    return incSum;
  },

  totalExpense: function () {
    let exSum = 0;
    for (let exp in this.expenses) {
      exSum += this.expenses[exp];
    }
    console.log(`My total expenditure: ${exSum}`);
    return exSum;
  },

  accountInfo: function () {
    console.log(`
        Account details - 
        Account holder's name - ${this.firstName} ${this.lastName}
        
    `);
  },

  addIncome: function () {
    // this.incomes.title = value;
    this.incomes.dailyAllowance = 50;
  },

  addExpense: function () {
    this.expenses.foodSnakes = 50;
  },

  accountBalance: function () {
    let balance = this.totalIncome() - this.totalExpense();
    console.log(` Account balance- ${balance}`);
    return balance;
  },
};

console.log(personAccount);
personAccount.totalIncome();
personAccount.totalExpense();
personAccount.accountInfo();
// personAccount.addIncome("dailyAllowance", 50);
personAccount.addIncome();
personAccount.addExpense();
console.log(personAccount.incomes);
console.log(personAccount.expenses);
personAccount.totalExpense();

personAccount.accountBalance();
