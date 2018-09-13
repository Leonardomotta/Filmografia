import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../serviços/movie.service'
import {Filmes} from "../../models/movie.model"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-outlet',
  templateUrl: './movies-outlet.component.html',
  styleUrls: ['./movies-outlet.component.css']
})
export class MoviesOutletComponent implements OnInit {

  filmes 
  query 
  
  

  constructor(private movie :MovieService , private route:ActivatedRoute) {
    this.filmes = new Filmes;
    
    if(this.route.routeConfig.path == "buscar/:query"){

      this.route.params.subscribe(params => {
        this.query = params['query']
      });
      this.movie.find(this.query).subscribe((dados)=> {this.filmes = dados})

    }
    else {
      this.movie.MostPopularMovies().subscribe((dados)=> {this.filmes = dados})
    }
    
    
  }

  

  ngOnInit() {
  }





}
