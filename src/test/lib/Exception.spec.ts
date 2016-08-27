
import {expect} from "chai";
import {Exception} from "../../main/lib/Exception";

describe("Exception", () => {
  it("should become error of correct type", () => {
    const subject = new SomeException("some message");
    expect(subject).to.be.an.instanceOf(SomeException);
    expect(subject.message).to.eql("some message");
  });

  it("should contain stack trace", () => {
    let error: SomeException;

    try {
      throw new SomeException("some message");
    } catch (e) {
      error = e;
    } finally {
      expect(error.stack).to.not.be.empty;
    }
  });
});

class SomeException extends Exception {
}
