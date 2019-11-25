import React from "react";
import Route from "./Route";

const MyClimbs = props => {
  let myRoutes = props.myRoutes.map((route, i) => {
    return (
      <Route 
       key={i} 
       index={i}
       route={route} 
       saveFn={props.saveFn} 
       removeFn={props.removeFn} 
       id={route.id}
       grade={route.grade}
       />);
  });
  return (
    <div className="myClimbs">
      {myRoutes}
     </div>
    );
};

export default MyClimbs;
