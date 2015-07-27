/** @class A */
class A {
	/** @memberof A
	  * @arg arga0 */
	methoda(arga0, arga1) {}

    /** @memberof A
   	  * @arg arga0 */
   	methoda2(arga0: number, arga1) {}
}

/** @class B */ class B {
    /**
     * @param {number} n
     */
    constructor(n) {

    }
	methodb() {}
   	methodb2(): string {}

    get prop() {}
    set prop(prop) {}
}

/* @class */ class C {
	methodc() {}
}

/** This is class D */ class D {
    constructor(n: number) {

    }
	methodd() {}
    methodd2(
        arg1: string,
        arg2: number,
        arg3: boolean,
        arg4: mixed,
        arg5: Array<string>,
        arg6: Class<SomeOtherClass>,
        arg7: Function,
        arg7: Map<string, number>,
        arg8: Set<string>,
        arg9: Promise<string>
    ): string {}
}

export default class E {
	static methode0(i) {}
	methode1(first, ...args) {}
	constructor() {}
}
