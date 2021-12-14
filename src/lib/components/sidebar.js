import styled from "styled-components";
import { BmBtnIcon } from "../components/Buttons/buttonIconsOnly";
import { BmGrey400, BmPrimaryWhite } from "./colors";
import { BmTab } from "./tabs";

export const BmSideBar = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  max-height: 100%;
  height: 100%;
  overflow: auto;
  max-width: 25%;
  width: 25%;
  ${'' /* border: 0.714rem solid black; */}
`;

export const BmSideBarSearch = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  padding: 1.714rem !important;
`;

export const BmSideBarBtnIcon = styled(BmBtnIcon)`
  margin-left: 0.571rem;
`;

export const BmSideBarTab = styled(BmTab)`
  width: 50%;
  padding: 1.714rem;
`;
