import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';

const Sidebar = ({ itens, add, view }) => {
  return (
    <div className="sidebar">
      {itens.map((pakomon, i) => {
        return (
          <div onClick={() => view()} key={i} className="sidebar__item">
            <img src={pakomon.sprites.front_default} alt="" />
          </div>
        );
      })}
      <Button onClick={() => add()} icon={<img src={plusIcon} alt="+" />} />
    </div>
  );
};

export default Sidebar;
