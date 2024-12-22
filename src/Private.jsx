import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading) {
     return <div className='text-center text-gray-700 text-3xl'> <span className="loading loading-ring loading-lg text-lime-600"></span> </div>
    }

    if(user) {
        return children
    }
    

    return (
        <div> 
         <Navigate to="/login"> </Navigate>
         </div>
    );
};

export default Private;