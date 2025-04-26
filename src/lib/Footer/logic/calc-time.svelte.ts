export default function calcTime(
	string: string,
	delay: number,
	pause: number[]
) {
	let addPause = 0;
	let textPause = string.length * delay;

	if (Array.isArray(pause)) {
		pause.forEach((p) => {
			addPause += p;
		});
	} else {
		throw new TypeError("pause must be an array of numbers");
	}
	let totalPause = addPause + textPause;
	return totalPause;
}
