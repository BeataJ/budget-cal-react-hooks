import React, { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];

// console.log(initialExpenses);

function App() {
  // ******** state values *************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({show:false})
  //  ********** functionality *********

  // handle charge
  const handleCharge = e => {
    // console.log(`charge: ${e.target.value}`);

    setCharge(e.target.value);
  };

  // handle amount
  const handleAmount = e => {
    // console.log(`amount: ${e.target.value}`);

    setAmount(e.target.value);
  };

  // handle alert
  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text});
    setTimeout(() => {
      setAlert({show:false});
    }, 3000)
  }

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0) {
      const singleExpense = {id:uuid(), charge, amount};
      setExpenses([...expenses, singleExpense]);
      handleAlert({type: 'success', text: 'item added'});
      setCharge('');
      setAmount('');
    } else {
      // handle alert called
      handleAlert({type: 'danger', text: `charge can't be empty value and amount value has to be bigger then zero`})
    }
  };
  // clear all items
  const clearItems = () => {
    console.log('cleared all items');
  }
  // handle delete
  const handleDelete = (id) => {
    console.log(`item deleted: ${id}`)
  }
  // handle edit
  const handleEdit = (id) => {
    console.log(`item edited: ${id}`)
  }

  return (
    <>
    {alert.show &&  <Alert type={alert.type}  text={alert.text}/> }
      
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
