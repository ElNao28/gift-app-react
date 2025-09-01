import { useState } from "react";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGiftsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import { GifsList } from "./gifs/GifsList";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previusTerms, setPreviusTerms] = useState<string[]>([]);
  const [gifs, setgifs] = useState<Gif[]>([])

  const hanlerTermClicked = (term: string) => {
    console.log({ term });
  };

  const handlerSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if (query.length <= 0) return;

    if (previusTerms.includes(query)) return;

    setPreviusTerms([query, ...previusTerms.slice(0, 8)]);

    const gifsResponse = await getGiftsByQuery(query)
    setgifs(gifsResponse)
  };

  return (
    <>
      <CustomHeader title="Buscador Gifs" description="Comparte gifs" />
      <SearchBar onQuery={handlerSearch} placeholder="Buscar Gifs" />
      <PreviousSearches
        searches={previusTerms}
        onLabelClicked={hanlerTermClicked}
      />

      <GifsList gifsList={gifs} />
    </>
  );
};
