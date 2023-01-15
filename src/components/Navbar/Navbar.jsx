import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
  const [activeSection, setActiveSection] = useState(-1);
  const [viewPhoneBar, setViewPhoneBar] = useState(false);
  const { filtering } = useStateContext();

  const handleClick = (index, section) => {
      setActiveSection(index);
      filtering(section);
  };

  return (
    <>
      <div className='app__navbar'>     
        <Link
          to="/"
          onClick={ () => setActiveSection(-1)}
          className={ 
            activeSection === -1 ?
            'app__navbar-section active' : 
            'app__navbar-section'
          }
        >
          {
            activeSection === -1 ?
            <AiFillHome className='icon' /> :
            <AiOutlineHome className='icon' />
          }
          <h3>Home</h3>
        </Link>
        {
          sections.map((section, index) => (
            <Link 
              key={ section }
              to={ `/sections/` }
              onClick={ () => handleClick(index, section) }
              className={ 
                activeSection === index ?
                'app__navbar-section active' : 
                'app__navbar-section'
              }
            >
              <img src={ logos[index] } alt="logo" />
              <h4>{ section }</h4>
            </Link>
          ))
        }
      </div>
      {
        viewPhoneBar ?
        <AiOutlineCloseCircle 
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
              to="/Sections/[slug]"
              onClick={ () => {
                setViewPhoneBar(false);
                setActiveSection(index);
              }}
              className={ 
                activeSection === index ?
                'app__navbar-section active' : 
                'app__navbar-section'
              }
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