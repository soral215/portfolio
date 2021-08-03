import React, { useState, useReducer } from "react";
import './HeadComponent.scss'
import SideComponent from "../SideComponent/SideComponent";
import {useHistory} from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const HeadComponent = () => {

  const [show, isShow] = useState(false);
  const [number, dispatch] = useReducer(reducer, 0);
  const history = useHistory();

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'});
  };

  const onDecrease = () => {
    dispatch({type: 'DECREMENT'});
  };

  return (
    <>
      {/*<SideComponent*/}
      {/*  show = {show}*/}
      {/*/>*/}
      <span className={`head`}>


      <span>
        <button className={"menu-btn"}
                onClick={() => isShow(!show)}
        >
        </button>
      </span>

      <span onClick={() => history.push('/')} >
       Andy Moon's portfolio {number}
      </span>

      <span>
        <button onClick={onIncrease}/>
        <button onClick={onDecrease}/>
      </span>

    </span>
    </>
  );
};

export default HeadComponent;
