import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()


    if(loader){
        return <p>Loading......</p>
    }
  

    if(!user?.email){
        return <Navigate state= {location.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;