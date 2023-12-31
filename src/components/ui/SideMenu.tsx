import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FC } from 'react';
import { HiOutlineLogin } from 'react-icons/hi'
import { MenuOptions } from '.';
import { ADMIN_MENU } from '../../constants';

export const SideMenu: FC= () => {
  return (
    <Box 
      component='nav'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '350px',
        bgcolor: 'secondary.main',
        height: '95vh',
        padding: '1rem',
        borderRadius: '1rem',
        boxShadow: '0px 5px 15px rgba(0,0,0,0.5)'
      }}
    >
      <Box padding='2rem'>
        <Typography variant='h2'>Oliver Coimbra</Typography>
        <Typography variant='subtitle2'>Administrador</Typography>
      </Box>
      {/* LISTADO DE OPCIONES */}
      <MenuOptions options={ ADMIN_MENU} />

      <Box flex={ 1 } />
      <List >
        <ListItem>
          <ListItemButton
            sx={{
              mb:'.5rem',
              padding:'.75rem 1.5rem',
              borderRadius:'.75rem',
              transitionDuration:'.3s',
              transitionProperty:'background color',
              ':hover':{
                bgcolor:'red',
              }
            }}
            >
            <ListItemIcon >
              <HiOutlineLogin/>
            </ListItemIcon>
            <ListItemText primary='Cerrar Sesion' />
          </ListItemButton>
        </ListItem>
      </List>
      
    </Box>
  )
}
