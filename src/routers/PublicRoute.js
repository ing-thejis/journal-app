import React from 'react';

import { Route, Navigate } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    children
}) => {

    return (
    	<>
    		{
    			isAuthenticated
    			? <Navigate to="/" />
    			: children
    		}
        {/*<Route { ...rest }
            component={ (props) => (
                ( !isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Navigate to="/" /> )
            )}
        
        />*/}
        </>
    )
}
