var stateObj = {
    balance: 1000,
    income: 400,
    expense: 100,
    transactions:[
        {name: 'Salary', amount: 5000, type: 'income'},
        {name: 'Buy Grocery', amount: 50, type: 'expense'},
        {name: 'Buy Guitar', amount: 500, type: 'expense'}
    ]
}

var balanceEl = document.querySeclector('#balance');
var incomeEl = document.querySeclector('#income');
var expenseEl = document.querySeclector('#expense');
var transactionsEl = document.querySeclector('#transactions');
var incomeBtnEl = document.querySeclector('#incomeBtn');
var expenseBtnEl = document.querySeclector('#expenseBtn');
var nameInputEl = document.querySeclector('#name');
var accountInputEl = document.querySeclector('#amount');