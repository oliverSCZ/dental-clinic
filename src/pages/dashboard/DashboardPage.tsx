import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const DashboardPage:FC= () => {
  return (
    <Box component='main'>
    <Typography variant='h1' mb='5'>Gestion de clinica dental</Typography>
    <Typography variant='h2' mb='5'>Ve un resumen de la jornada</Typography>
  </Box>
  )
}
