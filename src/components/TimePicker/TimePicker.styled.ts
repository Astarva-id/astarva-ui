import Box from "@components/Box";
import colors from "@components/Colors";
import styled from "styled-components";

export const Time = styled(Box)`
  text-align: center;
  padding: 0.25rem 0;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${(props) => (props.isActive ? colors.white : colors.black800)};
  background-color: ${(props) =>
    props.isActive ? colors.blue400 : colors.white};
  border-radius: 0.25rem;

  &:hover {
    background-color: ${colors.blue50};
  }
`;
