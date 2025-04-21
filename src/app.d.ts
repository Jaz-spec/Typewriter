export {};

declare global {
	declare namespace App {
		interface PageData {
			contentItems: ContentItem[];
		}
	}

	interface ContentItem {
		type: string;
		string: string;
		delay: number;
		pause: number[];
		timeout: number;
		buttonContent: {
			ready: boolean;
			content: string[];
			handler: string;
		};
	}
}
