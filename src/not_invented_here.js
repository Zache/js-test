'use strict';
/*
* lodash and/or underscore have disappeared, it's up to you to reimplement them!
*/
describe('_', function () {
  function extend(destination, source) {

  }

  function clone(obj) {

  }

  function cloneDeep(obj) {

  }

  function flatten(array) {

  }

  function flattenDeep(array) {

  }

  function groupBy(list, keySelector) {

  }

  const _ = {
    extend,
    clone,
    cloneDeep,
    flatten,
    flattenDeep,
    groupBy
  };

  describe('extend', function () {
    it('adds properties', function () {
      const destination = {};
      const source = { name: 'zache', occupation: 'ninja' };

      const actual = _.extend(destination, source);

      expect(actual.name).toBe('zache');
      expect(actual.occupation).toBe('ninja');
    });

    it('overrides existing properties', function () {
      const destination = { occupation: 'student' };
      const source = { name: 'zache', occupation: 'ninja' };

      const actual = _.extend(destination, source);

      expect(actual.name).toBe('zache');
      expect(actual.occupation).toBe('ninja');
    });

    it('preserves non overridden properties', function () {
      const destination = { age: 30 };
      const source = { name: 'zache', occupation: 'ninja' };

      const actual = _.extend(destination, source);

      expect(actual.name).toBe('zache');
      expect(actual.age).toBe(30);
      expect(actual.occupation).toBe('ninja');
    });

    it('can handle multiple sources', function () {
      const destination = { name: 'zache', occupation: 'student' };

      const obj = { yup: 'yes' }
      const actual = _.extend(destination, { occupation: 'ninja', age: 28, location: 'sthlm' }, { age: 29, location: 'lund', father: true }, { age: 30, obj });

      expect(actual.name).toBe('zache');
      expect(actual.occupation).toBe('ninja');
      expect(actual.location).toBe('lund');
      expect(actual.father).toExist();
      expect(actual.age).toBe(30);
      expect(actual.obj).toBe(obj);
    });
  });

  describe('clone', function () {
    describe('shallow', function () {
      it('clones object', function () {
        const ref = { ref: true };
        const source = { fruit: 'banana', ref };
        const result = _.clone(source);

        expect(result).toNotBe(source);
        expect(result.ref).toBe(ref);
        expect(result.fruit).toBe('banana');
      });

      it('clones array', function () {
        const source = [{ fruit: 'apple' }, { fruit: 'banana' }];
        const result = _.clone(source);

        expect(result).toNotBe(source);
        expect(result[0]).toBe(source[0]);
        expect(result[1]).toBe(source[1]);
      });
    });

    describe('deep', function () {
      it('clones object', function () {
        const ref = { ref: false };
        const source = { fruit: 'banana', ref };
        const result = _.cloneDeep(source);

        expect(result).toNotBe(source);
        expect(result.ref).toNotBe(ref);
        expect(result.ref.ref).toBe(false);
        expect(result.fruit).toBe('banana');
      });

      it('clones array', function () {
        const ref = { ref: false };
        const source = [{ fruit: 'apple', ref }, { fruit: 'banana', ref }];
        const result = _.cloneDeep(source);

        expect(result).toNotBe(source);
        expect(result[0]).toNotBe(source[0]);
        expect(result[1]).toNotBe(source[1]);
        expect(result[0].fruit).toBe('apple');
        expect(result[1].ref.ref).toBe(false);
      });
    });
  });

  describe('flatten', function () {
    it('flattens', function () {
      const result = _.flatten([1, [2, 3], [4, 5, 6], [7, 8, 9, 10]]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('flattens shallow', function () {
      const result = _.flatten([1, 2, 3, [4, ['banana'], 5]]);
      expect(result).toEqual([1, 2, 3, 4, ['banana'], 5]);
    });

    it('flattens deep', function () {
      const result = _.flattenDeep([[], 1, [], [2, [3, [4, 5, 6]]], 7]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  describe('groupBy', function () {
    it('groups with shorthand', function () {
      const result = _.groupBy(['one', 'two', 'three', 'four', 'five'], 'length');
      expect(result).toEqual({
        3: ['one', 'two'],
        4: ['four', 'five'],
        5: ['three']
      });
    });

    it('groups with selector', function () {
      const result = _.groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 3);
      expect(result).toEqual({
        0: [3, 6, 9],
        1: [1, 4, 7, 10],
        2: [2, 5, 8]
      });
    });
  });
});