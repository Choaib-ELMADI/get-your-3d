import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiCloseCircleFill } from 'react-icons/ri';

import './Navbar.css';
import { images } from '../../constants/index';
import { useStateContext } from '../../context/StateContext';

const sections = ["Solidworks", "Catia", "AutoCad", "Fusion"];
const logos = [ 
  images.solidworks, 
  images.catia, 
  images.fusion, 
  images.autocad 
];



const Navbar = () => {
  const [viewPhoneBar, setViewPhoneBar] = useState(false);
  const { filtering, setAtHome } = useStateContext();

  const handleClick = (section) => {
      filtering(section);
      setAtHome(false);
  };

  return (
    <>
      <div className='app__navbar'>     
        <Link
          to="/"
          onClick={ () => {
            setAtHome(true); 
          }}
          className="app__navbar-section home-section"
        >
          <AiFillHome className='icon' />
          <h3>Home</h3>
        </Link>
        {
          sections.map((section, index) => (
            <Link 
              key={ section }
              to={ `/sections/` }
              onClick={ () => handleClick(section) }
              className="app__navbar-section"
            >
              <img src={ logos[index] } alt="logo" />
              <h4>{ section }</h4>
            </Link>
          ))
        }
      </div>
      {
        viewPhoneBar ?
        <RiCloseCircleFill
          className='open__phone-menu'
          onClick={ () => setViewPhoneBar(!viewPhoneBar) }
        /> :
        <BiMenuAltRight 
          className='open__phone-menu'
          onClick={ () => setViewPhoneBar(!viewPhoneBar) }
        />
      }
      { 
        viewPhoneBar &&
        <div className="app__navbar-phone">
        {
          sections.map((section, index) => (
            <Link 
              key={ section }
              to='/Sections/'
              onClick={ () => {
                handleClick(section)
                setViewPhoneBar(false);
              }}
              className="app__navbar-section"
            >
              <img src={ logos[index] } alt="logo" />
              <h4>{ section }</h4>
            </Link>
          ))
        }
        </div>
      }
    </>
  );
}

export default Navbar;