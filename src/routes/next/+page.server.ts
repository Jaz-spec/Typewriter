//import * as db from '$lib/server/database';
import type { PageServerLoad } from "./$types";
import * as dotenv from "dotenv";
dotenv.config();

export const load: PageServerLoad = async () => {
	const response = await fetch(`${process.env.BACKEND_URL}/api`);
	const data: Data = await response.json();
	console.log(data);

	if (data) {
		return data;
	}
};
