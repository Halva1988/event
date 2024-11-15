import { TEvent } from "@/lib/types";

const API_KEY = process.env.API_KEY;
const BIN_ID = process.env.BIN_ID;

export async function getData() {
  const headers = new Headers({
		"X-Master-Key": API_KEY ?? "",
		"X-Bin-Meta": "false",
	});

	const response = await fetch(
		`https://api.jsonbin.io/v3/b/${BIN_ID}/latest/`,
		{
			method: "GET",
			headers,
		}
	);

  const data = await response.json();
	const events: TEvent[] = data.events;

  return events;
}