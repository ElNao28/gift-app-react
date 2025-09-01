import type { Gif } from "./interfaces/gif.interface";

interface Props {
  gifsList: Gif[];
}

export const GifsList = ({ gifsList }: Props) => {
  return (
    <div className="gifs-container">
      {gifsList.map((element) => (
        <div key={element.id} className="gif-card">
          <img src={element.url} alt={element.title} />
          <h3>{element.title}</h3>
          <p>
            {element.width}x{element.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
