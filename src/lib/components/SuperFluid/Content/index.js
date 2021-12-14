import styled from "styled-components";
import { BmGrey400, BmPrimaryWhite } from "../../colors";

export const BmContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  border-radius: 0.25rem;
`;
