import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Router} from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url:String = "https://api.themoviedb.org/3/"
  key:String = "api_key=91e41056f6b7f4453d009dc51fc2732b&language=pt-BR"
  busca
  

  constructor(private http:HttpClient, private router:Router) { 

  }

  public MostPopularMovies(){
   const s = "discover/movie?sort_by=popularity.desc&";
    return this.http.get<any[]>(this.url+s+this.key);
  }

  

  public getMovieByID(id){

    const s = "movie/"
    console.log(this.url+s+id+"?"+this.key)
    return this.http.get<any[]>(this.url+s+id+"?"+this.key);
    
    
  }

  public find(a){
    const l  = "https://api.themoviedb.org/3/search/movie?api_key=91e41056f6b7f4453d009dc51fc2732b&language=pt-BR&query="
    this.busca = this.http.get<any[]>(l+a)
  }



}
