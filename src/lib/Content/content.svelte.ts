export function content() {
	let CONTENT: ContentItem[] = [
		{
			type: "button",
			string: "Hello from the footer!",
			delay: 50,
			pause: [],
			timeout: 0,
			buttonContent: {
				ready: false,
				content: ["button 1", "Button 2"],
				handler: "next",
			},
		},
		{
			type: "button",
			string: "Hello again from the footer!",
			delay: 50,
			pause: [],
			timeout: 0,
			buttonContent: {
				ready: false,
				content: ["BUTTON 1", "BUTTON 2"],
				handler: "next",
			},
		},
	];
	return CONTENT;
}
