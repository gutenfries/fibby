/**
 * returns the fibonacci numbers through n
 *
 * @param `n` the number of elements to calculate to
 *
 * @returns `number[]| null` fibonacci sequence up to n, else if there is an error, null
 */
function fibonacci_seq(n: number): number[] | null {
	// validate input beacuse javascript types are a literal joke :D
	if (n < 0) {
		// input must be positive
		return null;
	} else if (n === 0) {
		return [0];
	} else {
		const stack: number[] = [];
		let prev = 0;
		let next = 1;

		for (let i = 1; i < n; ++i) {
			const current = prev + next;
			stack.push(current);

			prev = next;
			next = current;
		}

		return stack;
	}
}

/**
 * calcualates the nth fibonacci number
 *
 * @param `n`, the n term to calculate
 *
 * @returns `number | null`: the nth fibonacci number, else if there is an error, null
 */
function fibonacci_nth(n: number): number | null {
	// validate input beacuse javascript types are a literal joke :D
	if (n < 0) {
		// input must be positive
		return null;
	} else if (n === 0) {
		return 0;
	} else {
		let prev = 0;
		let next = 1;

		for (let i = 1; i < n; ++i) {
			const current = prev + next;

			prev = next;
			next = current;
		}

		return next;
	}
}

export { fibonacci_nth, fibonacci_seq };
