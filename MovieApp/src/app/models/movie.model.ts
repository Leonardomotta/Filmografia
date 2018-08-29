export class Movie{

constructor({vote_count,
        id,
        video,
        vote_average,
        title,
        popularity,
        poster_path,
        original_language,
        original_title,
        genre_ids,
        backdrop_path,
        adult,
        overview,
        release_date}){}

}

export class Filmes{
    
        page : number
        total_results : number
        total_pages : number
        results : Movie[]
      
}