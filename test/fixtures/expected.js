/** @class A */
class A {
    /** @memberof A
     * @arg arga0
     * @function methoda
     * @param arga0
     * @param arga1 */
    methoda(arga0, arga1) {}

    /** @memberof A
     * @arg arga0
     * @function methoda2
     * @param {number} arga0
     * @param arga1 */
    methoda2(arga0, arga1) {}
}


/** @class B */ class B {
    /** @memberof B
     * @function methodb */
    methodb() {}
    /** @memberof B
     * @function methodb2
     * @returns {string} */ methodb2() {}
}

/* @class */ /** @class C */ class C {
    /** @memberof C
      * @function methodc */
    methodc() {}
}

/** This is class D
 * @class D */ class D {
    /** @memberof D
      * @function methodd */
    methodd() {}
    /** @memberof D
     * @function methodd2
     * @param {string} arg1
     * @param {number} arg2
     * @param {boolean} arg3
     * @param {*} arg4
     * @param {Array.<string>} arg5
     * @param {Function} arg6
     * @param {Function} arg7
     * @param {Map.<string, number>} arg7
     * @param {Set.<string>} arg8
     * @param {Promise.<string>} arg9
     * @returns {string} */ methodd2(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg7, arg8, arg9) {}
}

/** @class E */
class E {
    /** @memberof E
      * @static
      * @function methode0
      * @param i */
    static methode0(i) {}

    /** @memberof E
      * @function methode1
      * @param first
      * @param {...*} args */ methode1(first, ...args) {}

    /** @function */ constructor() {}
}

export default E;
