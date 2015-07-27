/** @class A */
class A {
    /** @memberof A
     * @arg arga0
     * @instance
     * @method methoda
     * @param arga0
     * @param arga1 */
    methoda(arga0, arga1) {}

    /** @memberof A
     * @arg arga0
     * @instance
     * @method methoda2
     * @param {number} arga0
     * @param arga1 */
    methoda2(arga0, arga1) {}
}

/** @class B
* @param n */ class B {
    /**
    * @param {number} n
    */
    constructor(n) {}
    /** @memberof B
     * @instance
     * @method methodb */ methodb() {}
    /** @memberof B
     * @instance
     * @method methodb2
     * @returns {string} */ methodb2() {}

    /** @memberof B
     * @instance
     * @member prop */ get prop() {}
    /** @memberof B
     * @instance
     * @param prop */ set prop(prop) {}

    /** @memberof B
     * @instance
     * @member {number} prop2 */ get prop2() {}
}

/* @class */ /** @class C */ class C {
    /** @memberof C
     * @instance
     * @method methodc */
    methodc() {}
}

/** This is class D
 * @class D
 * @param {number} n */ class D {
    constructor(n) {}
    /** @memberof D
     * @instance
     * @method methodd */ methodd() {}
    /** @memberof D
     * @instance
     * @method methodd2
     * @param {string} arg1
     * @param {number} arg2
     * @param {boolean} arg3
     * @param {*} arg4
     * @param {Array.<string>} arg5
     * @param {Function} arg6
     * @param {Function} arg7
     * @param {Map.<string, number>} arg8
     * @param {Set.<string>} arg9
     * @param {Promise.<string>} arg10
     * @param {int} [arg11]
     * @param {int} [arg12=0]
     * @param {string} [arg13=test]
     * @returns {string} */ methodd2(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12 = 0, arg13 = 'test') {}

    /** @method method3
     * @memberof D
     * @instance */
    ['method' + 3]() {}
    /** @method @@iterator
     * @memberof D
     * @instance */
    [Symbol.iterator]() {}
}

/** @class E */
class E {
    /** @memberof E
     * @static
     * @method methode0
     * @param i */
    static methode0(i) {}

    /** @memberof E
     * @instance
     * @method methode1
     * @param first
     * @param {...*} args */ methode1(first, ...args) {}

    constructor() {}
}

export default E;
