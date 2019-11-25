import React from "react";
import Route from "./Route";
import Filter from './Filter';

const MyClimbs = props => {
  let matchObj = { V0: 0, V1: 1, V2: 2, V3: 3, V4: 4, V5: 5, V6: 6, V7: 7, V8: 8, V9: 9, V10: 10, V11: 11, V12: 12, V13: 13, V14: 14, V15: 15, V16: 16};
  let filterNum = props.filterNum;
  let mappedObj = props.myRoutes.reduce((acc, curr, i) => {
    for(let key in matchObj) {
      if(curr.grade === key){
        curr.numGrade = matchObj[key]
      }
    }
    if(curr.numGrade <= filterNum){
      acc.push(curr)
    }
    return acc
  }, [])

  let myRoutes = mappedObj.map((route, i) => {
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
      <div id="filter">
        <Filter getFn={props.getFn} setFilterNum={props.setFilterNum}/>
      </div> 
     </div>
    );
};

export default MyClimbs;
