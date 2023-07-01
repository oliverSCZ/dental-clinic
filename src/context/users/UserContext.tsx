import { createContext } from 'react'
import { Patient } from '../../interfaces';

interface ContextProps {
    isLoading: boolean;
    patients: Patient[];
    createNewPatient: ( newPatient: {ci: number; nombre: string; apellidos: string; historial_clinico: string}) => Promise<void>;
    deletePatient: ( id: number) => Promise<void>;
}

export const UserContext = createContext( {} as ContextProps );