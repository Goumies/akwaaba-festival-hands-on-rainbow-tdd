import React, { useContext } from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { COLORS } from "../constants/colors";
import { RainbowContext } from "../App";
import { RainbowPlaceholder } from "./Rainbow/RainbowPlaceholder";
import { Rainbow } from "./Rainbow/Rainbow";

const StyledMagicStation = styled.div`
  width: 100%;
  margin: 0 20px;
  background: ${lighten(0.28, COLORS.GREY)};
  border: 1px dashed ${COLORS.GREY};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 43%;
`;

const UserRainbowColors = styled.span`
  top: 20px;
  font-size: 1em;
  position: absolute;
`;

const Info = styled.span`
  top: -40px;
  right: 20px;
  font-size: 5em;
  position: absolute;
  color: ${COLORS.GREY_DARK};
`;

export function MagicStation() {
  const { rainbow, setRainbow } = useContext(RainbowContext);
  return (
    <Block>
      <StyledMagicStation>
        <UserRainbowColors>
          {rainbow.map((bow, index) =>
            index === 0 ? `${bow.item}` : ` - ${bow.item}`
          )}
        </UserRainbowColors>
        {rainbow.length > 6 && <Info>...</Info>}
        {rainbow.length === 0 && <RainbowPlaceholder />}
        {rainbow.length > 0 && <Rainbow />}
      </StyledMagicStation>
    </Block>
  );
}
