import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGiftsByQuery = async(query:string):Promise<Gif[]> => {
    const response = await giphyApi.
    get<GiphyResponse>('/search',{
            params:{
                q:query,
                limit:10,
            }
    });

    return response.data.data.map((gif) => {
        return{
            id:gif.id,
            title:gif.title,
            url:gif.images.original.url,
            width:+gif.images.original.width,
            height:+gif.images.original.height
        }
    })
}