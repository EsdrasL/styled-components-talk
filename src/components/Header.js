import styled from "styled-components";

const Header = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: ${props =>
    props.theme ? props.theme.primary : "rgba(255, 255, 255, 0.8)"};
`;

export default Header;
