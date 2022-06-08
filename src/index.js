import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Branches from './components/Branches'
import BranchDetails from './components/BranchDetails'
import LogoutPage from './components/LogoutPage'
import { AuthProvider } from './components/contexts/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path="/branch" element={<Branches />}/>
            <Route exact path="/branch/:Id" element={<BranchDetails />}/>
            <Route exact path="/logout" element={<LogoutPage/>}/>
        </Routes>
            
        </BrowserRouter>
    </AuthProvider>
    
    
);
