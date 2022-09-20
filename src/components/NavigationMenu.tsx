import {
  ROUTER_PATH_BASE64,
  ROUTER_PATH_CRYPTO,
  ROUTER_PATH_HEX_TO_DEC,
  ROUTER_PATH_TIMESTAMP,
  ROUTER_PATH_TIMEZONE
} from "../utils/Router";
import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import styled from "styled-components";

const Nav = styled.nav<{
  mobileNav: boolean
}>`
  flex: 0 0 200px;

  @media(max-width: 768px){
    flex: 0 0 150px;
  }

  @media(max-width: 500px){
    display: ${props => props.mobileNav ? 'block' : 'none'};
  }
`;

const NavLi = styled.li<{
  selected: boolean
}>`
  background: ${props => props.selected ? '#eee' : 'transparent'};

  &:hover{
    background: #eee;
  }

  & a {
    display: block;
    cursor: ${props => props.selected ? 'default' : 'pointer'};
  }
`;

interface NavigationMenuProps{
  mobileNav: boolean;
}

const NavigationMenu = ({ mobileNav }: NavigationMenuProps): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Nav mobileNav={mobileNav}>
      <ul>
        <NavLi className="p-1" selected={pathname === `/${ROUTER_PATH_BASE64}`}>
          <Link to={ROUTER_PATH_BASE64}>Base 64</Link>
        </NavLi>
        <NavLi className="p-1" selected={pathname === `/${ROUTER_PATH_CRYPTO}`}>
          <Link to={ROUTER_PATH_CRYPTO}>Crypto</Link>
        </NavLi>
        <NavLi className="p-1" selected={pathname === `/${ROUTER_PATH_TIMESTAMP}`}>
          <Link to={ROUTER_PATH_TIMESTAMP}>Timestamp</Link>
        </NavLi>
        <NavLi className="p-1" selected={pathname === `/${ROUTER_PATH_TIMEZONE}`}>
          <Link to={ROUTER_PATH_TIMEZONE}>Timezone</Link>
        </NavLi>
        <NavLi className="p-1" selected={pathname === `/${ROUTER_PATH_HEX_TO_DEC}`}>
          <Link to={ROUTER_PATH_HEX_TO_DEC}>Hex to decimal</Link>
        </NavLi>
      </ul>
    </Nav>
  )
};

export default NavigationMenu;
