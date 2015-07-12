/** @class */ class A {
	/** @memberof A 
	  * @arg arga0 
	  * @function 
	  * @param arga1 */
	methoda(arga0, arga1) {}
}


/** @class */ class B {
	/** @function 
	  * @memberof B */
	methodb() {}
}

/* @class */ /** @class */ class C {
	/** @memberof C
	  * @function */
	methodc() {}
}

/** 
 * @class */ class D {
	/** @memberof D
	  * @function */
	methodd() {}
}

/** @class */
class E {
	/** @memberof E
	  * @static
	  * @function 
	  * @param i */	
	static methode0(i) {}

	/** @memberof E
	  * @function 
	  * @param first 
	  * @param {...*} args */ methode1(first, ...args) {}

	/** @constructs E
	  * @function */ constructor() {}	
}

export default E;