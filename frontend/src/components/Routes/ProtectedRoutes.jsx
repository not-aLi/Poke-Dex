import React, { useContext } from 'react'
import { PokemonContext } from '../States/StateContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const {isAuthenticated} = useContext(PokemonContext);
 
    if(!isAuthenticated){
        return <Navigate to="/" replace/>
    }
  return children;
}

export default ProtectedRoutes