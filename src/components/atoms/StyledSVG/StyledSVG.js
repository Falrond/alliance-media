import styled from "styled-components";

export const StyledSVG = styled.svg`
  .dark & path {
    fill: #fff;
  }
  .light & path {
    fill: #222;
  }
  .dark & polygon {
    fill: #fff;
  }
  .light & polygon {
    fill: #222;
  }
  .dark & rect {
    fill: #fff;
  }
  .light & rect {
    fill: #222;
  }
  .dark & circle {
    fill: #fff;
  }
  .light & circle {
    fill: #222;
  }
`;
