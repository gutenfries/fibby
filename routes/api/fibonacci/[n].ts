import { fibonacci_nth, fibonacci_seq } from '../../../logic/fibonacci.ts';

import { Handlers } from '$fresh/server.ts';

/**
 * Configuration class to hold the config values from an api request
 *
 * ? NOTE: using OOP in this scenario MIGHT BE LESS MEMORY EFFICEINT
 */
class Config {
	constructor(
		help: boolean,
		numbering: boolean,
		last_only: boolean,
	) {
		this.help = help;
		this.numbering = numbering;
		this.last_only = last_only;
	}

	help = false;
	numbering = false;
	last_only = false;
}

const HELP_MESSAGE = `
fibby v0.1.0:


Usage: http://localhost:8000/api/fibonacci/{count}?{options}

Count:
  <COUNT>  the length of the sequence to output, i.e.: 0, 1, 1, 2, 3, 5 would be the result of \`count=6\`.
    Count must be a positive, non-zero integer.

Options:
  ?numbering      Preface each number in the sequence with it's position within the sequence, i.e: 1:0, 2:1, 3:1, 4:2, 5:3, 6:5
  ?last-only      Print only the last number of the sequence for the given count
  ?help           Print help
`;

export const handler: Handlers = {
	GET(req, ctx) {
		// validate the count input (it should only be a positive, non-zero integer)
		let count: number | null;

		// validate the query params (like cli flags)
		const urlContent = new URL(req.url).searchParams;

		try {
			count = parseInt(ctx.params.n) + 1;
		} catch {
			count = null;
		}

		if (count && count > 0 && count < 200) {
			// if input if valid, parse the data and instantiate and `Config` instance
			const config = new Config(
				urlContent.has('help'),
				urlContent.has('numbering'),
				urlContent.has('last_only' || 'last-only'),
			);

			// if help was passed, return the help message, regardless of any other args.
			if (config.help) {
				return new Response(JSON.stringify({ HELP_MESSAGE }), {
					headers: {
						'Content-Type': 'application/json',
					},
				});
			} else {
				// prepare a return type
				let stack;
				if (config.last_only && config.numbering) {
					stack = `${count}:${fibonacci_nth(count)}`;
				} else if (config.last_only && !config.numbering) {
					stack = fibonacci_nth(count);
				} else if (!config.last_only && !config.numbering) {
					stack = fibonacci_seq(count);
				} else if (!config.last_only && config.numbering) {
					const _stack = fibonacci_seq(count);
					console.log(_stack);
					stack = [];

					let i = 0;
					for (const _ in _stack) {
						stack.push(`${i + 1}:${_stack[i]}`);

						i += 1;
					}
				}

				return new Response(JSON.stringify({ stack }), {
					headers: {
						'Content-Type': 'application/json',
					},
				});
			}
		} else {
			return new Response(
				JSON.stringify('ERROR: `GET` request must be a non-zero positive integer.'),
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
		}
	},
};
