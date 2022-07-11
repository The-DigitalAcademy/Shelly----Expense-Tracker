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
var expenseE1 = document.querySeclector('#expense');
var transtions = doc