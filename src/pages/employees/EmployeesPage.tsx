import { Box, CircularProgress, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { UsersTable } from '../../components';
import { UserContext } from '../../context';

export const EmployeesPage:FC = () => {

  const { employees, isLoading, deleteEmployee } = useContext(UserContext);
  return (
    <Box component='main'>
      <Typography variant='h1' mb='5'>Gestiona tus empleados</Typography>
      {
        isLoading ? (
          <CircularProgress/>
        )
        :  (
        <UsersTable onDelete={deleteEmployee} users={ employees} />
          )
      }
      
    </Box>
  )
}
