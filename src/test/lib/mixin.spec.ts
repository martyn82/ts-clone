
import {expect} from "chai";
import {Mixin} from "../../main/lib/mixin";

describe("mixin", () => {
  it("should apply properties from base types to the target", () => {
    const target = new TargetType();

    expect(target.bar1).to.not.be.undefined;
    expect(target.bar2).to.not.be.undefined;
    expect(target.baz2).to.not.be.undefined;
  });
});

class BaseTraitOne {
  public foo1: string;

  public bar1(x: number): boolean {
    return x % 2 === 0;
  }
}

abstract class BaseTraitTwo {
  public foo2: number;

  public abstract bar2(x: number): boolean;

  public baz2(y: boolean): number {
    return y ? 42 : 0;
  }
}

@Mixin(BaseTraitOne, BaseTraitTwo)
class TargetType implements BaseTraitOne, BaseTraitTwo {
  // trait property declarations
  foo1: string;
  foo2: number;

  // trait method declarations
  bar1: (x: number) => boolean;
  baz2: (y: boolean) => number;

  // implement BaseTraitTwo abstract method
  public bar2(x: number): boolean {
    return x % 2 !== 0;
  }

  constructor(private foo3?: boolean) {
  }

  public bar3(): string {
    return "three";
  }
}
