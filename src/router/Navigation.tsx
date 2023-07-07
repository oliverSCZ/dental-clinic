import {FC} from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, DashboardPage, RegisterPage, ClientsPage, EmployeesPage, QuotesPage } from '../pages'
import { MainLayout } from '../layouts/MainLayout'
import { NewClientPage } from '../pages/clients/NewClientPage';
import { NewEmployeePage } from '../pages/employees/NewEmployeePage';

export const Navigation:FC = () => {
  return (
    <Routes>
      {/* RUTAS DE LA AUTENTICACION */}

      <Route path='/auth/login' element= { <LoginPage/> }/>
      <Route path='/auth/register' element= { <RegisterPage/> }/>

      {/* RUTAS PROTEGIDAS */}
      <Route path='/' element={ <MainLayout/>}>
        <Route index element= { <DashboardPage/> }/>
        <Route path='clients' element= { <ClientsPage/> }/>
        <Route path='clients/new' element= { <NewClientPage/> }/>

        <Route path='employees' element= { <EmployeesPage/> }/>
        <Route path='employees/new' element= { <NewEmployeePage/> }/>

        <Route path='quotes' element= { <QuotesPage/> }/>
        <Route 
          path='quotes/:id' 
          element= { <QuotesPage/> }
        />      
        </Route>
      </Routes>
  )
}
