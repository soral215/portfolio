import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import './SideComponent.scss'

const SideComponent = ({ show }) => {

  const sideMenu =[
    {
      name: 'history',
      path: '/history'
    },
    {
      name: 'portfolio',
      path: '/portfolio'
    },
  ]

  const history = useHistory()

  return (
    <span className={`side ${show}`}>
      <ul>
        {
          sideMenu.map(tab => (
            <li className={tab.name}
                onClick={() => history.push(`${tab.path}`)}
            >
              {tab.name}
            </li>
          ))
        }
      </ul>
    </span>
  );
};

export default SideComponent;