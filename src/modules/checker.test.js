import { isRedFirst } from "./checker";

describe("isRedFirst", () => {
  it("returns invalid rainbow, given a rainbow without colors", () => {
    // Arrange
    const rainbow = [];

    // Act
    let actualInvalidRainbow = isRedFirst(rainbow);

    // Assert
    expect(actualInvalidRainbow).toBe(false);
  });
});
