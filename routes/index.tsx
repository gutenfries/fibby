import { Head } from '$fresh/runtime.ts';

export default function Home() {
	return (
		<>
			<Head>
				<title>Fibby API</title>
			</Head>
			<div class='p-4 mx-auto max-w-screen-md'>
				<img
					src='/logo.svg'
					class='w-32 h-32'
					alt='the fresh logo: a sliced lemon dripping with juice'
				/>
				<p class='my-6'>
					Welcome to the fibby REST API!
				</p>
				<hr />
				<p class='my-6'>
					check the API at <a href='/api/fibonacci/13'>/api/fibonacci/13</a>!
				</p>
			</div>
		</>
	);
}
