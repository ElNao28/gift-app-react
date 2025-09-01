import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGiftsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [previusTerms, setPreviusTerms] = useState<string[]>([]);
  const [gifs, setgifs] = useState<Gif[]>([]);

  const hanlerTermClicked = (term: string) => {
    console.log({ term });
  };

  const handlerSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if (query.length <= 0) return;

    if (previusTerms.includes(query)) return;

    setPreviusTerms([query, ...previusTerms.slice(0, 8)]);

    const gifsResponse = await getGiftsByQuery(query);
    setgifs(gifsResponse);
  };

  return {
    gifs,
    hanlerTermClicked,
    handlerSearch,
    previusTerms
  };
};
