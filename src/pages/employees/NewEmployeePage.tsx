import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React from 'react'
import { useContext, useState, FormEvent } from 'react';
import { UserContext } from '../../context';
import { generarContrasena } from '../../helpers';

export const NewEmployeePage = () => {
const { patients } = useContext(UserContext);

const [newEmployee, setNewEmployee] = useState({
  ci: 0,
  nombre: '',
  apellidos:'',
  descripcion:'',
  password: '',
  rol:2,
  // paciente: 0,
  // procedimiento: 0,
  // doctor: 0
})

const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setNewEmployee({...newEmployee, [e.target.name] : e.target.value});
}

const handleFormSelect = (e: SelectChangeEvent<number>) => {
  setNewEmployee({...newEmployee, [e.target.name] : e.target.value});
}

const handleSubmit = (e:FormEvent) => { 
  e.preventDefault();
}

  return (
    <Box>
      <Typography variant='h1' textAlign='center'>Agrega un nuevo empleado</Typography>
      <Box 
        component='form' 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth:'600px',
            margin: '2rem auto',
            rowGap: '1rem',
            bgcolor: 'secondary.main',
            padding:'3rem 4rem',
            borderRadius: '15px',
        }}
        onSubmit={handleSubmit} 
      >
        <Typography variant='h2' mb={3}>Formulario nuevo empleado</Typography>

        <TextField
          type='number'
          label='CI'
          name='ci'
          value={newEmployee.ci}
          onChange={handleForm}
        />
        <TextField
          type='text'
          label='Nombre paciente'
          value={newEmployee.nombre}
          name='nombre'
          onChange={handleForm}
        />
        <TextField
          type='text'
          label='Apellidos paciente'
          value={newEmployee.apellidos}
          name='apellidos'
          onChange={handleForm}
        />
        <TextField
          type='text'
          multiline={true}
          rows={4}
          label='Agrega la descripcion'
          name='descripcion'
          value={newEmployee.descripcion}
          onChange={handleForm}
        />
        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <TextField
            type='text'
            label='Contraseña'
            name='password'
            value={newEmployee.password}
            onChange={handleForm}
            disabled
          />
          <Button onClick={ () => setNewEmployee({...newEmployee, password: generarContrasena()})}>Generar contrasena</Button>
        </Box>
        <FormControl fullWidth>
          <InputLabel>Seleccione el rol</InputLabel>
            <Select
            name='rol'
            value={newEmployee.rol}
            label='Seleccione el rol'  
            onChange={handleFormSelect}        
            >
            <MenuItem value={1}>Administrador</MenuItem>
            <MenuItem value={2}>Empleado</MenuItem>
          </Select>
        </FormControl>
        {/* <FormControl fullWidth>

          <InputLabel>Seleccione el Paciente</InputLabel>
            <Select
            //value={age}
            label='Seleccione el Paciente'            //onChange={handleChange}
            >
              {
                patients.map(patient =>(
                  <MenuItem value={patient.id}>{patient.nombre}</MenuItem>
                ))
              }

            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>


        <FormControl fullWidth>
          <InputLabel>Seleccione el Doctor</InputLabel>
            <Select
            //value={age}
            label='Seleccione el Doctor'            //onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>


        <FormControl fullWidth>
          <InputLabel >Seleccione el Procedimiento</InputLabel>
            <Select
            //value={age}
            label='Seleccione el Procedimiento'            //onChange={handleChange}
            >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl> */}


        <Button type='submit'>Agregar Empleado</Button>
        </Box>
    </Box>
  )
}
