import { FC } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { QuoteCard } from '../../components';
import { useNavigate } from 'react-router-dom';

export const QuotesPage:FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <Box display='flex' alignItems='center' justifyContent='space-between' mb={5}>
      <Typography variant='h1' >Gestiona tus citas</Typography>
      <Button onClick={() => navigate('/')}>Agregar Consulta</Button>
    </Box>

      <Grid container spacing={ 3 }>
        {
          [1,2,3,4,5].map((quote, index) => (
            <QuoteCard key={ index} />
           ))          
        }

      </Grid>
    </>
  )
}
