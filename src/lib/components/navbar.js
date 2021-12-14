// import React from 'react';
import styled from "styled-components";
import { BmPrimaryWhite } from "./colors";
import { BmSearch } from "./search";

// Old with NavbarContent Main wrapper for navbar
export const BmNavbar = styled.div`
    background: ${BmPrimaryWhite};
    box-shadow:  0rem 0.286rem 0.214rem rgba(0, 0, 0, 0.25);
    padding: 0rem 2.5rem !important;
    flex-wrap: wrap;
    ${"" /* width: 100vw; */}
  }
`;

//  Spacing between the contents of navbar
export const BmNavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.429rem 0rem !important;
  flex-wrap: wrap;
`;

export const GlobalNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// Main wrapper for navbar
export const OldBmNavbar = styled(GlobalNavbarWrapper)`
    flex-direction: row;
    padding: 1.429rem 2.5rem !important;
    background: ${BmPrimaryWhite};
    box-shadow:  0rem 0.286rem 0.214rem rgba(0, 0, 0, 0.25);
  }
`;

// Navbar Profile Icon Wrapper
export const BmNavBarProfile = styled(GlobalNavbarWrapper)`
  @media (max-width: 768px) {
   display: none !important;
  }
`;

// Navbar Search Icon Wrapper
export const BmNavbarSearch = styled(BmSearch)`
  width: 30vw;
  @media (max-width: 768px) {
    display: none !important;
  }
`;

// Navbar Logo Icon Wrapper
export const BmNavbarLogo = styled(GlobalNavbarWrapper)``;
