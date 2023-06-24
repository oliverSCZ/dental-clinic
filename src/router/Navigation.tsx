import {FC} from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, DashboardPage, RegisterPage, ClientsPage, EmployeesPage, QuotesPage } from '../pages'
import { MainLayout } from '../layouts/MainLayout'

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
        <Route path='employees' element= { <EmployeesPage/> }/>
        <Route path='quotes' element= { <QuotesPage/> }/>
      </Route>
      
    </Routes>
  )
}
