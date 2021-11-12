import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { COLORS } from "../../constants/colors";

const StyledRainbowPlaceholder = styled.div`
  width: 100%;
  margin: 0 20px;
  background: ${lighten(0.28, COLORS.GREY)};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  height: 290px;
  width: 90%;
  bottom: 0;
  overflow: hidden;
  margin: auto;
  top: 70px;
  position: relative;
`;

const Bows = styled.div`
  height: 400px;
  width: 100%;
  display: inline-block;
  position: absolute;
`;

const FirstColor = styled.div`
  border: 30px solid ${lighten(0.075, COLORS.GREY_DARK)};
  width: 445px;
  height: 535px;
  margin: auto;
  border-radius: 50%;
  border-bottom-color: transparent;
`;

const SecondColor = styled.div`
  border: 30px solid ${lighten(0.10, COLORS.GREY_DARK)};
  width: 385px;
  height: 470px;
  border-radius: 50%;
  border-bottom-color: transparent;
`;

const ThirdColor = styled.div`
  border: 30px solid ${lighten(0.15, COLORS.GREY_DARK)};
  width: 325px;
  height: 410px;
  border-radius: 50%;
  border-bottom-color: transparent;
`;

const FourthColor = styled.div`
  border: 30px solid ${lighten(0.2, COLORS.GREY_DARK)};
  width: 265px;
  height: 350px;
  border-radius: 50%;
  border-bottom-color: transparent;
`;
const FifthColor = styled.div`
  border: 30px solid ${lighten(0.25, COLORS.GREY_DARK)};
  width: 205px;
  height: 270px;
  border-radius: 50%;
  border-bottom-color: transparent;
`;

const SixthColor = styled.div`
  border: 30px solid ${lighten(0.3, COLORS.GREY_DARK)};
  display: inline-block;
  width: 145px;
  height: 210px;
  border-radius: 50%;
  border-bottom-color: transparent;
`;

export function RainbowPlaceholder() {
  return (
    <StyledRainbowPlaceholder>
      <Wrapper>
        <Bows>
          <FirstColor>
            <SecondColor>
              <ThirdColor>
                <FourthColor>
                  <FifthColor>
                    <SixthColor></SixthColor>
                  </FifthColor>
                </FourthColor>
              </ThirdColor>
            </SecondColor>
          </FirstColor>
        </Bows>
      </Wrapper>
    </StyledRainbowPlaceholder>
  );
}
