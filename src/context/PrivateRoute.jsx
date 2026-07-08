import React, { Children, use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {users, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location);
    
    if(loading){
        return <Loading></Loading>
    }
if(users && users?.email){
    return children;
}
return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;