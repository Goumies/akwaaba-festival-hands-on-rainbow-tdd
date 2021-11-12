import styled from "styled-components";
import { lighten } from "polished";
import { space } from "styled-system";
import { COLORS } from "../../constants/colors";
//import {RAINBOW_COLORS} from "../../constants/rainbow";

export const Item = styled.div`
  transition: opacity 200ms ease-in-out;
  ${space}

  ${({ onClick }) =>
    onClick &&
    `:hover {
      cursor: pointer;
      opacity: 0.8;
    }`}
`;
export const Color = styled(Item)`
  width: 400px;
  border-radius: 5px;
  height: 3rem;
   {
    ${({ item }) => item && `background-color: ${COLORS[item]};`})
  }
  display: inline-block;
`;

export const ColorPlaceholder = styled(Color)`
  background: ${lighten(0.25, COLORS.GREY)};
`;
