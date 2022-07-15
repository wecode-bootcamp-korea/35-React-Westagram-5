import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <button className="goToMain">Instagram</button>
      </div>
      <input className="search-box" type="text" placeholder=" 검색" />
      <div className="icon-bar">
        <img
          className="icon-image"
          alt="icon_image"
          src="images/koodanhee/Main/home.png"
        />
        <img
          className="icon-image"
          alt="icon_image"
          src="images/koodanhee/Main/send.png"
        />
        <img
          className="icon-image"
          alt="icon_image"
          src="images/koodanhee/Main/add.png"
        />
        <img
          className="icon-image"
          alt="icon_image"
          src="images/koodanhee/Main/love.png"
        />
      </div>
    </nav>
  );
};

export default Nav;
