import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom"
import './SideComponent.scss'

const SideComponent = ({ show, isShow }) => {

  // const [show, isShow] = useState(show);


  const sideMenu =[
    {
      name: 'history',
      path: '/history'
    },
    {
      name: 'portfolio',
      path: '/portfolio'
    },
    {
      name: 'portfolio',
      path: '/portfolio'
    },
  ]

  const history = useHistory()

  const onClickSidTab = (tab) => {
    history.push(`${tab}`)
    isShow(!show)
  }

  return (
    <span className={`side ${show}`}>
      <ul>
        {
          sideMenu.map(tab => (
            <li className={tab.name}
                onClick={() => onClickSidTab(tab.path)}
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