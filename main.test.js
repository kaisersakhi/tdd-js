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
  });
  
  describe("when the string contains new lines as well as commas", () => {
    it("returns the sum of the numbers", () => {
      expect(add("10\n20\n30,40")).toBe(100);
    })
  });
  
  describe("when the string contains custom line delimiter", () => {
    describe("when the customer delimiter is semicolon", () => {
      it("should detect semicolon as the delimiter and return the sum of the numbers", () => {
        expect(add("//;\n10;20;30;40")).toBe(100);
      })
    })
  });
})