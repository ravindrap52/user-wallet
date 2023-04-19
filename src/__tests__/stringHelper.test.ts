import { checkIfStringContains } from "@/helpers/stringHelper";

describe("check if string contains", () => {
  it("should be true if the string starts with evmos1", () => {
    expect(checkIfStringContains("evmos1")).toBeTruthy();
  });
  it("should be false if the string not starts with evmos1", () => {
    expect(checkIfStringContains("vmos1")).toBeFalsy();
  });
});
