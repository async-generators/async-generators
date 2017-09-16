import { equal } from '../src';

import { expect } from 'chai';

describe("async-generator", () => {
  it("equals", async () => {
    let a = async function* () {
      yield 1; yield 2; yield 3;
    }
    let result = await equal(a(), a());

    expect(result).to.be.true;
  }) 
})