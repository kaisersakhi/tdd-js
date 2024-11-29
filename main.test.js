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
  })
})