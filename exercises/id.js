'use strict';

/*
 * Create an `id` function that takes one argument and return it
 *
 * @notions Functions
 */

// Your code:

//* Begin of tests

//
// * Crée une fonction `id` // qui // prend un // argument et // le renvoie
 
 // @notions // Fonctions
 //

// Votre code:
const id = function (assert){
    return assert;
}


// * Début des tests
const assert = require('assert');

assert.strictEqual(typeof id, 'function');
assert.strictEqual(id.length, 1);
assert.strictEqual(id(5), 5);
assert.strictEqual(id('pouet'), 'pouet');
assert.strictEqual(id(assert), assert);
// End of tests */
