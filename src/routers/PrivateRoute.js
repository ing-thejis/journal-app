import React from 'react';

import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    children
}) => {
    
    return (
    	<>
    		{
    			isAuthenticated 
    			? children 
    			: <Navigate to="/auth/login" />
    		}
    	</>
    )
    // (
    //     <Route { ...rest }
    //         component={ (props) => (
    //             ( isAuthenticated )
    //                 ? ( <Component { ...props } /> )
    //                 : ( <Navigate to="/auth/login" /> )
    //         )}
        
    //     />
    // )
}
