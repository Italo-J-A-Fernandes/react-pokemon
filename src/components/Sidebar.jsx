import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';

const Sidebar = ({ itens, add }) => {
  return (
    <div className="sidebar">
      {itens.map((pakomon) => {
        return (
          <div key={pakomon} className="sidebar__item">
            ?
          </div>
        );
      })}
      <Button onClick={() => add()} icon={<img src={plusIcon} alt="+" />} />
    </div>
  );
};

export default Sidebar;
