import colors from "@components/Colors";
import Flex from "@components/Flex";
import styled from "styled-components";

const ScrollBar = styled(Flex)`
  /* width */
  &::-webkit-scrollbar {
    width: ${(props) => (props.hideScroll ? "0rem" : "0.375rem")};
    height: ${(props) => (props.hideScroll ? "0rem" : "0.375rem")};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${colors.black50};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${colors.black100};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.black300};
  }
`;

export default ScrollBar;
