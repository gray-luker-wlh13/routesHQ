import React from 'react';
import Add from './Add';

const NewRoutes = (props) => {
    return (
        <div className="newRoutes">
            {props.myRoutes.map((e, i) => {
                return (
                    <Add 
                        key={i}
                        routeList={e}
                        addFn={props.addFn}
                    />
                )
            })}
        </div>
    )
}

export default NewRoutes;