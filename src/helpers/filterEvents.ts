import { TEvent } from "@/lib/types";

export const filterEvents = (data: TEvent[], slug: string) => {
  return data.filter((event) => event.slug === slug);
}