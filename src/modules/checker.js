import { RAINBOW_COLORS } from "../constants/rainbow";

export const isRedFirst = (rainbow) => {
  return rainbow[0]?.item === RAINBOW_COLORS.RED;
};

export function isOrangeBetweenRedAndYellow(rainbow = []) {
  const orangePosition = rainbow.findIndex(
    (bow) => bow?.item === RAINBOW_COLORS.ORANGE
  );
  return (
    rainbow[orangePosition - 1]?.item === RAINBOW_COLORS.RED &&
    rainbow[orangePosition + 1]?.item === RAINBOW_COLORS.YELLOW
  );
}

/*
export const isValidRainbow = ( rainbow ) => {
  return undefined;
}
*/
