export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BACKEND_URL: string;
		}
	}

	//contentitem and Data to be the same when content is stored in a database
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

	interface Data {
		text: string;
	}
}
