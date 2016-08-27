
import {expect} from "chai";
import {className, classOf} from "../../main/lib/inflection";

describe("inflection", () => {
  describe("className", () => {
    it("should return the class name of a type", () => {
      expect(className(SomeType)).to.eql("SomeType");
    });

    it("should return the class name of a type in namespace", () => {
      expect(className(SomeContext.SomeSubType, {name: "SomeContext"})).to.eql("SomeContext$SomeSubType");
    });
  });

  describe("classOf", () => {
    it("should return the class name of an object", () => {
      const object = new SomeType;
      expect(classOf(object)).to.eql("SomeType");
    });

    it("should return the class name of an object in namespace", () => {
      const object = new SomeContext.SomeSubType;
      expect(classOf(object, {name: "SomeContext"})).to.eql("SomeContext$SomeSubType");
    });

    it("should return empty string if class name cannot be inflected", () => {
      expect(classOf(543)).to.eql("");
    });
  });
});

class SomeType {
}

namespace SomeContext {
  export class SomeSubType {
  }
}
