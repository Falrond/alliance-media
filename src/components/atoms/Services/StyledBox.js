import styled from "styled-components";

export const StyledBox = styled.div`
  width: 300px;
  min-height: 395px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffc730;
  border-right: none;
  &:last-of-type {
    border-right: 1px solid #ffc730;
  }
`;
