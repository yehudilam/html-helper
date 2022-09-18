import React from "react";
import {Link, Outlet} from "react-router-dom";
import {
  ROUTER_PATH_BASE64,
  ROUTER_PATH_CRYPTO,
  ROUTER_PATH_HEX_TO_DEC,
  ROUTER_PATH_TIMESTAMP,
  ROUTER_PATH_TIMEZONE
} from "../utils/Router";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  flex: 0 0 120px;
`;

const Main = styled.main`
  flex: 1 0 180px;
`;

const Layout = (): JSX.Element => {
  // console.log('layout');

  return (
    <div>
      <header>
        HTML helpers
      </header>

      <MainContent>
        <Nav>
          <ul>
            <li>
              <Link to={ROUTER_PATH_BASE64}>Base 64</Link>
            </li>
            <li>
              <Link to={ROUTER_PATH_CRYPTO}>Crypto</Link>
            </li>
            <li>
              <Link to={ROUTER_PATH_TIMESTAMP}>Timestamp</Link>
            </li>

            <li>
              <Link to={ROUTER_PATH_TIMEZONE}>Timezone</Link>
            </li>
            <li>
              <Link to={ROUTER_PATH_HEX_TO_DEC}>Hex to decimal</Link>
            </li>
          </ul>
        </Nav>

        <Main>
          <Outlet />
        </Main>
      </MainContent>
    </div>
  )
}

export default Layout;
