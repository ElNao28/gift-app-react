import { PreviousSearches } from "./gifs/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { GifsList } from "./gifs/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handlerSearch, hanlerTermClicked, previusTerms } = useGifs();

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
