export default function calcTime(string, delay, pause) {
	let addPause = 0;
	let textPause = string.length * delay;
	pause.forEach((p) => {
		addPause += p;
	});
	let totalPause = addPause + textPause;
	return totalPause;
}
