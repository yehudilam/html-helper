import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenu from "./NavigationMenu";

const MainContent = styled.div`
  display: flex;
  flex: 1 0 100px;
`;

const Main = styled.main`
  flex: 1 0 180px;
`;

const Header = styled.header``;

const Layout = (): JSX.Element => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="h-full w-full flex flex-col">
      <Header className="p-2 border border-b flex">
        <div className="block md:hidden">
          <IconButton
            onClick={() => setMobileNav(val => !val)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <h1 className="text-4xl font-bold">HTML helpers</h1>
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
