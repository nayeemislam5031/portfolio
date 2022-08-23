
import { NavLink } from "react-router-dom";
import {BiMenuAltRight} from 'react-icons/bi'
import "./Menu.css";
import { useState } from "react";
import { navbar } from "../../Data/Navbar";


const Menu = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [link] = useState(navbar);
  return (
    <>
      <div className="menu-btn">
        <button onClick={() => setIsOpen(!isOpen)}>
          <BiMenuAltRight />
        </button>
      </div>

      <header className={`${isOpen ? "header open" : "header"}`}>
        <nav>
          <ul>
            {
              link.map((link) => {
                const {id,title,url} = link;

                return (
                  <li key={id} onClick={() => setIsOpen(false)}>
                    <NavLink className="navlink"  to={url} end>
                      {title}
                    </NavLink>
                  </li>
                );
              })
            }
            

            
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Menu