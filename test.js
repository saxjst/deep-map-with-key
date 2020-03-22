const deepMapWithKey = require(".");

describe("deepMapWithKey tests", () => {
  test("if deepMapWithKey is called then it must be defined", () => {
    expect(deepMapWithKey).toBeDefined();
  });

  describe("depth test", () => {
    // for test purpose
    const double = (key, number) => number * 2;

    const veryDeepObj = {
      a: 1,
      b: 2,
      c: 4,
      d: [1, 2, 3, 4, 5],
      e: {
        f: 8,
        g: [
          22,
          23,
          24,
          {
            h: 2,
            i: 4
          }
        ],
        j: {
          k: 16,
          l: 32
        }
      }
    };

    test("if a object with x level is passed then all the level should be mapped", () => {
      const newObj = deepMapWithKey(double, veryDeepObj);

      expect(newObj.a).toBe(2);
      expect(newObj.d[1]).toBe(4);
      expect(newObj.e.f).toBe(16);
      expect(newObj.e.g[0]).toBe(44);
      expect(newObj.e.g[3].h).toBe(4);
    });
  });
});
