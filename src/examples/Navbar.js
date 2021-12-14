/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  BmNavbar,
  BmNavBarProfile,
  BmNavbarSearch,
  BmNavbarItems,
} from "../lib/components/navbar";
import { BmLogo } from "../lib/components/logo";
import Azam from "../lib/images/azam.png";
import { BmAlertIcon } from "../lib/components/Buttons/buttonAlertIcons";
import { BmCheckboxToggler } from "../lib/components/checkboxToggler";
import { AssignmentLateOutlined } from "@material-ui/icons";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuIcon from "@material-ui/icons/Menu";

import styled from "styled-components";
// import { BmSearch } from "./lib/components/search";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;
export class Navbars extends Component {
  render() {
    return (
      <>
        <BmNavbar>
          <BmNavbarItems>
            <BmLogo src={Azam} />
            <BmNavbarSearch placeholder="Search for anything" dropdown="yes" />
            <BmNavBarProfile>
              <BmAlertIcon icon={<AssignmentLateOutlined />} badgeContent={4} />
              <BmAlertIcon icon={<NotificationsNoneIcon />} badgeContent={40} />
              <BmCheckboxToggler />
            </BmNavBarProfile>
            <Hamburger>
                <MenuIcon />
              </Hamburger>
            {/* <Menu>
            </Menu> */}
          </BmNavbarItems>
        </BmNavbar>
      </>
    );
  }
}

export default Navbars;
