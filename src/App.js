import React ,{useState}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ContactPage from './components/ContactPage'; // 
import useToken from './components/useToken';
import Analysis from './components/analysis';
import Homepage from './components/homepage';
import ExpenseForm from './components/ExpenseForm';
function App() {

  const { token, removeToken, setToken } = useToken();
  const[user,setUser]=useState("")
  const [expenses, setExpenses] = useState([]);
  function addExpense(newExpense){
    const updateExpense = [...expenses,newExpense]
    setExpenses(updateExpense)
  }
  return (
    <Router>
        {!token && token!=="" &&token!==undefined? 
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm setToken={setToken} setUser={setUser}/>} />
            <Route path="/signup" element={<SignUpForm setToken={setToken} />} />
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="/get-started" element={<SignUpForm />} />
          </Routes>
        // <LoginForm  setToken={setToken}/>  
        :(
          <div>
        <Routes>
          <Route path='/homepage' element={<Homepage setToken={setToken} removeToken={removeToken} user={user} setExpenses={setExpenses} expenses={expenses}/>}/>
          <Route path='/analysis' element={<Analysis user={user}/>}/>
          <Route path='/expenseform' element={<ExpenseForm addExpense={addExpense} user={user}/>}/>
        </Routes>
      </div>
        )
      }

      <p>hello world</p>
    </Router>
  );
}

export default App;
