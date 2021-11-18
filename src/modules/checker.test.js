import {isOrangeBetweenRedAndYellow, isRedFirst} from "./checker";
import {RAINBOW_COLORS} from "../constants/rainbow";

describe("checker", () => {
  describe("isRedFirst", () => {
    it("returns invalid rainbow, given a rainbow without colors", () => {
      // Arrange
      const rainbow = [];

      // Act
      let actualInvalidRainbow = isRedFirst(rainbow);

      // Assert
      expect(actualInvalidRainbow).toBe(false);
    });

    it("returns valid rainbow, given a rainbow with red as first color", () => {
      // Arrange
      const rainbow = [{item: RAINBOW_COLORS.RED}];

      // Act
      let actualValidRainbow = isRedFirst(rainbow);

      // Assert
      expect(actualValidRainbow).toBe(true);
    });
  });

  describe("isOrangeBetweenRedAndYellow", () => {
    it("returns invalid rainbow, given a rainbow without colors", () => {
      // Arrange
      const rainbow = [];

      // Act
      let actualInvalidRainbow = isOrangeBetweenRedAndYellow(rainbow);

      // Assert
      expect(actualInvalidRainbow).toBe(false);
    });

    it("returns valid rainbow, given a rainbow with ORANGE between RED and YELLOW", () => {
      // Arrange
      const rainbow = [{item: RAINBOW_COLORS.RED}, {item: RAINBOW_COLORS.ORANGE}, {item: RAINBOW_COLORS.YELLOW}];

      // Act
      let actualInvalidRainbow = isOrangeBetweenRedAndYellow(rainbow);

      // Assert
      expect(actualInvalidRainbow).toBe(true);
    });

    it("returns valid rainbow, given a rainbow with ORANGE between RED and YELLOW and 2 RED as firsts", () => {
      // Arrange
      const rainbow = [{item: RAINBOW_COLORS.RED}, {item: RAINBOW_COLORS.RED}, {item: RAINBOW_COLORS.ORANGE}, {item: RAINBOW_COLORS.YELLOW}];

      // Act
      let actualInvalidRainbow = isOrangeBetweenRedAndYellow(rainbow);

      // Assert
      expect(actualInvalidRainbow).toBe(true);
    });

    it("returns invalid rainbow, given a rainbow with ORANGE is before YELLOW", () => {
      // Arrange
      const rainbow = [{item: RAINBOW_COLORS.ORANGE}, {item: RAINBOW_COLORS.YELLOW}];

      // Act
      let actualInvalidRainbow = isOrangeBetweenRedAndYellow(rainbow);

      // Assert
      expect(actualInvalidRainbow).toBe(false);
    });
  });
})

