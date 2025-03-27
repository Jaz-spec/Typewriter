export function content() {
	let CONTENT = [
		{
			type: "button",
			string: "Hello from the footer!",
			delay: 50,
			pause: [],
			timeout: 0,
			buttonContent: { ready: false, content: ["button 1", "Button 2"] },
			handler: [() => typewriter(), () => console.log("button 2 clicked")],
		},
		{
			type: "button",
			string: "Hello again from the footer!",
			delay: 50,
			pause: [],
			timeout: 0,
			buttonContent: { ready: false, content: ["BUTTON 1", "BUTTON 2"] },
			handler: [
				() => console.log("button 1 clicked"),
				() => console.log("button 2 clicked"),
			],
		},
	];
	return CONTENT;
}
