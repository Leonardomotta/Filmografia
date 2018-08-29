import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../serviços/movie.service'
import {Filmes} from "../../models/movie.model"


@Component({
  selector: 'app-movies-outlet',
  templateUrl: './movies-outlet.component.html',
  styleUrls: ['./movies-outlet.component.css']
})
export class MoviesOutletComponent implements OnInit {

  filmes : Filmes

  constructor(private movie :MovieService ) { 
    this.filmes = new Filmes;
    this.movie.MostPopularMovies().subscribe((dados)=> {this.filmes.results = dados.results})
    console.log(this.filmes.results);
    
    
    
  
    
    
    


  }

  

  ngOnInit() {
  }





}
