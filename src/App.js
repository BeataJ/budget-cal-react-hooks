import React from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

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
