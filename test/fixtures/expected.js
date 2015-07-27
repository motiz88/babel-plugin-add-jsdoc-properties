/** @class A */
class A {
    /** @memberof A
     * @arg arga0
     * @method A#methoda
     * @param arga0
     * @param arga1 */
    methoda(arga0, arga1) {}

    /** @memberof A
     * @arg arga0
     * @method A#methoda2
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
    /** @method B#methodb */ methodb() {}
    /** @method B#methodb2
     * @returns {string} */ methodb2() {}

    /** @property B#prop */ get prop() {}
    /** @param prop */ set prop(prop) {}
}

/* @class */ /** @class C */ class C {
    /** @method C#methodc */
    methodc() {}
}

/** This is class D
 * @class D
 * @param {number} n */ class D {
    constructor(n) {}
    /** @method D#methodd */ methodd() {}
    /** @method D#methodd2
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
}

/** @class E */
class E {
    /** @method E.methode0
      * @param i */
    static methode0(i) {}

    /** @method E#methode1
      * @param first
      * @param {...*} args */ methode1(first, ...args) {}

    constructor() {}
}

export default E;
