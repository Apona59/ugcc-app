import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Execs from "./views/Execs";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Links from "./views/Links";

import Header from "./components/Header";
import MyForm from './components/MyForm';
import Footer from './components/Footer';
import Constitution from './components/Constitution';

function App() {

  return (
    
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/MyForm" element={<MyForm/>} />
        <Route path='/Execs'element={<Execs/>}/>
        <Route path='/Constitution'element={<Constitution/>}/>
        <Route path='/Profile'element={<Profile/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Links'element={<Links/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;