import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenu from "./NavigationMenu";

const MainContent = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1 0 180px;
`;

const Header = styled.header``;

const Layout = (): JSX.Element => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div>
      <Header className="p-2 border border-b mb-2 flex md:block">
        <IconButton
          className="block md:none"
          onClick={() => setMobileNav(val => !val)}
        >
          <MenuIcon />
        </IconButton>
        <h1 className="text-3xl font-bold">HTML helpers</h1>
      </Header>

      <MainContent>
        <NavigationMenu mobileNav={mobileNav} />

        <Main className="p-2">
          <Outlet />
        </Main>
      </MainContent>
    </div>
  )
}

export default Layout;
