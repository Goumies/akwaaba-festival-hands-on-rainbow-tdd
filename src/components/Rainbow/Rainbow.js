import React, { useContext } from "react";
import { RainbowContext } from "../../App";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { COLORS } from "../../constants/colors";

const Wrapper = styled.div`
  height: 290px;
  width: 90%;
  bottom: 0;
  overflow: hidden;
  margin: auto;
  top: 39px;
  position: absolute;
`;

const Bows = styled.div`
  height: 400px;
  width: 100%;
  display: inline-block;
  position: absolute;
`;

const FirstColor = styled.div`
  border: 30px solid ${({ code }) => COLORS[code?.item]};
  width: 445px;
  height: 535px;
  margin: auto;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 30px solid ${({ code }) => lighten(0.15, COLORS[code?.item])}
`;

const SecondColor = styled.div`
  border: 30px solid ${({ code }) =>
    code?.item ? COLORS?.[code?.item] : lighten(0.1, COLORS.GREY_DARK)};
  width: 385px;
  height: 470px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 30px solid ${({ code }) =>
      code?.item
        ? lighten(0.15, COLORS[code?.item])
        : darken(0.15, COLORS.GREY_DARK)}
`;

const ThirdColor = styled.div`
  border: 30px solid ${({ code }) =>
    code?.item ? COLORS?.[code?.item] : lighten(0.15, COLORS.GREY_DARK)};
  width: 325px;
  height: 410px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 30px solid ${({ code }) =>
      code?.item
        ? lighten(0.15, COLORS[code?.item])
        : darken(0.2, COLORS.GREY_DARK)}
`;

const FourthColor = styled.div`
  border: 30px solid ${({ code }) =>
    code?.item ? COLORS?.[code?.item] : lighten(0.2, COLORS.GREY_DARK)};
  width: 265px;
  height: 350px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 30px solid ${({ code }) =>
      code?.item
        ? lighten(0.15, COLORS[code?.item])
        : darken(0.25, COLORS.GREY_DARK)}
`;
const FifthColor = styled.div`
  border: 30px solid ${({ code }) =>
    code?.item ? COLORS?.[code?.item] : lighten(0.25, COLORS.GREY_DARK)};
  width: 205px;
  height: 270px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 30px solid ${({ code }) =>
      code?.item
        ? lighten(0.15, COLORS[code?.item])
        : darken(0.3, COLORS.GREY_DARK)}
`;

const SixthColor = styled.div`
  border: 30px solid ${({ code }) =>
    code?.item ? COLORS?.[code?.item] : lighten(0.3, COLORS.GREY_DARK)};
  display: inline-block;
  width: 145px;
  height: 210px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 30px solid ${({ code }) =>
      code?.item
        ? lighten(0.15, COLORS[code?.item])
        : darken(0.35, COLORS.GREY_DARK)}
`;

export function Rainbow() {
  const { rainbow } = useContext(RainbowContext);
  const [
    firstColorItem,
    secondColorItem,
    thirdColorItem,
    fourthColorItem,
    fifthColorItem,
    sixthColorItem,
  ] = rainbow;
  return (
    <Wrapper>
      <Bows>
        <FirstColor code={firstColorItem}>
          <SecondColor code={secondColorItem}>
            <ThirdColor code={thirdColorItem}>
              <FourthColor code={fourthColorItem}>
                <FifthColor code={fifthColorItem}>
                  <SixthColor code={sixthColorItem} />
                </FifthColor>
              </FourthColor>
            </ThirdColor>
          </SecondColor>
        </FirstColor>
      </Bows>
    </Wrapper>
  );
}
