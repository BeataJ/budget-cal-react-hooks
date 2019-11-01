import React from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const initialExpenses = [
  {id:1, charge: 'rent', amount: 1600},
  {id:2, charge: 'car payment', amount: 400},
  {id:3, charge: 'credit card bill', amount: 1200}
]

function App() {
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
