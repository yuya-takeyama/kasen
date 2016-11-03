'use strict';

const kasen = {
  map: function* (list, iteratee) {
    for (const x of list) {
      yield iteratee(x);
    }
  },

  reduce: (list, iteratee, memo) => {
    for (const x of list) {
      memo = iteratee(memo, x);
    }

    return memo;
  },

  filter: function* (list, predicate) {
    for (const x of list) {
      if (predicate(x)) {
        yield x;
      }
    }
  },

  range: function* (start, stop, step) {
    if (stop === undefined && step === undefined) {
      stop = start;
      start = 0;
    }
    if (step === undefined) {
      step = 1;
    }

    if (step > 0) {
      for (let i = start; i < stop; i += step) {
        yield i;
      }
    } else {
      for (let i = start; i > stop; i += step) {
        yield i;
      }
    }
  }
};

export default kasen;
