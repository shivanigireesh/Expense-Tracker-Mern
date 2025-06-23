const { createExpense, deleteExpense, getCategoryExpense, getAllExpenses, emailSender } = require('../controller/expenseController');

const router = require('express').Router();

router.post('/expenses/addExpense',createExpense)
router.post('/expenses/deleteExpense',deleteExpense)
router.get('/expenses/categoryExpense',getCategoryExpense)
router.post('/expenses/allExpenses',getAllExpenses)
router.post('/expenses/sendEmail',emailSender);

module.exports = router;