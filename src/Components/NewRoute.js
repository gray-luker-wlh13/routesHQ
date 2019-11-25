import React from 'react';
import Add from './Add';

const NewRoutes = (props) => {
    return (
        <div className="newRoutes">
            <Add routeList={props.myRoutes} addFn={props.addFn} getFn={props.getFn}/>
        </div>
    )
}

export default NewRoutes;