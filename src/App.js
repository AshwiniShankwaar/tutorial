import './App.css';
import UserData from './UserData.js';
import { useState } from 'react';
import Student from './Student';
// import Navbar from "./component/Navbar.js"; // Update import path for Navbar
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [data,setdata] = useState(0);

  function updateData(){
    setdata(data+1);
  }


  return (
    <div className="App">
      {/* <Navbar/> */}
      <h1>hello world</h1>
      <Router>
        <Link to="/login">Login</Link>
        <Route path="/login" component={Student} />
      </Router>
      <UserData name="ashwini" />
      <button onClick={updateData}>{data}</button>
      <Student name="checkPropData" email="example@gmail.com" />
    </div>
  );
}

export default App;
