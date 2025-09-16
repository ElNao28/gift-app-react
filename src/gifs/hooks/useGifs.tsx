import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGiftsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setgifs] = useState<Gif[]>([]);
  const [previusTerms, setPreviusTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const hanlerTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setgifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGiftsByQuery(term);
    setgifs(gifs);
  };

  const handlerSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if (query.length <= 0) return;

    if (previusTerms.includes(query)) return;

    setPreviusTerms([query, ...previusTerms.slice(0, 8)]);

    const gifsResponse = await getGiftsByQuery(query);
    setgifs(gifsResponse);

    gifsCache.current[query] = gifsResponse;

    console.log(gifsCache);
  };

  return {
    gifs,
    hanlerTermClicked,
    handlerSearch,
    previusTerms,
  };
};
