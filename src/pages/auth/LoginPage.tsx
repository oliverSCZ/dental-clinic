import { Box, Typography } from "@mui/material"
import { LoginForm } from "../../components"

export const LoginPage = () => {
  return (
    <Box 
      component='main'
      sx={{
          padding:'2rem 0',
          width: { xs:'90%', md:'50%', lg:'40%' },
          margin:'auto',
          display:'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center'
      }}
    >
      <Typography textAlign='center' variant="h1">Iniciar Sesion</Typography>
      <Typography textAlign='center' mb={ 4 }>Comienza a gestionar tu clinica Dental</Typography>

      {/* FORMULARIO */}
      <LoginForm />
    </Box>
  )
}
