const add = require('./main');

describe("String Calculator", () => {
  describe("when the string is empty", () =>
      it("adds numbers passed as comma separated numbers", () => {
        expect(add("")).toBe(0);
      })
  );
})