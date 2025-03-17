import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/User/UserRegister';
import EmployeeTable from './components/Admin/EmployeeTable';
import Logout from './components/Main/Logout';
import AddFood from './components/Admin/AddFood';
import ErrorPage from './components/Main/ErrorPage';
import Main from './components/Main/Main';
import AdminLogin from './components/Admin/AdminLogin';
import AdminRegister from './components/Admin/AdminRegister';
import UserProduct from './components/User/UserProduct';
import UserHome from './components/User/UserHome';
import AdminBill from './components/Admin/AdminBill';
import UserCart from './components/User/UserCart';
import { CartProvider } from 'react-use-cart';
import UserLogin from './components/User/UserLogin';
import React, { Suspense } from 'react';
import CreateUser from './components/Admin/CreateUser';
import UpdateUser from './components/Admin/UpdateUser';
import Read from './components/Admin/Read';
import AboutUs from './components/User/AboutUs';
import AdminLogout from './components/Admin/AdminLogout';
import View from './components/User/View';
const LazyAdminProduct = React.lazy(() => import('./components/Admin/AdminProduct'))


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/userlogin" element={<UserLogin />}></Route>        
        <Route path="/adminlogin" element={<AdminLogin />}></Route>        
        <Route path="/userregister" element={<Register/>}></Route>
        <Route path="/adminregister" element={<AdminRegister/>}></Route>
        <Route path='/createuser' element={<CreateUser/>}/>
        <Route path='/updateuser/:id' element={<UpdateUser/>}/>
        <Route path='/readuser/:id' element={<Read/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path="/home" element={<UserHome />}></Route>
        <Route path='/logout' element={<Logout />} />
        <Route path='/adminlogout' element={<AdminLogout />} />
        <Route path='/addfood' element={<AddFood />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/employeeTable" element={<EmployeeTable />}></Route>
        <Route path="/adminbills" element={<AdminBill />}></Route>
        <Route path="/adminproduct" element={<Suspense fallback={<div>Loading...</div>}><LazyAdminProduct></LazyAdminProduct></Suspense>}></Route>
        <Route path="/userproduct" element={<CartProvider><UserProduct /></CartProvider>}></Route>
        <Route path="/usercart" element={<CartProvider><UserCart /></CartProvider>}></Route>        
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>

      </Routes>
      </BrowserRouter>
    </>      

  );
}

export default App;
