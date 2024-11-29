const add = require('./main');

describe("String Calculator", () => {
  describe("when the string is empty", () =>
      it("returns zero", () => {
        expect(add("")).toBe(0);
      })
  );
  
  describe("when the string contains only one number", () =>{
    it("return the same number", () => {
      expect(add("1")).toBe(1);
    })
  });
  
  describe("when the string contains ten numbers", () => {
    it("returns the sum of the numbers", () => {
      expect(add("1, 2, 3, 4, 5, 6, 7, 8, 9, 10")).toBe(55);
    })
  })
})