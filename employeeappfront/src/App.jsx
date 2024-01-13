import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './ui-components/Login';
import EmployeeList from './ui-components/EmployeeList';
import Mainpage from './pages/Mainpage';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeForm from './ui-components/EmployeeForm';
import EmployeeItem from './ui-components/EmployeeItem';
import EmployeeView from './ui-components/EmployeeView';
import { AuthProvider } from './ui-components/AuthContext';
import PrivateRoute from './ui-components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/edit/:id" element={<EmployeeItem />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path="/view" element={<EmployeeView />} />
        <Route path="/admin" element={<PrivateRoute><Mainpage child={<AdminDashboard />} /></PrivateRoute>} />
        <Route path="/employee" element={<PrivateRoute><Mainpage child={<EmployeeDashboard />} /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;


