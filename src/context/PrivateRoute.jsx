import React, { Children, use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {users, loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
if(users && users?.email){
    return children;
}
return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoute;