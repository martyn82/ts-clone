
import {expect} from "chai";
import {clone} from "../../main/lib/clone";

describe("clone", () => {
  it("should clone a date instance", () => {
    const original = new Date();
    const copy = clone(original);
    expect(copy).to.eql(original);
  });

  it("should clone an array", () => {
    const original = [false, true, null, "foo", "", 50, 1.2, Math.PI, ["nested", []], {foo: "bar"}];
    const copy = clone(original);
    expect(copy).to.eql(original);
  });

  it("should return a non-clonable primitve", () => {
    const original = "something";
    const copy = clone(original);
    expect(copy).to.eql(original);
  });

  it("should clone an object", () => {
    const original = {foo: "bar", baz: 42};
    const copy = clone(original);
    expect(copy).to.eql(original);
  });

  it("should clone an object instance into a target instance", () => {
    const original = {foo: "bar", bar: 11};
    const copy = clone(original, new SomeType());
    expect(copy).to.eql(original);
    expect(copy).to.be.instanceOf(SomeType);
  });
});

class SomeType {
  private foo: string;
  private bar: number;
}
