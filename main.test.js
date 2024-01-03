const { checkIsomorphic } = require("./main");

describe("Testing strings ARE Isomorphics", () => {
  it(`Verify that 'egg' and 'add' strings are isomorphic`, () => {
    const string1 = "egg";
    const string2 = "add";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(true);
  });

  it(`Verify that 'abba' and 'cddc' strings are isomorphic`, () => {
    const string1 = "abba";
    const string2 = "cddc";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(true);
  });

  it(`Verify that 'abcd' and 'wxyz' strings are isomorphic`, () => {
    const string1 = "abcd";
    const string2 = "wxyz";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(true);
  });

  it(`Verify that 'paper' and 'title' strings are isomorphic`, () => {
    const string1 = "paper";
    const string2 = "title";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(true);
  });

  it(`Verify that 'abcdefghijabcdefghijabcdefghij' and 'klmnopqrstklmnopqrstklmnopqrst' strings are isomorphic`, () => {
    const string1 = "abcdefghijabcdefghijabcdefghij";
    const string2 = "klmnopqrstklmnopqrstklmnopqrst";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(true);
  });
});

describe("Testing strings ARE NOT Isomorphics", () => {
  it(`Verify that 'foo' and 'bar' strings are NOT isomorphic`, () => {
    const string1 = "foo";
    const string2 = "bar";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(false);
  });

  it(`Verify that 'test' and 'duck' strings are NOT isomorphic`, () => {
    const string1 = "test";
    const string2 = "duck";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(false);
  });

  it(`Verify that 'poter' and 'title' strings are NOT isomorphic`, () => {
    const string1 = "poter";
    const string2 = "title";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(false);
  });

  it(`Verify that 'abcdefghijklmabcdefghijklmno' and 'nopqrstuvwxyzabcdefghijklmnop' strings are NOT isomorphic`, () => {
    const string1 = "abcdefghijklmabcdefghijklmno";
    const string2 = "nopqrstuvwxyzabcdefghijklmnop";
    const result =
      checkIsomorphic(string1, string2) && checkIsomorphic(string2, string1);
    expect(result).toBe(false);
  });
});
