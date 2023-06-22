import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

export const LoginForm = () => {

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  })

  // TODO: MANEJAR ESTADO DEL FORMULARIO

  return (
    <Box component='form' 
      sx={{
        display:'grid', 
        gap:'1rem',
        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
        padding: { xs:'3rem 1rem', md:'3rem'},
        border: '1px solid rgba(0,0,0,0.3)',
        borderRadius: '1rem',
        }}>
      <TextField 
        label='Correo electronico'
        type='email' 
        placeholder='correo@example.com'
      />
      <TextField 
        label='Contraseña'
        type='password' 
        placeholder='Ingresa tu contraseña'
      />

      <Button type='submit'>Iniciar Sesion</Button>
    </Box>
  )
}
