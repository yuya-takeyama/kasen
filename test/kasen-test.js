'use strict';

import assert from 'power-assert';
import _ from '../src/kasen'

describe('kasen', () => {
  describe('.map', () => {
    it('apply function to list', () => {
      assert.deepEqual(Array.from(_.map([1, 2, 3], (x) => x * x)), [1, 4, 9]);
    });
  });

  describe('.reduce', () => {
    it('reduces iterator using function', () => {
      assert(_.reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x, y) => x + y, 0) === 55);
    });
  });

  describe('.filter', () => {
    it('filters list using predicate function', () => {
      assert.deepEqual(Array.from(_.filter([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0)), [2, 4, 6]);
    });
  });

  describe('.range', () => {
    context('when _.range(stop)', () => {
      it('generates empty iterator when stop is 0', () => {
        assert.deepEqual(Array.from(_.range(0)), []);
      });

      it('generates range starts from 0', () => {
        assert.deepEqual(Array.from(_.range(3)), [0, 1, 2]);
      });
    });

    context('when _.range(start, stop)', () => {
      it('generates range', () => {
        assert.deepEqual(Array.from(_.range(1, 3)), [1, 2]);
      });
    });

    context('when _.range(start, stop, step)', () => {
      it('generates range', () => {
        assert.deepEqual(Array.from(_.range(0, 30, 5)), [0, 5, 10, 15, 20, 25]);
      });

      it('generates decreasing range when step is negative', () => {
        assert.deepEqual(Array.from(_.range(0, -10, -1)), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
      });
    });
  });
});
