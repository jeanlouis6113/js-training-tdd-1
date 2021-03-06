'use strict';

/*
 * Create an object `obj` that has a property for each primitive values
 * much like in primitive.js
 *
 * @notions Functions, Operators
 */

// Your code:

//* Begin of tests

//*
//* Créer un objet `obj` qui a une propriété pour chaque valeur primitive
//* un peu comme dans primitive.js
//*
//* Fonctions @notions, opérateurs
//* /
const obj = {

    str: '1337',
    num: 42,
    bool: false,
    undef: undefined
};
// Votre code:

// * Début des tests
const assert = require('assert');

assert.strictEqual(typeof obj, 'object');

assert.strictEqual(typeof obj.str, 'string');
assert.strictEqual(obj.str, '1337');

assert.strictEqual(typeof obj.num, 'number');
assert.strictEqual(obj.num, 42);

assert.strictEqual(typeof obj.bool, 'boolean');
assert.strictEqual(obj.bool, false);

assert.strictEqual(typeof obj.undef, 'undefined');
assert.strictEqual(obj.undef, undefined);
// End of tests */
